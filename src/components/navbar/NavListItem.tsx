"use client";
import NavProps from "@/props/NavProps";
import React from "react";
import AnimationLink from "../shared/AnimationLink";

// Props
interface NavListItemProps extends NavProps {
  closeNavbar: () => void;
}

// List item
const NavListItem: React.FC<NavListItemProps> = ({
  label,
  href,
  closeNavbar,
}) => (
  <li
    onClick={closeNavbar}
    className="text-center my-5 py-3 md:py-0 mx-1.5 md:my-0 md:inline-block border-0 hover:border-b-2 duration-200 border-white"
  >
    <AnimationLink href={href}>{label}</AnimationLink>
  </li>
);

export default NavListItem;
