import React from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";
import { FaGoogle } from "react-icons/fa";

const Loginpage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow px-8 py-6">
        <h1 className="text-3xl font-bold mb-2">Login</h1>
        <p className="text-gray-500 mb-6">Login to your account</p>
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
          className="w-full"
        >
          <Button type="submit">
            <FaGoogle className="mr-2 " />
            Signin with Google
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
