type TText = {
  id: number
  text: string
}

export type TTexts = Readonly<Array<TText>>

export const getText = () => JSON.parse(Deno.readTextFileSync('./src/text.json')) as TTexts
