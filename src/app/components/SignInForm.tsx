"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { ClipLoader } from "react-spinners";
import ROUTES from "@/routes";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const router = useRouter();

  const [username, setUsername] = useState<string>(""); // Manage username state
  const [password, setPassword] = useState<string>(""); // Manage password state
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = async () => {
    // e.preventDefault();
    try {
      setIsLoading(true);
      setIsError(false);
      const result = await signIn("credentials", {
        username: username,
        password: password,
        redirect: false, // Set to false to prevent automatic redirection
      });

      if (result?.ok) {
        await router.push(ROUTES.HOME);
        router.refresh();
      } else {
        console.error("Sign-in error:", result?.error);
        setIsError(true);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-wrap mt-0 -mx-3">
      <div className="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
        <div className="relative flex flex-col min-w-0 mt-32 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
          {/* Welcome Label */}
          <div className="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
            <h3 className="relative z-10 font-bold text-transparent bg-gradient-to-tl from-pink-600 to-red-600 bg-clip-text">
              Welcome back
            </h3>
            <p className="mb-0 text-lg">
              Enter your username and password to sign in
            </p>
          </div>

          <div className="flex-auto p-6">
            <div>
              <label className="mb-2 ml-1 font-bold text-sm text-slate-700">
                Username
              </label>
              <div className="mb-4">
                <input
                  type="text"
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-red-300 focus:outline-none focus:transition-shadow"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="username-addon"
                  required
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onBlur={(e) => setUsername(e.target.value)}
                />
              </div>
              <label className="mb-2 ml-1 font-bold text-xs text-slate-700">
                Password
              </label>
              <div className="mb-4">
                <input
                  type="password"
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-red-300 focus:outline-none focus:transition-shadow"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="password-addon"
                  required
                  autoComplete="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onSubmit(); // Trigger onSubmit on "Enter" key press
                    }
                  }}
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}

                  // required
                  // autoComplete="password"
                />
              </div>

              {isError && (
                <p className="mb-0 text-base text-red-600">
                  Invalid username or password. Please check your credentials
                  and try again.
                </p>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={onSubmit}
                  className="flex items-center justify-center w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-pink-600 to-red-600 hover:scale-102 hover:shadow-soft-xs active:opacity-85"
                >
                  {!isLoading ? (
                    "Sign In"
                  ) : (
                    <ClipLoader size={20} color="#FFF" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12">
        <div className="absolute top-0 hidden w-3/5 h-full -mr-32 overflow-hidden -skew-x-10 -right-40 rounded-bl-xl md:block">
          <div
            className="absolute inset-x-0 top-0 z-0 h-full -ml-16 bg-cover skew-x-10"
            style={{
              backgroundImage: "url('/assets/img/curved6.jpg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
