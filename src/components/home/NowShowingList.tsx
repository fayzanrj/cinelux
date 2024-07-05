"use client";
import MovieProps from "@/props/MovieProps";
import React, { useEffect, useState } from "react";
import NowShowingListItem from "./NowShowingListItem";
import ScrollButton from "../shared/ScrollButton";

// Props
interface NowShowingMoviesListProps {
  movies: MovieProps[];
}

const NowShowingMoviesList: React.FC<NowShowingMoviesListProps> = ({
  movies,
}) => {
  // State to track active movie index
  const [active, setActive] = useState<number>(3);

  // Effect to auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  // Use effect to load show on active change
  useEffect(() => {
    loadShow();
  }, [active]);

  // Function to manage visual presentation of movies
  const loadShow = () => {
    const items = document.querySelectorAll<HTMLDivElement>(".slider .item");
    let stt = 0;

    // Active item styles
    items[active].style.left = `50%`;
    items[active].style.transform = `translateX(-50%)`;
    items[active].style.zIndex = "1";
    items[active].style.filter = "none";
    items[active].style.opacity = "1";

    // Styles for items after active (left)
    for (let i = active + 1; i < items.length; i++) {
      stt++;
      items[i].style.transform = `translateX(${60 * stt}px) scale(${
        1 - 0.2 * stt
      }) perspective(16px) rotateY(-1deg)`;
      items[i].style.zIndex = `-${stt}`;
      items[i].style.filter = "blur(10px)";
      items[i].style.opacity = stt > 2 ? "0" : "0.6";
    }

    // Styles for items before active (right)
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      stt++;
      items[i].style.transform = `translateX(${-180 * stt}px) scale(${
        1 - 0.2 * stt
      }) perspective(16px) rotateY(1deg)`;
      items[i].style.zIndex = `-${stt}`;
      items[i].style.filter = "blur(10px)";
      items[i].style.opacity = stt > 2 ? "0" : "0.6";
    }
  };

  // Function to scroll left
  const scrollLeft = () => {
    setActive((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  // Function to scroll right
  const scrollRight = () => {
    setActive((prev) => (prev + 1 < movies.length ? prev + 1 : 0));
  };

  return (
    <section className="max-w-[100vw] overflow-hidden h-[calc(100svh_-_5rem)] relative">
      {/* HEADING */}
      <h3 className="my-2 text-3xl font-bold">Now Showing</h3>

      {/* MOVIES LIST CONTAINER */}
      <div className="max-w-full relative slider w-fit mx-auto top-10 ">
        {/* RENDERING EACH MOVIE*/}
        {movies.map((movie, index) => {
          const isActive = index === active;
          return (
            <NowShowingListItem
              key={movie._id}
              isActive={isActive}
              movie={movie}
            />
          );
        })}
      </div>

      {/* SCROLL BUTTONS*/}
      <ScrollButton variant="LEFT" handleClick={scrollLeft} />
      <ScrollButton variant="RIGHT" handleClick={scrollRight} />

    </section>
  );
};

export default NowShowingMoviesList;
