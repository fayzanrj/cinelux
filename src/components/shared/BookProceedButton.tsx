"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import VerificationModal from "../verification/VerificationModal";
import { useSession } from "next-auth/react";

// Props
interface BookProceedButtonProps {
  showtimeId: string;
}

const BookProceedButton: React.FC<BookProceedButtonProps> = ({
  showtimeId,
}) => {
  // State to keep track of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Router for navigation
  const router = useRouter();
  // User info
  const session = useSession();

  // Function to open and close modal
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  // Function to decide what to do
  const handleOnClick = () => {
    if (session.data?.user && session.status === "authenticated") {
      router.push(`/showtimes/${showtimeId}/tickets`)
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      {isModalOpen && (
        <VerificationModal showtimeId={showtimeId} closeModal={toggleModal} />
      )}

      <button
        className="text-sm p-1 bg-blue-700 rounded-md"
        onClick={handleOnClick}
      >
        Book Tickets
      </button>
    </>
  );
};

export default BookProceedButton;
