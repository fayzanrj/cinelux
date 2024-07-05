const getUtc5 = () => {
  const date = new Date();
  const millisecondsToAdd = 5 * 3600 * 1000;
  const newDate = new Date(date.getTime() + millisecondsToAdd);

  return newDate;
};

export default getUtc5;
