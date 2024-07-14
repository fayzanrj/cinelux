import sortShowsByDate from "@/libs/SortShowsByDate";
import ShowtimeProps from "@/props/ShowtimeProps";
import React from "react";
import ShowtimesListItem from "./ShowtimesSectionItem";
import NoItemsFound from "../shared/NoItemsFound";

// Props
interface ShowtimesSectionProps {
  showtimes: ShowtimeProps[];
}

const ShowtimesSection: React.FC<ShowtimesSectionProps> = ({ showtimes }) => {
  // Sorting showtimes, first by their dates and then their time in ascending order
  const allShowtimes = sortShowsByDate(showtimes);

  const showtimesDate = [...allShowtimes.entries()];
  return (
    <section className="flex justify-center gap-2 flex-wrap">
      {showtimesDate.length > 0 ? (
        showtimesDate.map(([date, showtimes]) => (
          <ShowtimesListItem key={date} date={date} showtimes={showtimes} />
        ))
      ) : (
        <NoItemsFound label="No showtimes found" />
      )}
    </section>
  );
};

export default ShowtimesSection;
