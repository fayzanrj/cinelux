import BookingProps from "@/props/BookingProps";
import React from "react";

const BookingsListItem: React.FC<BookingProps> = ({
  movie,
  language,
  date,
  time,
  screen,
  seats,
  bookingNumber,
}) => {
  return (
    <div className="p-2 border border-gray-600 rounded-md w-full">
      {/* BOOKING ID */}
      <p className="font-semibold">Booking#{bookingNumber}</p>

      <div className="my-3">
        {/* Movit title */}
        <h3 className="font-bold break-words text-lg">
          {movie.title} <span className="font-normal text-sm">({language})</span>
        </h3>

        {/* Show details */}
        <p className="text-sm mt-1">
          {date} - {time}
        </p>
        <p className="text-sm">{screen}</p>
      </div>

      <div className="my-4">
        {/* Bookings details */}
        <p className="break-words">Seat No. : </p>
        <p className="text-sm break-words">{seats.join(", ")}</p>
      </div>
    </div>
  );
};

export default BookingsListItem;
