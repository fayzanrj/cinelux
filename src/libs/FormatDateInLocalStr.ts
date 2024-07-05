import { Days, Months } from "@/constants/Period";

const formatDateInLocalStr = (date: string) => {
  const [day, month, year] = date.split("-").map(Number);
  const newDate = new Date(year, month - 1, day); // Create date directly

  return `${Days[newDate.getDay()]}, ${newDate.getDate()} ${
    Months[newDate.getMonth()]
  } ${newDate.getFullYear()}`;
};

export default formatDateInLocalStr;
