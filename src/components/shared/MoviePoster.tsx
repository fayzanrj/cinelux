import Image from "next/image";
import React from "react";

// Props
interface MoviePosterProps {
  url: string;
  className: string;
}

const MoviePoster: React.FC<MoviePosterProps> = ({ url, className }) => (
  <Image
    src={`https://image.tmdb.org/t/p/original${url}`}
    width={999}
    height={999}
    alt="poster"
    className={className}
  />
);

export default MoviePoster;
