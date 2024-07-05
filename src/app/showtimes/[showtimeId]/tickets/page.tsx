import Ticketing from "@/components/tickets/Ticketing";
import fetchShowtimeById from "@/libs/fetch/FetchShowtimeById";
import React from "react";

// Props
interface TicketsPageProps {
  params: {
    showtimeId: string;
  };
}

const Tickets = async ({ params }: TicketsPageProps) => {
  // Destructuring
  const { showtimeId } = params;

  // Validating showtime id
  if (showtimeId.length !== 24) return null;

  // Fetching showtime
  const showtime = await fetchShowtimeById(showtimeId);

  // If some errors occurs while fetching showtime details
  if (!showtime) return null;

  return <Ticketing showtime={showtime} />;
};

export default Tickets;
