import calculateTime from "@/libs/CalculateTime";
import formatReleaseDate from "@/libs/FormatReleaseDate";
import MovieProps from "@/props/MovieProps";
import React from "react";
import Trailer from "./Trailer";

const MovieDetails: React.FC<MovieProps> = ({
  trailer_link,
  release_date,
  overview,
  runtime,
}) => {
  return (
    <section className="flex justify-center gap-4 flex-wrap-reverse my-4">
      {/* TRAILER OF THE MOVIE */}
      <Trailer link={trailer_link} />

      {/* RELEASE DATE, RUNTIME AND OVERVIEW OF THE MOVIE */}
      <div className="max-w-96 w-full text-sm">
        <p className="font-bold">
          Release Date :{" "}
          <span className="font-normal">{formatReleaseDate(release_date)}</span>
        </p>
        <p className="font-bold">
          Runtime :{" "}
          <span className="font-normal">{calculateTime(runtime)}</span>
        </p>
        <p className="my-2">{overview}</p>
      </div>
    </section>
  );
};

export default MovieDetails;
