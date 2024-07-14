"use client";
import addAnimationClass from "@/libs/AddAnimationClass";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

// Props
interface AnimationLinkProps extends LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

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

    // Getting current href
    const { pathname, search } = window.location;
    const currentPath = pathname + search;

    // If user is not at href
    if (currentPath !== href) {
      // Adding animation and waiting
      await addAnimationClass(400);
      // Pushing
      router.push(href);
    }
  };

  return (
    <Link href={href} onClick={handleOnClick} {...props}>
      {children}
    </Link>
  );
};

export default AnimationLink;
