import MovieProps from "@/props/MovieProps";
import getHeaders from "../GetHeaders";

const fetchMovies = async () => {
  const headers = getHeaders();

  try {
    // API CALL
    const response = await fetch(
      `${process.env.SERVER_URL}/api/v1/movies/allMovies`,
      {
        cache: "no-store",
        headers,
      }
    );
    // Response
    const res = await response.json();

    return res.movies as MovieProps[];
  } catch (error) {
    console.error(error)
    return null;
  }
};

export default fetchMovies;
