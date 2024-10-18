"use client";

import { signIn } from "next-auth/react";
import React from "react";
// import TextBox from "@elements/Text";

const SignInForm = async () => {
  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: "steven",
      password: "1234",
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
      {/* <TextBox
        labelText="User Name"
        onChange={(e) => (userName.current = e.target.value)}
      /> */}
      <input type="text" value={"steven"} />

      {/* <Button onClick={onSubmit}>Login</Button> */}
      <button onClick={onSubmit}>Login</button>
    </div>
  );
};

export default SignInForm;
