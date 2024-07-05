"use client";
import ShowtimeProps from "@/props/ShowtimeProps";
import { useState } from "react";
import BookTickets from "./BookTickets";
import Seating from "./Seating";

// Props
interface TicketingProps {
  showtime: ShowtimeProps;
}

const Ticketing: React.FC<TicketingProps> = ({ showtime }) => {
  // State to keep track of selected seats
  const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set());

  // Function to run after booking is completed
  const onBooking = () => {
    if (showtime && showtime.booked) {
      showtime.booked?.push(...selectedSeats);
    } else {
      showtime!.booked = [...selectedSeats];
    }
    setSelectedSeats(new Set());
  };

  return (
    <main className="p-3">
      {/* SHOWTIME DETAILS*/}
      <ShowtimeTicktingDetails key={showtime._id} {...showtime} />

      {/* SCREEN */}
      <Screen />

      {/* SEATS */}
      <Seating
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
        booked={new Set(showtime.booked || [])}
      />

      {/* BOOKING BUTTON */}
      {selectedSeats.size > 0 && (
        <BookTickets
          selectedSeats={selectedSeats}
          onBooking={onBooking}
          showtime={showtime}
        />
      )}
    </main>
  );
};

export default Ticketing;

// Showtime details
const ShowtimeTicktingDetails: React.FC<ShowtimeProps> = ({
  date,
  language,
  movie,
  screen,
  time,
}) => (
  <section className="mt-2 mb-6 text-lg text-center">
    {date} &#8208; {time} &#8208; {screen} &#8208; {movie.title} ({language})
  </section>
);

// Cinema screen
const Screen = () => (
  <section>
    <p className="text-center">Screen</p>
    <div className="screen"></div>
  </section>
);
