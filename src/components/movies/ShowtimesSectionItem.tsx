import formatDateInLocalStr from "@/libs/FormatDateInLocalStr";
import ShowtimeProps from "@/props/ShowtimeProps";
import React from "react";
import ShowtimeItem from "../shared/ShowtimeItem";

// Props
interface ShowtimesSectionItemProps {
  date: string;
  showtimes: ShowtimeProps[];
}

const ShowtimesSectionItem: React.FC<ShowtimesSectionItemProps> = ({
  date,
  showtimes,
}) => {
  return (
    <div className="w-[98%] max-w-96 flex-shrink-0 p-2 rounded-md">
      {/* DATE */}
      <h3 className="font-semibold text-lg my-2">
        {formatDateInLocalStr(date)}
      </h3>

      {/* SHOWTIMES */}
      <ul>
        {showtimes.map((showtime: ShowtimeProps) => (
          <ShowtimeItem key={showtime._id} showtime={showtime} />
        ))}
      </ul>
    </div>
  );
};

export default ShowtimesSectionItem;
