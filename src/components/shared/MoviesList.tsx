"use client";
import React, { useRef } from "react";
import MoviePoster from "./MoviePoster";
import MovieProps from "@/props/MovieProps";
import Link from "next/link";
import ScrollButton from "./ScrollButton";
import AnimationLink from "./AnimationLink";

// Props
interface MoviesListProps {
  id: "NOW_SHOWING" | "COMING_SOON" | "BOOKING_NOW";
  movies: MovieProps[];
  variant: "SECTION" | "PAGE";
}

const MoviesList: React.FC<MoviesListProps> = ({ id, movies, variant }) => {
  // Ref to keep track of the container scroll
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Function to handle scroll by buttons
  const handleScroll = (direction: "LEFT" | "RIGHT") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth / 2;
      const newScrollPosition =
        direction === "LEFT"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  // Function to determine heading
  const renderHeading = () => {
    switch (id) {
      case "BOOKING_NOW":
        return "Booking Now";
      case "COMING_SOON":
        return "Coming Soon";
      case "NOW_SHOWING":
        return "Now Showing";
    }
  };

  return (
    <section id={id} className="my-8 relative">
      {/* HEADER BASED ON IF COMPONENT IS BEING USED ON PAGE OR SECTION */}
      {variant === "SECTION" ? (
        <h3 className="my-1 text-3xl font-semibold">{renderHeading()}</h3>
      ) : (
        <h1 className="mt-2 mb-6 text-3xl font-semibold">{renderHeading()}</h1>
      )}

      {/* MOVIES LIST */}
      <div
        className={`max-w-[100vw] overflow-x-scroll flex gap-4 p-2 ${
          variant === "PAGE" ? "flex-wrap" : ""
        }`}
        ref={scrollContainerRef}
      >
        {movies.map((movie) => (
          <AnimationLink
            key={movie._id}
            href={`/movies/${movie._id}`}
            className="flex-shrink-0"
          >
            <MoviePoster url={movie.poster_path} className="w-36 md:w-48" />
          </AnimationLink>
        ))}
      </div>

      {/* SCROLL BUTTONS */}
      {variant === "SECTION" && (
        <>
          <ScrollButton
            variant="LEFT"
            handleClick={() => handleScroll("LEFT")}
          />
          <ScrollButton
            variant="RIGHT"
            handleClick={() => handleScroll("RIGHT")}
          />
        </>
      )}
    </section>
  );
};

export default MoviesList;
