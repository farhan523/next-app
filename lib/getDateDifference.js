import moment from "moment";

const getDateDifference = (publishedAt) => {
  const currentDate = moment();
  const difference = currentDate.diff(publishedAt, "days");
  if (difference === 0) return "Today";
  if (difference === 1) return "1 day ago";
  return `${difference} days ago`;
};

export default getDateDifference;
