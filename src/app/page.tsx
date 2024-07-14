import MoviesList from "@/components/shared/MoviesList";
import NowShowingMoviesList from "@/components/home/NowShowingList";
import fetchMovies from "@/libs/fetch/FetchMovies";
import React from "react";
import MovieProps from "@/props/MovieProps";
import RemoveAnimationClass from "@/components/shared/RemoveAnimationClass";

// Status
type STATUS = "NOW_SHOWING" | "COMING_SOON";

const Home = async () => {
  // Fetching movies from backend
  const movies = await fetchMovies();

  // If some error occurs while fetching movies
  if (!movies) return null;

  // Getting movies according to status and booking status
  const getMovies = (status: STATUS, isBooking: boolean) => {
    return movies.filter(
      (movie) => movie.status === status && movie.isBooking === isBooking
    );
  };

  return (
    <>
      <RemoveAnimationClass />
      <main className="p-3 text-white">
        {/* NOW SHOWING MOVIES */}
        <NowShowingMoviesList movies={getMovies("NOW_SHOWING", true)} />

        {/* NOW BOOKING MOVIES */}
        <MoviesList
          id="BOOKING_NOW"
          movies={getMovies("COMING_SOON", true)}
          variant="SECTION"
        />

        {/* COMING SOON MOVIES */}
        <MoviesList
          id="COMING_SOON"
          movies={getMovies("COMING_SOON", false)}
          variant="SECTION"
        />
      </main>
    </>
  );
};

export default Home;
