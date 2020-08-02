import { Temporal } from "proposal-temporal";

export const getToday = (
  dateTime: Temporal.DateTime = Temporal.now.dateTime(),
  // timeZone: Temporal.TimeZone = Temporal.TimeZone.from("Asia/Tokyo"),
) => {
  console.log("process.env.TZ:", process.env.TZ);
  console.log("dateTime UTC:", dateTime);
  // FIXME
  const _timeZone = "-09:00";
  const dateTimeJST = Temporal.DateTime.from(
    `${dateTime.toAbsolute(_timeZone)}`,
  );
  console.log("dateTime JST:", dateTimeJST);

  return dateTimeJST;
};
