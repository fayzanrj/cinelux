import Image from "next/image";
import React from "react";

// Props
interface LogoProps {
  size?: "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ size = "md" }) => (
  <Image
    src={"/logo.png"}
    alt="logo"
    width={999}
    height={999}
    className={size === "md" ? "w-16" : "w-24 mx-auto"}
  />
);

export default Logo;
