"use client";
import React, { useEffect, useState } from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import RedirectingCoutdown from "./RedirectingCoutdown";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSession } from "next-auth/react";
import ScreenLoader from "../shared/ScreenLoader";

// Props
interface PaymentSuccessProps {
  bookingId: string;
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ bookingId }) => {
  // States
  const [isLoading, setIsLoading] = useState(true);

  // Session
  const session = useSession();
  //   Router for naviagtion
  const router = useRouter();

  // Use effect to verify booking
  useEffect(() => {
    const verifyBooking = async () => {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/bookings/verifyBooking/${bookingId}`,
          { user: session.data?.user },
          {
            headers: {
              "Content-Type": "application/json",
              accessToken: process.env.NEXT_PUBLIC_USER_API_ACCESS_TOKEN!,
            },
          }
        );

        console.log({ res });
        setIsLoading(false);
      } catch (error) {
        console.log({ error });
        // @ts-ignore
        if (error.response.status === 400) {
          const path = window.location.pathname.split("/");
          path[4] = `paymentFailed?bookingId=${bookingId}`;
          const newPath = path.join("/");
          router.push(newPath);
        } else {
          router.push("/");
        }
      }
    };

    // Calling function
    if (isLoading) verifyBooking();
  }, [bookingId]);

  if (isLoading)
    return (
      <main className="p-3">
        <ScreenLoader />
      </main>
    );

  return (
    <main className="p-3 flex justify-center items-center flex-col gap-8 max-w-96 w-[98%] mx-auto text-center">
      <IoCheckmarkDoneCircleSharp
        size={"8rem"}
        color="#34eb8f"
        className="mx-auto"
      />
      <h1 className="text-4xl font-bold">Payment Successful</h1>
      <p className="text-lg">
        Thank you for your payment. Your transaction was completed
        successfully&#46;
      </p>

      <RedirectingCoutdown label="my tickets" href="/myTickets" />
    </main>
  );
};

export default PaymentSuccess;
