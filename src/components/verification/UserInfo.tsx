"use client";
import React, { useState } from "react";
import FormLayout from "../shared/FormLayout";
import InputField from "../shared/InputField";
import { handleApiError } from "@/libs/HandleApiError";
import UserProps from "@/props/UserProps";
import sendVerificationCode from "@/libs/SendVerificationCode";
import { toast } from "sonner";

// Props
interface UserInfoProps {
  onSent: () => void;
  user: UserProps;
  setUser: React.Dispatch<React.SetStateAction<UserProps>>;
}

const UserInfo: React.FC<UserInfoProps> = ({ user, setUser, onSent }) => {
  // State
  const [isSending, setIsSending] = useState(false);

  // Function to handle name
  const handleNameChange = (text: string) =>
    setUser((prev) => ({ ...prev, name: text }));

  // Function to handle email
  const handleEmailChange = (text: string) =>
    setUser((prev) => ({ ...prev, email: text }));

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSending(true);

      // Sending code
      const codeSent = await sendVerificationCode(user.email);

      // If sent
      if (codeSent) {
        toast.success("Verification code has been sent on your email")
        onSent();
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <FormLayout
      variant="USER_INFO"
      handleSubmit={handleSubmit}
      isLoading={isSending}
    >
      <InputField
        id="name"
        type="text"
        label="Name"
        placeholder="Enter full name"
        value={user.name}
        onChange={handleNameChange}
        required
        minLength={6}
      />

      <InputField
        id="email"
        type="email"
        label="Email"
        placeholder="Enter email"
        value={user.email}
        onChange={handleEmailChange}
        required
      />
    </FormLayout>
  );
};

export default UserInfo;
