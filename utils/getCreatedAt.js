const getCreatedAt = (date) => {
  let formattedDate = new Date(date);
  let day = formattedDate.toLocaleDateString("id-ID", {
    day: "numeric",
  });
  let month = formattedDate.toLocaleDateString("id-ID", {
    month: "short",
  });
  let year = formattedDate.toLocaleDateString("id-ID", {
    year: "numeric",
  });
  let hour = formattedDate.toLocaleTimeString("id-ID", { hour: "2-digit" });
  let minute = formattedDate.toLocaleTimeString("id-ID", {
    minute: "2-digit",
  });

  return `Updated at ${day} ${month} ${year}, ${hour}:${minute}`;
};
