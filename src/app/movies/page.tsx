import MoviesList from "@/components/shared/MoviesList";
import RemoveAnimationClass from "@/components/shared/RemoveAnimationClass";
import fetchMoviesByStatus from "@/libs/fetch/FetchMoviesByStatus";
import React from "react";

//  Params query type
type paramsStatus = "booking_now" | "now_showing" | "coming_soon";

// Props
interface MoviesProps {
  searchParams: {
    q: paramsStatus;
  };
}

const Movies = async ({ searchParams }: MoviesProps) => {
  // Destructuring
  const { q } = searchParams;

  // Validating query
  if (!q || (q !== "booking_now" && q !== "now_showing" && q !== "coming_soon"))
    return null;

  // Fetching movies
  const movies = await fetchMoviesByStatus(q);

  // If some errors occurs during fetching
  if (!movies) return null;

  // Determing id based on query (q)
  const getId = () => {
    switch (q) {
      case "booking_now":
        return "BOOKING_NOW";
      case "coming_soon":
        return "COMING_SOON";
      case "now_showing":
        return "NOW_SHOWING";
    }
  };

  // Movies list
  return (
    <>
      <RemoveAnimationClass q={q} />
      <MoviesList movies={movies} id={getId()} variant="PAGE" />
    </>
  );
};

export default Movies;
