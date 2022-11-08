const localeString = "en-US";

export const toLocaleDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleString(localeString, options);
};
