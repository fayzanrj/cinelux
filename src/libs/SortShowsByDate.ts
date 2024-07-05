import ShowtimeProps from "@/props/ShowtimeProps";
import sortShowsByTime from "./SortShowsByTime";

// Function to parse date in "DD-MM-YYYY" format
const parseDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
};

// Function to collect and sort showtimes by date
const sortShowsByDate = (arr: ShowtimeProps[]) => {
  // Initilising a map
  const dateMap = new Map<string, ShowtimeProps[]>();

  // Looping through each showtime from arr
  arr.forEach((show) => {
    if (!dateMap.has(show.date)) {
      dateMap.set(show.date, []);
    }
    dateMap.get(show.date)!.push(show);
  });

  // Setting each date's showtimes according to their time
  dateMap.forEach((showtimes, date) => {
    dateMap.set(date, sortShowsByTime(showtimes));
  });

  // Sorting each date
  const sortedDateMap = new Map(
    Array.from(dateMap.entries()).sort((a, b) => {
      return parseDate(a[0]).getTime() - parseDate(b[0]).getTime();
    })
  );

  return sortedDateMap;
};


export default sortShowsByDate;