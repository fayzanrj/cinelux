import getBgColor from "@/libs/GetBgColor";
import ShowtimeProps from "@/props/ShowtimeProps";
import React from "react";
import ProceedButton from "./ProceedButton";

// Props
interface ShowtimeItemProps {
  showTitle?: boolean;
  showtime: ShowtimeProps;
}

const ShowtimeItem: React.FC<ShowtimeItemProps> = ({
  showtime,
  showTitle = false,
}) => (
  <li
    className="my-1 p-1.5 rounded-md flex justify-between items-center"
    style={getBgColor("secondary")}
  >
    {/* SHOWTIME INFO */}
    <div className="">
      <p className="font-semibold my-1.5">{showtime.time}</p>
      {showTitle && (
        <p className="text-lg break-words max-w-full my-1.5">{showtime.movie.title}</p>
      )}

      <p className="text-sm">
        {showtime.language} - {showtime.screen}
      </p>
    </div>

    {/* BOOK BUTTON */}
    <ProceedButton variant="BOOKING" showtimeId={showtime._id} />
  </li>
);

export default ShowtimeItem;
