"use client";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

// Props
interface NavbarButtonProps {
  variant: "HAMBURGER" | "CLOSE";
  onClick: () => void;
  className: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({
  className,
  onClick,
  variant,
}) => {
  return (
    <div className={className}>
      <button className="p-2 focus:outline-none" onClick={onClick}>
        {variant === "HAMBURGER" ? (
          <RxHamburgerMenu size={"1.8rem"} />
        ) : (
          <IoCloseOutline size={"2rem"} />
        )}
      </button>
    </div>
  );
};

export default NavbarButton;
