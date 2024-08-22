import { SortedShowtimeByDateProps } from "@/props/ShowtimeProps";
import React from "react";
import NoItemsFound from "../shared/NoItemsFound";
import ShowtimesListItem from "./ShowtimesSectionItem";

// Props
interface ShowtimesSectionProps {
  sortedShowtimesByDate: SortedShowtimeByDateProps[];
}

const ShowtimesSection: React.FC<ShowtimesSectionProps> = ({ sortedShowtimesByDate }) => {
  return (
    <section className="flex justify-center gap-2 flex-wrap">
      {sortedShowtimesByDate.length > 0 ? (
        sortedShowtimesByDate.map((item) => (
          <ShowtimesListItem
            key={item.date}
            date={item.date}
            showtimes={item.showtimes}
          />
        ))
      ) : (
        <NoItemsFound label="No showtimes found" />
      )}
    </section>
  );
};

export default ShowtimesSection;
