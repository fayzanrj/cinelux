"use client";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Props
interface ScrollButtonProps {
  variant: "LEFT" | "RIGHT";
  handleClick: () => void;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({
  variant,
  handleClick,
}) => {
  return (
    <button
      className={`p-2 bg-gray-600 absolute top-1/2 -translate-y-1/2 z-30 ${
        variant === "LEFT" ? "left-2" : "right-2"
      }`}
      onClick={handleClick}
    >
      {variant === "LEFT" ? <IoIosArrowBack  /> : <IoIosArrowForward  />}
    </button>
  );
};

export default ScrollButton;
