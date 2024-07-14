"use client";
import NavLinks from "@/constants/NavLinks";
import getBgColor from "@/libs/GetBgColor";
import React, { useState } from "react";
import NavbarButton from "./NavbarButton";
import NavListItem from "./NavListItem";

// Component
const NavList: React.FC = () => {
  // State to keep track of navbar visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to open navbar
  const openNavbar = () => setIsOpen(true);

  // Function to close navbar
  const closeNavbar = () => setIsOpen(false);

  // Styles
  const listStyles =
    "h-svh w-48 fixed left-0 z-40 border-gray-500 border-r top-0 pt-2 transition-all duration-300 transform";
  const mdListStyles =
    "md:h-fit md:border-0 md:bg-transparent md:w-fit md:relative md:inline-block md:mt-0 md:p-0 md:translate-x-0";

  return (
    <div className="relative inline-block align-middle">
      {/* HAMBURGER BUTTON */}
      <NavbarButton
        variant="HAMBURGER"
        className="block md:hidden"
        onClick={openNavbar}
      />

      {/* NAVIGATION MENU*/}
      <ul
        className={`${listStyles} ${mdListStyles} ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={getBgColor("primary")}
      >
        {/* CLOSE BUTTON */}
        <NavbarButton
          variant="CLOSE"
          className="text-right w-full md:hidden"
          onClick={closeNavbar}
        />

        {/* NAVIGATION LIST */}
        {NavLinks.map((navLink) => (
          <NavListItem
            key={navLink.href}
            {...navLink}
            closeNavbar={closeNavbar}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavList;
