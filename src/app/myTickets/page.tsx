import BookingsList from "@/components/myTickets/BookingsList";
import NoItemsFound from "@/components/shared/NoItemsFound";
import RemoveAnimationClass from "@/components/shared/RemoveAnimationClass";
import fetchUserBookings from "@/libs/fetch/FetchUserBookings";
import UserProps from "@/props/UserProps";
import { authOptions } from "@/utilities/AuthOptions";
import { getServerSession } from "next-auth";

const MyTickets = async () => {
  const session = await getServerSession(authOptions);

  const bookings = await fetchUserBookings(session?.user as UserProps);

  if (!bookings) return <RemoveAnimationClass />;
  return (
    <>
      <RemoveAnimationClass />
      <main className="p-3">
        <h1 className="mt-2 mb-6 text-3xl font-semibold">MY TICKETS</h1>
        {bookings.length > 0 ? (
          <BookingsList bookings={bookings} />
        ) : (
          <NoItemsFound label="No bookings found" />
        )}
      </main>
    </>
  );
};

export default MyTickets;
