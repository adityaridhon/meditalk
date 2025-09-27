import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Navbar() {
  const menu = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Consultation", href: "/consultation" },
  ];

  return (
    <>
      <div className="navbar shadow-sm sticky top-0 bg-white z-50">
        <div className="py-5 px-10 flex justify-between items-center border-b ">
          <div className="logo flex items-center gap-4">
            <Image src="/assets/logo.png" alt="Logo" width={45} height={45} />
            <h1 className="text-2xl font-bold text-primary">MediTalk</h1>
          </div>
          <div className="menu">
            <ul className="flex gap-6 text-md font-medium">
              {menu.map((item) => (
                <li key={item.name} className="hover:text-primary ">
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button">
            <Link href="/consultation">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
