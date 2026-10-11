import { ui, type Locale } from "@/app/resources/i18n";

export function formatDate(date: string, includeRelative = true, locale: Locale = "en") {
  const t = ui[locale];
  const currentDate = new Date();

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const givenDate = new Date(date);

  const fullDate = givenDate.toLocaleDateString(t.dateLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  const diffInMs = currentDate.getTime() - givenDate.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    return t.today;
  } else if (diffInDays === 1) {
    return t.yesterday;
  } else if (diffInDays < 7) {
    return t.daysAgo(diffInDays);
  } else {
    return fullDate;
  }
}
