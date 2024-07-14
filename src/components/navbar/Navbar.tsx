import Link from "next/link";
import Logo from "../shared/Logo";
import NavList from "./NavList";
import AnimationLink from "../shared/AnimationLink";
import ProceedButton from "../shared/ProceedButton";

const Navbar = () => {
  return (
    <nav className="relative flex justify-between items-center h-20 border-b border-gray-600 px-2 ">
      <div>
        <NavList />
        <ProceedButton variant="MY_TICKETS" />
      </div>
      <AnimationLink href="/">
        <Logo />
      </AnimationLink>
    </nav>
  );
};

export default Navbar;
