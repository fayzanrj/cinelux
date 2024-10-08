"use client";
import fetchShowtimesByDate from "@/libs/fetch/FetchShowtimesByDate";
import { handleApiError } from "@/libs/HandleApiError";
import ShowtimeProps from "@/props/ShowtimeProps";
import React, { useState } from "react";
import NoItemsFound from "../shared/NoItemsFound";
import ScreenLoader from "../shared/ScreenLoader";
import ShowtimeItem from "../shared/ShowtimeItem";
import DatePicker from "./DatePicker";

// Props
interface ShowtimesListProps {
  date: Date;
  showtimes: ShowtimeProps[] | null;
}

const ShowtimesList: React.FC<ShowtimesListProps> = ({ date, showtimes }) => {
  // States to keep track of selected date by user
  const [selectedDate, setSelectedDate] = useState(date);
  // State to store showstimes
  const [allShowtimes, setAllShowtimes] = useState<ShowtimeProps[] | null>(
    showtimes || null
  );
  // State for loading
  const [isLoading, setIsLoading] = useState(false);

  // Function to run when user selects a date
  const handleOnClick = async (date: Date) => {
    try {
      setIsLoading(true);
      setSelectedDate(date);
      const showtimes = await fetchShowtimesByDate(date);

      setAllShowtimes(showtimes || null);
    } catch (error) {
      handleApiError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <DatePicker
        initialDate={date}
        numDatesToShow={7}
        selectedDate={selectedDate}
        handleOnClick={handleOnClick}
      />
      {allShowtimes ? (
        <section>
          <h1 className="text-xl my-8">
            Showtimes for{" "}
            <span className="font-semibold">{selectedDate.toDateString()}</span>
          </h1>
          {allShowtimes.length > 0 ? (
            <ul>
              {allShowtimes.map((showtime) => (
                <ShowtimeItem
                  key={showtime._id}
                  showtime={showtime}
                  showTitle
                />
              ))}
            </ul>
          ) : (
            <NoItemsFound label="No showtimes found" />
          )}
        </section>
      ) : (
        <p className="text-xl font-semibold text-center">
          Error fetching showtimes
        </p>
      )}

      {isLoading && <ScreenLoader />}
    </>
  );
};

export default ShowtimesList;
