import React from "react";
import { Days, Months } from "../../constants/Period";

// Function to format date to show in datepicker i.e. Friday, June 20
const formatDate = (date: Date) => {
  const day = Days[date.getDay()];
  const month = Months[date.getMonth()];
  const currentDate = date.getDate();

  return `${day}, ${month} ${currentDate}`;
};

// Function to check if dates are same
const isSameDate = (date1: Date, date2: Date) =>
  date1.toDateString() === date2.toDateString();

// Function to render date
const renderDate = (date: Date) => {
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

  if (isSameDate(date, today)) return "Today";
  if (isSameDate(date, tomorrow)) return "Tomorrow";

  return formatDate(date);
};

// Props
interface DatePickerProps {
  initialDate: Date;
  numDatesToShow: number;
  selectedDate: Date;
  handleOnClick: (date : Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  initialDate,
  numDatesToShow,
  selectedDate,
  handleOnClick,
}) => {
  // Function to generate array of dates from intial days tto numDatesToShow
  const datesArray = Array.from(
    { length: numDatesToShow },
    (_, index) => new Date(initialDate.getTime() + index * 24 * 60 * 60 * 1000)
  );

  return (
    <section className="max-w-full overflow-x-auto flex gap-4 my-6 border-b-2 border-gray-700">
      {datesArray.map((date) => (
        <button
          key={date.toDateString()}
          onClick={() => handleOnClick(date)}
          className={`h-16 border-b-2 flex-shrink-0 rounded-none text-gray-500 ${
            isSameDate(selectedDate, date)
              ? "border-white text-white"
              : "border-transparent"
          }`}
        >
          {renderDate(date)}
        </button>
      ))}
    </section>
  );
};

export default DatePicker;
