import { Temporal } from "proposal-temporal";
import { getTexts, getTodaysText, TTexts, TText } from "./text";

test("getTexts", () => {
  const actual: TTexts = getTexts();
  const actual31 = actual.find((text) => text.id === 31);
  const expected31 = { id: 31, text: "私の最高傑作は次回作だ。" };
  expect(actual31).toMatchObject(expected31);
});

test("getTodaysText: 2020-01-01", () => {
  const dateTime = Temporal.ZonedDateTime.from("2020-01-01T08:00:00+09:00[Asia/Tokyo]");
  const actual: TText = getTodaysText(dateTime);
  const expected = {
    id: 1,
    text: '"You?" "You can see now?" "Yes, I can see now."',
  };
  expect(actual).toMatchObject(expected);
});

test("getTodaysText: 2021-12-31", () => {
  const dateTime = Temporal.ZonedDateTime.from("2021-12-31T08:00:00+09:00[Asia/Tokyo]");
  const actual: TText = getTodaysText(dateTime);
  const expected = { id: 31, text: "私の最高傑作は次回作だ。" };
  expect(actual).toMatchObject(expected);
});
