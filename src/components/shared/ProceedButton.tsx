"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import VerificationModal from "../verification/VerificationModal";
import { useSession } from "next-auth/react";
import addAnimationClass from "@/libs/AddAnimationClass";

// Booking Props
interface ProceedButtonBookingProps {
  showtimeId: string;
  variant: "BOOKING";
}

// My tickets props
interface ProceedButtonMyTicketsProps {
  variant: "MY_TICKETS";
}

// Props
type ProceedButtonProps =
  | ProceedButtonBookingProps
  | ProceedButtonMyTicketsProps;

const ProceedButton: React.FC<ProceedButtonProps> = ({ variant, ...props }) => {
  // State to keep track of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extracting showtimeId from props
  const showtimeId = (props as ProceedButtonBookingProps).showtimeId || "";

  // Router for navigation
  const router = useRouter();

  // User info
  const session = useSession();

  // Function to open and close modal
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  // Function to decide what to do
  const handleOnClick = async () => {
    const currentPath = window.location.pathname;

    if (session.data?.user && session.status === "authenticated") {
      // Early exit if user is already at href
      if (
        currentPath === "/myTickets" ||
        currentPath === `/showtimes/${showtimeId}/tickets`
      )
        return;

      // Adding animation and waiting
      await addAnimationClass(400);
      // Determining where to push the user
      router.push(
        variant === "MY_TICKETS"
          ? "/myTickets"
          : `/showtimes/${showtimeId}/tickets`
      );
    } else {
      setIsModalOpen(true);
    }
  };

  // Function to get label for button
  const getLabel = () => {
    switch (variant) {
      case "BOOKING":
        return "Book Tickets";
      case "MY_TICKETS":
        return "My Tickets";
    }
  };

  return (
    <>
      {isModalOpen && (
        <VerificationModal
          href={
            variant === "BOOKING"
              ? `/showtimes/${showtimeId}/tickets`
              : "/myTickets"
          }
          closeModal={toggleModal}
        />
      )}

      <button
        className="text-sm p-1 bg-blue-700 rounded-md align-middle mx-1"
        onClick={handleOnClick}
      >
        {getLabel()}
      </button>
    </>
  );
};

export default ProceedButton;
