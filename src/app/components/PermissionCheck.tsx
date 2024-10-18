import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

interface Props {
  permission: string[];
  children: React.ReactNode;
}

export default async function PermissionCheck({ permission, children }: Props) {
  const session = await getServerSession(options);
  if (!session || !permission.includes(session.user?.role)) {
    return null;
  }

  return <>{children}</>;
}
