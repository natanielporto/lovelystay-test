import Link from "next/link";

export default async function UsersPage() {
  const id = 1;

  return <Link href={`/user/${id}`}>User</Link>;
}
