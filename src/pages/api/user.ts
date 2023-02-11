/**
 * Mojang API endpoints
 */
export const MOJANG_API = {
  UUID: 'https://api.mojang.com/users/profiles/minecraft/',
  SKIN: 'https://sessionserver.mojang.com/session/minecraft/profile/',
};

const getUuid = (username: string) =>
  new Promise<{ name: string; id: string }>((resolve, reject) => {
    fetch(MOJANG_API.UUID.concat(username))
      .then((res) => {
        if (res.status === 204) throw new Error('Username not found');
        return res.json();
      })
      .then((json) => json)
      .then(resolve)
      .catch(reject);
  });

const getSkin = (uuid: string) =>
  new Promise<Buffer>((resolve, reject) =>
    fetch(MOJANG_API.SKIN.concat(uuid))
      .then((res) => res.json())
      .then((profile) =>
        Buffer.from(profile.properties[0].value, 'base64').toString('ascii'),
      )
      .then((buf) => JSON.parse(buf).textures)
      .then(resolve)
      .catch(reject),
  );

const errHandler = (err: any, response: any) => {
  console.error(err);
  return response
    .status(err.message === 'Username not found' ? 400 : 500)
    .json({ err: err.message });
};

export default function handler(request: any, response: any) {
  const username = request.query.username;

  if (!username || username.length < 1)
    return response.status(400).json({ err: 'No username provided' });

  getUuid(username)
    .then(async (data) => {
      const skin = await getSkin(data.id);

      return response.json({ user: { ...data, ...skin } });
    })
    .catch((err) => errHandler(err, response));
}
