import UserProps from "@/props/UserProps";
import axios from "axios";
import { handleApiError } from "./HandleApiError";

const sendVerificationCode = async (user: UserProps) => {
  try {
    // API CALL
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/userAuth/sendCode`,
      { ...user },
      {
        headers: {
          "Content-Type": "application/json",
          accessToken: process.env.NEXT_PUBLIC_USER_API_ACCESS_TOKEN!,
        },
      }
    );
    return true;
  } catch (error) {
    // Handling error
    handleApiError(error);
    return false;
  }
};

export default sendVerificationCode;
