"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import ScreenLoader from "../shared/ScreenLoader";
import RedirectingCoutdown from "./RedirectingCoutdown";

// Props
interface PaymentFailedProps {
  bookingId: string;
}

const PaymentFailed: React.FC<PaymentFailedProps> = ({ bookingId }) => {
  // States
  const [isLoading, setIsLoading] = useState(true);

  // Session
  const session = useSession();
  //   Router for naviagtion
  const router = useRouter();

  // Use effect to verify booking
  useEffect(() => {
    const bookingFailed = async () => {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/bookings/bookingFailed/${bookingId}`,
          { user: session.data?.user },
          {
            headers: {
              "Content-Type": "application/json",
              accessToken: process.env.NEXT_PUBLIC_USER_API_ACCESS_TOKEN!,
            },
          }
        );

        setIsLoading(false);
      } catch (error) {
        // @ts-ignore
        if (error?.response?.status === 400) {
          const path = window.location.pathname.split("/");
          path[4] = `paymentSuccess?bookingId=${bookingId}`;
          const newPath = path.join("/");
          router.push(newPath);
        } else {
          router.push("/");
        }
      }
    };

    // Calling function
    bookingFailed();
  }, [bookingId, router, session]);

  if (isLoading)
    return (
      <main className="p-3">
        <ScreenLoader />
      </main>
    );

  return (
    <main className="p-3 flex justify-center items-center flex-col gap-8 max-w-96 w-[98%] mx-auto text-center">
      <ImCross size={"8rem"} color="red" className="mx-auto" />
      <h1 className="text-4xl font-bold">Payment Failed</h1>
      <p className="text-lg">
        Your payment for Booking No&#46; {bookingId} has been failed&#46;
      </p>

      <RedirectingCoutdown label="showtimes" href="/showtimes" />
    </main>
  );
};

export default PaymentFailed;
