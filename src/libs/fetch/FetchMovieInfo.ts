import MovieProps from "@/props/MovieProps";
import ShowtimeProps from "@/props/ShowtimeProps";
import formatDateInDMY from "../FormatDateInDMY";
import getHeaders from "../GetHeaders";
import getUtc5 from "../GetUtc5";
import { handleApiError } from "../HandleApiError";


const fetchMovieInfo = async (movieId: string) => {
  const headers = getHeaders();
  const date = getUtc5();

  try {
    // API CALL
    const response = await fetch(
      `${
        process.env.SERVER_URL
      }/api/v1/showtimes/getShowtimesByMovieId/${movieId}?date=${formatDateInDMY(
        date
      )}`,
      {
        cache: "no-store",
        headers,
      }
    );
    // Response
    const res = await response.json();

    return {
      showtimes: res.showtimes as ShowtimeProps[],
      movie: res.movie as MovieProps,
    };
  } catch (error) {
    console.error(error)
    return null;
  }
};

export default fetchMovieInfo;
