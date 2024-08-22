import MovieProps from "@/props/MovieProps";
import { SortedShowtimeByDateProps } from "@/props/ShowtimeProps";
import formatDateInDMY from "../FormatDateInDMY";
import getHeaders from "../GetHeaders";
import getUtc5 from "../GetUtc5";


const fetchMovieInfo = async (movieId: string) => {
  const headers = getHeaders();
  const date = getUtc5();

  try {
    // API CALL
    const response = await fetch(
      `${
        process.env.SERVER_URL
      }/api/v1/showtimes/getShowtimesAndMovieInfoById/${movieId}?startingDate=${formatDateInDMY(
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
      sortedShowtimesByDate: res.showtimes as SortedShowtimeByDateProps[],
      movie: res.movie as MovieProps,
    };
  } catch (error) {
    console.error(error)
    return null;
  }
};

export default fetchMovieInfo;
