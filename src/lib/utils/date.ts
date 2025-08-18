export function formatDate(isoString: string) {
  const d = new Date(isoString);
  const localTime = new Date(d.getTime() + d.getTimezoneOffset() * 60000);
  return localTime.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
