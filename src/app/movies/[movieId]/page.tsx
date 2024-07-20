import MovieDetails from "@/components/movies/MovieDetails";
import SectionSwitcher from "@/components/movies/SectionSwitcher";
import BreadCrumb from "@/components/shared/BreadCrumbs";
import MoviePoster from "@/components/shared/MoviePoster";
import RemoveAnimationClass from "@/components/shared/RemoveAnimationClass";
import fetchMovieInfo from "@/libs/fetch/FetchMovieInfo";
import getBgColor from "@/libs/GetBgColor";
import MovieProps from "@/props/MovieProps";
import React from "react";

// Props
interface MoviePageProps {
  params: {
    movieId: string;
  };
}

const Movie = async ({ params }: MoviePageProps) => {
  // Destructuring
  const { movieId } = params;

  // Validating id
  if (movieId.length !== 24) return null;

  // Fetching movies
  const res = await fetchMovieInfo(movieId);

  // If some errors occurs during fetching
  if (!res) return null;

  // Destructuring response
  const { movie, showtimes } = res;

  return (
    <>
      <RemoveAnimationClass q={movie._id} />

      <main className="p-3">
        {/* NAVIGATION */}
        <BreadCrumb currentPage={"MOVIE_DETAILS"} movieTitle={movie.title} />

        {/* MOVIE TOP SECTION DETAILS */}
        <MovieDetailsTopSection {...movie} />

        {movie.isBooking ? (
          <SectionSwitcher movie={movie} showtimes={showtimes} />
        ) : (
          <MovieDetails {...movie} />
        )}
      </main>
    </>
  );
};

export default Movie;

// Top Section
const MovieDetailsTopSection: React.FC<MovieProps> = ({
  poster_path,
  tagline,
  title,
  genres,
}) => (
  <section className="flex justify-center gap-2">
    <MoviePoster url={poster_path} className="w-36 md:w-48 flex-shrink-0" />
    <div>
      <p className="text-sm md:text-base break-words">{tagline}</p>
      <h1 className="text-xl md:text-3xl font-semibold my-2 break-words">
        {title}
      </h1>
      <ul>
        {genres.map((genre) => (
          <li
            key={genre.id}
            className="inline-block mx-1 text-sm p-1 my-0.5"
            style={getBgColor("secondary")}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  </section>
);
