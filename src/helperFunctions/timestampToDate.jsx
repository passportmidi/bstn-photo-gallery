export default function timestampToDate(timestamp) {
  const date = new Date(timestamp);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  }).format(date);
  return formattedDate;
}
