import BREAD_CRUMB_LINKS from "@/constants/BreadCrumbsLinks";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

// Base rops
interface BreadCrumbsBaseProps {
  currentPage:
    | "BOOKING_NOW"
    | "COMING_SOON"
    | "NOW_SHOWING"
    | "SHOWTIMES"
    | "TICKETS"
    | "MY_TICKETS";
}

// Movie Details Bread Crumbs Props
interface BreadCrumbsMovieDetailsProps {
  currentPage: "MOVIE_DETAILS";
  movieTitle: string;
}

// Props
type BreadCrumbsProps = BreadCrumbsBaseProps | BreadCrumbsMovieDetailsProps;

// Bread Crump Item
const BreadCrumpItem: React.FC<{ href: string; label: string }> = ({
  href,
  label,
}) =>
  href ? (
    <Link href={href} className="text-blue-600 hover:underline">
      {label}
    </Link>
  ) : (
    <p className="text-white">{label}</p>
  );

// Bread crump component
const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ currentPage, ...props }) => {
  const items = BREAD_CRUMB_LINKS[currentPage];

  // Getting movie title
  const movieTitle = (props as BreadCrumbsMovieDetailsProps).movieTitle;

  return (
    <nav className="mb-6">
      <ol className="flex  text-gray-600 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            
            {currentPage === "MOVIE_DETAILS" &&
            index === items.length - 1 ? (
              <BreadCrumpItem label={movieTitle} href="" />
            ) : (
              <BreadCrumpItem {...item} />
            )}

            {/* ARROW */}
            {index < items.length - 1 && (
              <IoIosArrowForward className="mx-2 text-white" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
