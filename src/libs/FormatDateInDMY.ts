const formatDateInDMY = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  let dateString = `${day}-${month + 1}-${year}`;

  if (dateString === "NaN-NaN-NaN") {
    dateString = formatDateInDMY(new Date());
  }

  return dateString;
};

export default formatDateInDMY;
