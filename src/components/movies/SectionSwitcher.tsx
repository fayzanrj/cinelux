"use client";
import MovieProps from "@/props/MovieProps";
import ShowtimeProps from "@/props/ShowtimeProps";
import React, { useState } from "react";
import MovieDetails from "./MovieDetails";
import ShowtimesSection from "./ShowtimesSection";

// Sections type
type section = "DETAILS" | "SHOWTIMES";

// Props
interface SectionSwitcherProps {
  movie: MovieProps;
  showtimes: ShowtimeProps[];
}

const SectionSwitcher: React.FC<SectionSwitcherProps> = ({
  movie,
  showtimes,
}) => {
  // State to keep track of the section selected
  const [selectedSection, setSelectedSection] = useState<section>("DETAILS");

  return (
    <div>
      {/* SWITCH BUTTONS */}
      <div className="text-center my-6 font-semibold">
        {/* DETAILS BUTTON */}
        <button
          onClick={() => setSelectedSection("DETAILS")}
          className={`mx-1.5 ${
            selectedSection === "DETAILS" ? "border-b border-white" : ""
          }`}
        >
          Details
        </button>

        {/* SHOWTIMES BUTTON */}
        <button
          onClick={() => setSelectedSection("SHOWTIMES")}
          className={`mx-1.5 ${
            selectedSection === "SHOWTIMES" ? "border-b border-white" : ""
          }`}
        >
          Showtimes
        </button>
      </div>

      {/* OPENED SECTION */}
      {selectedSection === "DETAILS" ? (
        <MovieDetails {...movie} />
      ) : (
        <ShowtimesSection showtimes={showtimes} />
      )}
    </div>
  );
};

export default SectionSwitcher;
