"use client";
import { useState } from "react";
import { handleApiError } from "../../libs/HandleApiError";
import ShowtimeProps from "../../props/ShowtimeProps";
import ScreenLoader from "../shared/ScreenLoader";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// Props
interface BookTicketsProps {
  selectedSeats: Set<string>;
  onBooking: () => void;
  showtime: ShowtimeProps;
}

const BookTickets: React.FC<BookTicketsProps> = ({
  selectedSeats,
  showtime,
  onBooking,
}) => {
  // State for loading
  const [isLoading, setIsLoading] = useState(false);

  // Getting user
  const session = useSession();

  // Router for navigation
  const router = useRouter();

  // Function to handle click
  const handleClick = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/bookings/bookTickets/${showtime._id}`,
        {
          user: session.data?.user,
          seats: [...selectedSeats],
        },
        {
          headers: {
            "Content-Type": "application/json",
            accessToken: process.env.NEXT_PUBLIC_USER_API_ACCESS_TOKEN!,
          },
        }
      );

      // Pushing to checkout payment session
      if (res.data.session.url) {
        router.push(res.data.session.url);
      }
    } catch (error) {
      console.error(error);
      handleApiError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {isLoading && <ScreenLoader />}

      <section className="my-10 text-center">
        <button
          onClick={handleClick}
          disabled={selectedSeats.size == 0 || isLoading}
          className="bg-blue-700 p-1 rounded-md"
        >
          Book Tickets
        </button>
      </section>
    </>
  );
};

export default BookTickets;
