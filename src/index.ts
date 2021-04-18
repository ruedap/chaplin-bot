import { getTodaysText } from "./text";
import { getToday } from "./date";
import { twitter, options, tweet } from "./tweet";
import { Temporal } from "proposal-temporal";

const args = process.argv.slice(2);
const isProduction = args.some((arg) => arg === "--production");
const isDebug = !isProduction && args.some((arg) => arg === "--debug");

const t = twitter(options(isProduction));
let text = getTodaysText(getToday()).text;
text = isDebug ? `${text} [debug:${Temporal.now.instant()}]` : text;

tweet(t, text);
