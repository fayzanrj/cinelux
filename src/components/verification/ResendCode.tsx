"use client";
import sendVerificationCode from "@/libs/SendVerificationCode";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

// Props
interface ResendCodeProps {
  email: string;
}

const ResendCode: React.FC<ResendCodeProps> = ({ email }) => {
  // State to keep track of time
  const [timer, setTimer] = useState(60);
  const [isSending, setIsSending] = useState(false);

  // Function to send code again
  const sendCode = async () => {
    try {
      setIsSending(true);
      // Sending code
      const sent = await sendVerificationCode(email);

      // If code is sent
      if (sent) {
        toast.success(
          "A new verification code has been sent to your provided mail"
        );
        setTimer(60);
      }
    } finally {
      setIsSending(false);
    }
  };

  // Use effect to set timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    // Cleaning up interval on component unmount
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="my-4">
      {timer === 0 ? (
        // SEND BUTTON
        <button
          onClick={sendCode}
          className="h-5 text-sm disabled:opacity-20"
          disabled={isSending}
        >
          Send Code Again
        </button>
      ) : (
        // TIMER
        <p className="text-sm text-gray-500 h-6">Resend in {timer} seconds</p>
      )}
    </div>
  );
};

export default ResendCode;
