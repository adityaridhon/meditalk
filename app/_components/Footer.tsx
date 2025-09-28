import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const menu = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Consultation", href: "/consultation" },
  ];
  return (
    <div className="w-full bg-white py-4 border-t border-t-primary mt-10">
      <footer className="max-w-6xl mt-4 mx-auto px-6 md:px-24 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <Image src="/assets/logo.png" alt="Logo" width={50} height={50} />
          <h1 className="font-bold text-3xl text-primary">MediTalk</h1>
        </div>
        <div className="caption flex gap-10">
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <h2 className="font-semibold">NAVIGATION</h2>
            <ul className="mt-2 space-y-2 text-gray-500">
              {menu.map((item) => (
                <li key={item.name} className="hover:text-primary ">
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <h2 className="font-semibold">SUPPORT</h2>
            <ul className="mt-2 space-y-2 text-gray-500">
              <li className="hover:text-primary">
                <Link href={"#faq"}>FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <h3 className="text-center mt-10 text-sm text-gray-700">
        Copyright © 2025 Aditya Ridho
      </h3>
    </div>
  );
};

export default Footer;
