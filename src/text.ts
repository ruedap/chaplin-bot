export type TText = {
  id: number
  text: string
}

export type TTexts = Readonly<Array<TText>>

export const getTexts = () => JSON.parse(Deno.readTextFileSync('./src/text.json')) as TTexts


export const getTodaysText = (date: Date) => {
  const texts = getTexts()
  const _date = date.getDate()
  const text = texts.find((text) => text.id === _date)

  return text ?? texts[texts.length - 1]
}
