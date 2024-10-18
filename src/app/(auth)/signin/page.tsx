import { options } from "@/app/api/auth/[...nextauth]/options";
import SignInForm from "@/app/components/SignInForm";
import ROUTES from "@/routes";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await getServerSession(options);

  if (session) {
    redirect(ROUTES.HOME);
  }

  return <SignInForm />;
}
