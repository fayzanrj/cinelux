'use client'
import { MdEventSeat } from "react-icons/md";
import COLORS from "../../constants/Colors";

// Props
interface SeatProps {
  seat: string;
  isBooked: boolean;
  isSelected: boolean;
  onClick?: (seat: string) => void;
  disabled?: boolean;
}

const Seat: React.FC<SeatProps> = ({
  seat,
  isBooked,
  isSelected,
  onClick = () => {},
  disabled = false,
}) => {
  // Getting color for seat
  const color = isBooked
    ? "gray"
    : isSelected
    ? COLORS.primaryButton
    : "#ffffff";

  // Function to handle click
  const handleClick = () => {
    onClick(seat);
  };

  return (
    <button
      onClick={handleClick}
      className="px-1 mx-0 w-fit"
      disabled={disabled || isBooked}
    >
      <MdEventSeat color={color} className="inline-block" />
    </button>
  );
};

export default Seat;