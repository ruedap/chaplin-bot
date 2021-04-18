import { Temporal } from "proposal-temporal";
import { getToday } from "./date";

test("getToday()", () => {
  const zonedDateTimeUTC = '2019-12-31T23:00:00+00:00[UTC]'
  const zonedDateTimeJST = '2020-01-01T08:00:00+09:00[Asia/Tokyo]'
  const zonedDateTime = Temporal.ZonedDateTime.from(zonedDateTimeUTC)
  const actual = getToday(zonedDateTime);

  expect(actual.toString()).toBe(zonedDateTimeJST);
});
