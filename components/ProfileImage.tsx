"use client";

import React from "react";
import Image from "next/image";

interface ProfileImageProps {
  src: string;
  alt: string;
}

export const ProfileImage = ({ src, alt }: ProfileImageProps) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [hasError, setHasError] = React.useState(false);

  const handleError = () => {
    console.log("Image failed to load:", src);
    setHasError(true);
    setImgSrc("/assets/logo.png");
  };

  // For external images, use regular img tag with Next.js domain configured
  if (src.includes("googleusercontent.com")) {
    return (
      <img
        src={hasError ? "/assets/logo.png" : src}
        alt={alt}
        className="w-8 h-8 rounded-full object-cover"
        onError={handleError}
      />
    );
  }

  // For local images, use Next.js Image component
  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={32}
      height={32}
      className="w-8 h-8 rounded-full object-cover"
      onError={handleError}
    />
  );
};