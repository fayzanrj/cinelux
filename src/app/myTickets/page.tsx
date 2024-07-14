import RemoveAnimationClass from "@/components/shared/RemoveAnimationClass";
import fetchUserBookings from "@/libs/fetch/FetchUserBookings";
import UserProps from "@/props/UserProps";
import { authOptions } from "@/utilities/AuthOptions";
import { getServerSession } from "next-auth";

const MyTickets = async () => {
  const session = await getServerSession(authOptions);

  const bookings = await fetchUserBookings(session?.user as UserProps);

  return (
    <>
      <RemoveAnimationClass />
      <div>MyTickets</div>
    </>
  );
};

export default MyTickets;
