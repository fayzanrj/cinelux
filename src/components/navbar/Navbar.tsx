import Link from "next/link";
import Logo from "../shared/Logo";
import NavList from "./NavList";
import AnimationLink from "../shared/AnimationLink";

const Navbar = () => {
  return (
    <nav className="relative flex justify-between items-center h-20 border-b border-gray-600 px-2 ">
      <NavList />
      <AnimationLink href="/">
        <Logo />
      </AnimationLink>
    </nav>
  );
};

export default Navbar;
