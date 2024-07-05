import ShowtimeProps from "@/props/ShowtimeProps";
import getHeaders from "../GetHeaders";
import { handleApiError } from "../HandleApiError";
import formatDateInDMY from "../FormatDateInDMY";

const fetchShowtimesByDate = async (date: Date) => {
  const newDate = formatDateInDMY(date);
  try {
    // API CALL
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/showtimes/getShowtimesByDate/${newDate}`,
      {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          accessToken: process.env.NEXT_PUBLIC_USER_API_ACCESS_TOKEN!,
        },
      }
    );
    // Response
    const res = await response.json();

    return res.showtimes as ShowtimeProps[];
  } catch (error) {
    // Handling error
    console.error(error)
    return null;
  }
};

export default fetchShowtimesByDate;
