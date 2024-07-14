import MovieProps from "@/props/MovieProps";
import getHeaders from "../GetHeaders";
import UserProps from "@/props/UserProps";
import BookingProps from "@/props/BookingProps";

const fetchUserBookings = async (user: UserProps) => {
  const headers = getHeaders();

  if (!user) return null;

  try {
    // API CALL
    const response = await fetch(
      `${process.env.SERVER_URL}/api/v1/bookings/getBookings?email=${user.email}`,
      {
        cache: "no-store",
        headers,
      }
    );
    // Response
    const res = await response.json();

    return res.bookings  as BookingProps[];
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchUserBookings;
