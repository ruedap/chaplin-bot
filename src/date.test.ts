import { Temporal } from "proposal-temporal";
import { getToday } from "./date";

test("getToday()", () => {
  const dateStr = "2020-08-01T23:00";
  const dateTime = Temporal.DateTime.from(dateStr);
  const actual = getToday(dateTime);
  const expected = Temporal.DateTime.from("2020-08-02T08:00");

  expect(actual.toString()).toBe(expected.toString());
});
