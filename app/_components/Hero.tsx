"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="hero-section flex flex-col-reverse md:flex-row items-center justify-center gap-10 my-20">
        <div className="caption max-w-xl text-center md:text-left space-y-3">
          <h3 className="text-lg ">
            Welcome to <span className="text-primary font-bold">MediTalk</span>
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold">
            Your health, our priority
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            facilis a tempora incidunt ratione blanditiis adipisci, sapiente
            repudiandae ipsa? Quae dolores magni corrupti esse necessitatibus
            deleniti beatae maiores doloribus et.
          </p>
          <Link href="/consultation">
            <Button className="mt-4">Get Started</Button>
          </Link>

          <Button
            variant={"secondary"}
            className="ml-4"
            onClick={scrollToAbout}
          >
            View More
          </Button>
        </div>
        <div className="image">
          <Image
            src="/assets/hero.svg"
            alt="Hero Image"
            width={400}
            height={400}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
