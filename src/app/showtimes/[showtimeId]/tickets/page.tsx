import BreadCrumbs from "@/components/shared/BreadCrumbs";
import RemoveAnimationClass from "@/components/shared/RemoveAnimationClass";
import Ticketing from "@/components/tickets/Ticketing";
import fetchShowtimeById from "@/libs/fetch/FetchShowtimeById";

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

  return (
    <>
      <RemoveAnimationClass />
      <main className="p-3">
        {/* NAVIGATION */}
        <BreadCrumbs currentPage={"TICKETS"} />

        <Ticketing showtime={showtime} />
      </main>
    </>
  );
};

export default Tickets;
