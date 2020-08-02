import { Temporal } from "proposal-temporal";

export const getToday = (
  dateTime: Temporal.DateTime = Temporal.now.dateTime(),
  timeZone: Temporal.TimeZone = Temporal.TimeZone.from("Asia/Tokyo"),
) => {
  console.log("tz", process.env.TZ);
  console.log("dateTime arg", dateTime);
  // FIXME
  const dateTimeJST = dateTime.toAbsolute(timeZone).toDateTime(timeZone);
  console.log("dateTimeJST", dateTimeJST);

  return dateTimeJST;
};
