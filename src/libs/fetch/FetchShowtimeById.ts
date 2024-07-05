import ShowtimeProps from "@/props/ShowtimeProps";
import { handleApiError } from "../HandleApiError";

const fetchShowtimeById = async (id: string) => {
  try {
    // API CALL
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/showtimes/getShowtime/${id}`,
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

    return res.showtime as ShowtimeProps;
  } catch (error) {
    // Handling error
    console.error(error)
    return null;
  }
};

export default fetchShowtimeById;
