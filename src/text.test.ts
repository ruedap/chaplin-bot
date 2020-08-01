import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { getTexts, getTodaysText, TTexts, TText } from './text.ts'

Deno.test("getTexts", () => {
  const actual: TTexts = getTexts();
  const actual31 = actual.find((text) => text.id === 31)
  const expected31 = { id: 31, text: '私の最高傑作は次回作だ。'};
  assertEquals(actual31, expected31);
});

Deno.test("getTodaysText: 2020/08/01", () => {
  const actual: TText = getTodaysText(new Date('2020/08/01'))
  const expected = { id: 1, text: '"You?" "You can see now?" "Yes, I can see now."' };
  assertEquals(actual, expected);
});

Deno.test("getTodaysText: 2021/01/31", () => {
  const actual: TText = getTodaysText(new Date('2021/01/31'))
  const expected = { id: 31, text: '私の最高傑作は次回作だ。' };
  assertEquals(actual, expected);
});
