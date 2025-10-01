import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoAdd } from "react-icons/io5";

const ConsultationPage = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="card mt-4 bg-white shadow-lg p-8 rounded-lg w-full h-full max-w-6xl ">
        <h1 className="text-2xl font-bold mb-2">Consultation Page</h1>
        <p className="text-gray-500 mb-8">
          Welcome to the consultation page. Here you can book a consultation or
          see your past consultations.
        </p>
        <Image
          src="/assets/consult.svg"
          alt="Consultation"
          width={300}
          height={300}
          className="mx-auto"
        />
        <div className="text-center">
          <Link href="/booking">
            <Button className="mx-auto mt-5">
              <IoAdd />
              Book Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
