import { utcToZonedTime } from "date-fns-tz";

export const getTodayJST = (
  dateUTC: Date = new Date(),
  timeZone: string = "Asia/Tokyo",
) => {
  console.log("tz", process.env.TZ);
  console.log("dateUTC", dateUTC);
  const dateJST = utcToZonedTime(dateUTC, timeZone);
  console.log("dateJST", dateJST);

  return dateJST;
};
