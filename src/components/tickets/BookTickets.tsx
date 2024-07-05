'use client'
import { useState } from "react";
import { handleApiError } from "../../libs/HandleApiError";
import ShowtimeProps from "../../props/ShowtimeProps";
import ScreenLoader from "../shared/ScreenLoader";

// Props
interface BookTicketsProps {
  selectedSeats: Set<string>;
  onBooking: () => void;
  showtime: ShowtimeProps;
}

const BookTickets: React.FC<BookTicketsProps> = ({
  selectedSeats,
  onBooking,
}) => {
  // State for loading
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle click
  const handleClick = async () => {
    try {
      setIsLoading(true);
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
