export async function getUser(name: string): Promise<any> {
  const res = await fetch(
    `http://localhost:3000/api/user?username=${name}&type=ss`,
  );
  return res.json();
}
