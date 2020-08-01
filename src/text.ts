import fs from "fs";

export type TText = {
  id: number;
  text: string;
};

export type TTexts = Readonly<Array<TText>>;

export const getTexts = () => {
  const str = fs.readFileSync("./src/maxims.json").toString();

  return JSON.parse(str) as TTexts;
};

export const getTodaysText = (date: Date) => {
  const texts = getTexts();
  const _date = date.getDate();
  const text = texts.find((text) => text.id === _date);

  return text ?? texts[texts.length - 1];
};
