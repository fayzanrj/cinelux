const formatReleaseDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-");

  return `${day}-${parseInt(month)}-${year}`;
};

export default formatReleaseDate;
