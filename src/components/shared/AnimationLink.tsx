"use client";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

// Props
interface AnimationLinkProps extends LinkProps {
  href: string;
  children: React.ReactNode;
  className? : string
}

// Function to make function to stop
const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const AnimationLink: React.FC<AnimationLinkProps> = ({
  children,
  href,
  ...props
}) => {
  // Router for pushing
  const router = useRouter();

  // Function to handle click
  const handleOnClick = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    // Accessing body and adding class in it
    const body = document.querySelector("body");
    body?.classList.add("page-transition");

    // Promise
    await sleep(500);

    // Pushing
    router.push(href);

    // Promise
    await sleep(1000);

    // Removing class
    body?.classList.remove("page-transition");
  };

  return (
    <Link href={href} onClick={handleOnClick} {...props}>
      {children}
    </Link>
  );
};

export default AnimationLink;
