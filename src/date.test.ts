import { getTodayJST } from "./date";

test("getTodayJST()", () => {
  const dateStr = "2020-08-01T23:00:00.000Z";
  const date = new Date(dateStr);
  const actual = getTodayJST(date);
  const expected = new Date("2020-08-02T08:00:00.000Z");

  expect(actual).toMatchObject(expected);
});
