import getBgColor from "@/libs/GetBgColor";
import { signOut } from "next-auth/react";
import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import AnimationLink from "../shared/AnimationLink";
import ScreenModal from "../shared/ScreenModal";

// Props
interface LoggedInUserProps {
  href: string;
  name: string;
  email: string;
  closeModal: () => void;
}

const LoggedInUser: React.FC<LoggedInUserProps> = ({
  closeModal,
  href,
  name,
  email,
}) => {
  // Function to log out user
  const handleLogout = () => signOut({ redirect: false });

  return (
    <ScreenModal closeModal={closeModal} showCancel isSimpleModal>
      <div
        className="w-[95%] max-w-96 px-3 py-4 drop-shadow-xl shadow-lg rounded-lg text-center"
        style={getBgColor("primary")}
      >
        {/* LOGGED IN USER INFORMATION */}
        <UserInformation name={name} email={email} />

        {/* ACTION BUTTONS */}
        <ActionButtons href={href} handleLogout={handleLogout} />
      </div>
    </ScreenModal>
  );
};

// Logged in user information component
const UserInformation: React.FC<{ name: string; email: string }> = ({
  name,
  email,
}) => (
  <>
    <p className="text-gray-300">You are currently logged in as:</p>
    <div className="my-6">
      <p className="my-0.5 text-lg">{name}</p>
      <p className="my-0.5">{email}</p>
    </div>
  </>
);

// Modal action buttons
const ActionButtons: React.FC<{ href: string; handleLogout: () => void }> = ({
  href,
  handleLogout,
}) => (
  <div className="w-full mt-10 flex justify-between">
    <button
      onClick={handleLogout}
      className="w-1/2 text-center h-10 text-white rounded-lg flex justify-center items-center"
    >
      Log out
      <IoLogOutOutline className="ml-1.5" size={"1.4rem"} />
    </button>
    <AnimationLink href={href} className="w-1/2">
      <button className="w-full text-center h-10 bg-blue-700 text-white rounded-lg">
        Continue {"->"}
      </button>
    </AnimationLink>
  </div>
);

export default LoggedInUser;
