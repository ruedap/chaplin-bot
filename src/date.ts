import { Temporal } from "proposal-temporal";

export const getToday = (
  dateTimeUTC: Temporal.ZonedDateTime = Temporal.now.zonedDateTimeISO().withTimeZone('UTC'),
  timeZone: Temporal.TimeZone = Temporal.TimeZone.from("Asia/Tokyo"),
) => {
  console.log("process.env.TZ:", process.env.TZ);
  console.log("dateTime UTC:", dateTimeUTC);

  const dateTimeJST = dateTimeUTC.withTimeZone(timeZone)
  console.log("dateTime JST:", dateTimeJST);

  return dateTimeJST;
};
