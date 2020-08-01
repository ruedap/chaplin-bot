import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { getText, TTexts } from './text.ts'

Deno.test("getText", () => {
  const actual: TTexts = getText();
  const actual31 = actual.find((text) => text.id === 31)
  const expected31 = { id: 31, text: '私の最高傑作は次回作だ。'};
  assertEquals(actual31, expected31);
});
