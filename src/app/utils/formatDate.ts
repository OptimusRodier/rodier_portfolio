export function formatDate(date: string) {
  const currentDate = new Date();

  // 🔐 Fix: make sure date is not undefined or null
  if (!date || !date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const postDate = new Date(date);
  const diffTime = Math.abs(currentDate.getTime() - postDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays <= 1) return "Today";
  if (diffDays === 1) return "Yesterday";
  return postDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
