import React from "react";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { Metadata } from "next";
import { signIn } from "@/auth";

export const metadata: Metadata = {
  title: "Sign In | MediTalk",
  description: "Sign in to your MediTalk account",
};

const SigninPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-md p-8 border rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-2">Login</h1>
        <p className="text-md text-gray-500 mb-6">
          Login to your account with Google
        </p>
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <Button>
            <FaGoogle />
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;
