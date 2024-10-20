import Link from "next/link";
import PermissionCheck from "./PermissionCheck";

export default async function Navbar() {
  return (
    <nav className="bg-blue-800 p-4">
      <ul className="flex justify-evenly text-2xl font-bold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/api/auth/signin">Sign In</Link>
        </li>
        <li>
          <Link href="/api/auth/signout">Sign Out</Link>
        </li>
        <li>
          <Link href="/server">Server</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
        <PermissionCheck permission={["admin"]}>
          <li>
            <Link href="/extra">Extra</Link>
          </li>
        </PermissionCheck>
      </ul>
    </nav>
  );
}
