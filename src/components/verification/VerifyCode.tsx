import { handleApiError } from "@/libs/HandleApiError";
import UserProps from "@/props/UserProps";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";
import FormLayout from "../shared/FormLayout";
import InputField from "../shared/InputField";
import ResendCode from "./ResendCode";

// Props
interface VerifyCodeProps {
  user: UserProps;
  handleVerification: () => void;
}

const VerifyCode: React.FC<VerifyCodeProps> = ({
  user,
  handleVerification,
}) => {
  // State to keep track of code
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle code input change
  const handleChange = (text: string) => text.length <= 6 && setCode(text);

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      //   Validating code
      if (code.length < 6) {
        toast.error("Invalid code");
        return;
      }

      // API CALL
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/userAuth/verifyCode`,
        { email: user.email, code },
        {
          headers: {
            "Content-Type": "application/json",
            accessToken: process.env.NEXT_PUBLIC_USER_API_ACCESS_TOKEN!,
          },
        }
      );

      toast.success(response.data.message);
      handleVerification();
    } catch (error) {
      handleApiError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormLayout
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      variant="CODE_VERIFICATION"
    >
      {/* MESSAGE */}
      <p className="text-sm text-center">
        A verification code has been sent to {user.email}
      </p>

      <InputField
        id="code"
        type="number"
        label="Code"
        placeholder="Enter code here"
        value={code}
        onChange={handleChange}
        required
      />

      {/* BUTTON TO RESEND CODE */}
      <ResendCode user={user} />
    </FormLayout>
  );
};

export default VerifyCode;
