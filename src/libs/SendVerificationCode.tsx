import axios from "axios";
import { toast } from "sonner";
import { handleApiError } from "./HandleApiError";

const sendVerificationCode = async (email: string) => {
  try {
    // API CALL
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/userAuth/sendCode`,
      { email },
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
