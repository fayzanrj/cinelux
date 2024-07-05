"use client";
import React, { useState } from "react";
import ScreenModal from "../shared/ScreenModal";
import VerifyCode from "./VerifyCode";
import UserInfo from "./UserInfo";
import UserProps from "@/props/UserProps";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

// Props
interface VerificationModalProps {
  closeModal: () => void;
  showtimeId: string;
}

const VerificationModal: React.FC<VerificationModalProps> = ({
  closeModal,
  showtimeId,
}) => {
  // State to keep track if code is sent or not
  const [isCodeSent, setIsCodeSent] = useState(false);
  // State to keep track of user information
  const [user, setUser] = useState<UserProps>({
    name: "",
    email: "",
  });

  // Hook to push to seats page
  const router = useRouter();

  // Function to change state of is code sent after it is sent
  const handleSent = () => setIsCodeSent(true);

  // Function to run after verification
  const handleVerification = async () => {
    closeModal();
    await signIn("credentials", { ...user, redirect: false });
    router.push(`/showtimes/${showtimeId}/tickets`);
  };

  return (
    <ScreenModal isForm closeModal={closeModal} showCancel>
      {isCodeSent ? (
        <VerifyCode user={user} handleVerification={handleVerification} />
      ) : (
        <UserInfo user={user} setUser={setUser} onSent={handleSent} />
      )}
    </ScreenModal>
  );
};

export default VerificationModal;
