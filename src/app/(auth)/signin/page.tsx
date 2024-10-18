// import SignIn from "@/components/auth/signIn/SignIn";

import { options } from "@/app/api/auth/[...nextauth]/options";
import SignInForm from "@/app/components/SignInForm";
import { getServerSession } from "next-auth";

export default async function SignInPage() {
  const session = await getServerSession(options);

  return (
    <div className="mx-auto my-8 p-8 max-w-lg bg-zinc-100 rounded-sm">
      <h2 className="text-center text-2xl text-blue-400 mb-8 font-bold">
        Sign in
      </h2>
      {session ? (
        <p className="text-center">You are already signed in.</p>
      ) : (
        <div>
          <SignInForm />
          <p className="mb-4">
            Sign in to your account or{" "}
            {/* <Link href="/register" className="underline">
              create a new account.
            </Link> */}
          </p>
        </div>
      )}
    </div>
  );
}
