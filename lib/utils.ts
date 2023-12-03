import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (created: Date): string => {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - created.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  } else if (months > 0) {
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else if (days > 0) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else {
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  }
};

export const formatLargeNumber = (number: number): string => {
  if (Math.abs(number) >= 1e6) {
    // Convert million to "M"
    return (number / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (Math.abs(number) >= 1e3) {
    // Convert thousand to "K"
    return (number / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
  } else {
    // Return the number as is
    return number.toString();
  }
};
