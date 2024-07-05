import MovieProps from "@/props/MovieProps";
import getHeaders from "../GetHeaders";
import { handleApiError } from "../HandleApiError";

// Status type
type paramsStatus = "booking_now" | "now_showing" | "coming_soon";

const fetchMoviesByStatus = async (status: paramsStatus) => {
  const headers = getHeaders();

  try {
    // API CALL
    const response = await fetch(
      `${process.env.SERVER_URL}/api/v1/movies/getMoviesByStatus/${status}`,
      {
        cache: "no-store",
        headers,
      }
    );
    // Response
    const res = await response.json();

    return res.movies as MovieProps[];
  } catch (error) {
    // Handling error
    console.error(error)
    return null;
  }
};

export default fetchMoviesByStatus;
