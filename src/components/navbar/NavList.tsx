"use client";
import NavLinks from "@/constants/NavLinks";
import getBgColor from "@/libs/GetBgColor";
import NavProps from "@/props/NavProps";
import Link from "next/link";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

// List item
const NavListItem: React.FC<NavProps> = ({ label, href }) => (
  <li className="text-center my-5 py-3 md:py-0 mx-1.5 md:my-0 md:inline-block border-0 hover:border-b-2 duration-200 border-white">
    <Link href={href}>{label}</Link>
  </li>
);

// Component
const NavList: React.FC = () => {
  // State to keep track of navbar visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to open and close navbar
  const toggleMenu = () => setIsOpen(!isOpen);

  // Styles
  const listStyles =
    "h-svh w-48 fixed left-0 z-40 border-gray-500 border-r top-0 pt-2 transition-all duration-300 transform";
  const mdListStyles =
    "md:h-fit md:border-0 md:bg-transparent md:w-fit md:relative md:inline-block md:mt-0 md:p-0 md:translate-x-0";

  return (
    <div className="relative">
      {/* HAMBURGER BUTTON */}
      <div className="block md:hidden">
        <button className="p-2 focus:outline-none" onClick={toggleMenu}>
          <RxHamburgerMenu size={"1.8rem"} />
        </button>
      </div>

      {/* NAVIGATION MENU*/}
      <ul
        className={`${listStyles} ${mdListStyles} ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={getBgColor("primary")}
      >
        {/* CLOSE BUTTON */}
        <div className="text-right w-full md:hidden">
          <button className="p-2 focus:outline-none" onClick={toggleMenu}>
            <IoCloseOutline size={"2rem"} />
          </button>
        </div>

        {/* NAVIGATION LIST */}
        {NavLinks.map((navLink) => (
          <NavListItem key={navLink.href} {...navLink} />
        ))}
      </ul>
    </div>
  );
};

export default NavList;
