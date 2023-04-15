import Link from "next/link";

async function getUser(userId: string) {
  const response = await fetch(`www.test.com/${userId}`);

  const data = await response.json();

  return data;
}
export default async function UsersPage({ params }: any) {
  // const user = await getUser(params.id);

  const id = 1;

  return <Link href={`/user/${id}`}>User {params.id}</Link>;
}
