import MovieProps from "@/props/MovieProps";
import Link from "next/link";
import React from "react";
import MoviePoster from "../shared/MoviePoster";

// Props
interface NowShowingListItemProps {
  isActive: boolean;
  movie: MovieProps;
}

const NowShowingListItem: React.FC<NowShowingListItemProps> = ({
  isActive,
  movie,
}) => {
  return (
    <div
      className={`w-48 md:w-72 absolute duration-500 item ${
        isActive ? "active" : ""
      }`}
    >
      
      {/* MOVIE IMAGE */}
      <MoviePoster
        url={movie.poster_path}
        className="w-48 md:w-72"
      />

      {/* MOVIE TITLE AND ACTIVE BUTTONS */}
      <div
        className={`${isActive ? "opacity-1" : "opacity-20"} duration-500 my-1`}
      >
        <p className="my-2 text-xl md:text-2xl font-bold">{movie.title}</p>
        <div>
          {/* RENDERING ACTION BUTTONS */}
          <ButtonLayout href="/" label="Book now" />
          <ButtonLayout href="/" label="Movie Details" />
        </div>
      </div>
    </div>
  );
};

export default NowShowingListItem;

// Props for action button component
interface ButtonLayoutProps {
  href: string;
  label: string;
}

// Component for rendering action buttons
const ButtonLayout: React.FC<ButtonLayoutProps> = ({ href, label }) => (
  <Link href={href}>
    <button className="px-2 py-1 rounded-md bg-blue-600 mr-1 mt-1">{label}</button>
  </Link>
);