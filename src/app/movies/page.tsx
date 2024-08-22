import BreadCrumbs from "@/components/shared/BreadCrumbs";
import MoviesList from "@/components/shared/MoviesList";
import NoItemsFound from "@/components/shared/NoItemsFound";
import RemoveAnimationClass from "@/components/shared/RemoveAnimationClass";
import ServerError from "@/components/shared/ServerError";
import fetchMoviesByStatus from "@/libs/fetch/FetchMoviesByStatus";

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
    return <ServerError />;

  // Fetching movies
  const movies = await fetchMoviesByStatus(q);

  // If some errors occurs during fetching
  if (!movies) return <ServerError />;

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

  // Function to determine heading
  const renderHeading = () => {
    switch (q) {
      case "booking_now":
        return "Booking Now";
      case "coming_soon":
        return "Coming Soon";
      case "now_showing":
        return "Now Showing";
    }
  };

  // Movies list
  return (
    <>
      <RemoveAnimationClass q={q} />
      <main className="p-3">
        {/* NAVIGATION */}
        <BreadCrumbs currentPage={getId()} />

        <h1 className="mt-2 mb-6 text-3xl font-semibold">{renderHeading()}</h1>
        {movies.length > 0 ? (
          <MoviesList movies={movies} id={getId()} variant="PAGE" />
        ) : (
          <NoItemsFound label="No movies found" />
        )}
      </main>
    </>
  );
};

export default Movies;
