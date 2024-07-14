import React from "react";

interface BookingProps {
  _id: string;
  movie: {
    title: string;
  };
  bookingNumber: number;
  status: "paymentFailed" | "verified" | "paymentRequired";
  customerName: string;
  customerEmail: string;
  showtimeId: string;
  date: string;
  time: string;
  language: string;
  screen: string;
  seats: string[];
  isPaid: boolean;
  createdAt: Date;
  updatedAt: Date;
  paymentSessionId: string;
}

export default BookingProps;
