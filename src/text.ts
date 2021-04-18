import fs from "fs";
import { Temporal } from "proposal-temporal";

export type TText = {
  id: number;
  text: string;
};

export type TTexts = Readonly<Array<TText>>;

export const getTexts = () => {
  const str = fs.readFileSync("./src/maxims.json").toString();

  return JSON.parse(str) as TTexts;
};

export const getTodaysText = (zonedDateTime: Temporal.ZonedDateTime) => {
  const texts = getTexts();
  const day = zonedDateTime.day;
  const text = texts.find((text) => text.id === day);

  return text ?? texts[texts.length - 1];
};
