"use client";

interface ScrollButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollButton = ({ children, className }: ScrollButtonProps) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button onClick={scrollToAbout} className={className}>
      {children}
    </button>
  );
};
