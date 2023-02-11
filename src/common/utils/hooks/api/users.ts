export async function getUser(name: string): Promise<any> {
  const res = await fetch(
    `http://minecraft.gg/api/user?username=${name}&type=ss`,
  );
  return res.json();
}
