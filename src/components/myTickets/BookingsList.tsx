import BookingProps from "@/props/BookingProps";
import React from "react";
import BookingsListItem from "./BookingsListItem";

// Props
interface BookingsListProps {
  bookings: BookingProps[];
}

const BookingsList: React.FC<BookingsListProps> = ({ bookings }) => {
  return (
    <section className="grid gap-2 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7">
      {bookings?.map((booking) => (
        <BookingsListItem key={booking.bookingNumber} {...booking} />
      ))}
    </section>
  );
};

export default BookingsList;
