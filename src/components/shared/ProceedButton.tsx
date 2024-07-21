"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import LoggedInUser from "../verification/LoggedInUserModal";
import VerificationModal from "../verification/VerificationModal";
import ScreenLoader from "./ScreenLoader";

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

  // User info
  const session = useSession();

  // Function to open and close modal
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  // Function to open modal
  const handleOnClick = async () => setIsModalOpen(true);

  // Href for redirect
  const href =
    variant === "BOOKING" ? `/showtimes/${showtimeId}/tickets` : "/myTickets";

  // Function to get label for button
  const getLabel = () => {
    switch (variant) {
      case "BOOKING":
        return "Book Tickets";
      case "MY_TICKETS":
        return "My Tickets";
    }
  };

  // Function to determine which modal to open
  const renderModal = () => {
    switch (session.status) {
      case "authenticated":
        return (
          <LoggedInUser
            href={href}
            email={session.data.user?.email || ""}
            name={session.data.user?.name || ""}
            closeModal={toggleModal}
          />
        );
      case "unauthenticated":
        return <VerificationModal href={href} closeModal={toggleModal} />;
      case "loading":
        return <ScreenLoader />;
    }
  };

  return (
    <>
      {/*   Rendering user modals */}
      {isModalOpen && renderModal()}

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
