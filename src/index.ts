import { getTodaysText } from "./text";
import { getToday } from "./date";
import { twitter, options, tweet } from "./tweet";
import { Temporal } from "proposal-temporal";

const args = process.argv.slice(2);
const isProduction = args.some((arg) => arg === "--production");
const isDebug = !isProduction && args.some((arg) => arg === "--debug");

const t = twitter(options(isProduction));
const zonedDateTime = getToday();
const text = getTodaysText(zonedDateTime).text;
const formatOptions: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
}
const _tweet = isDebug ? `${text} [${zonedDateTime.toLocaleString(undefined, formatOptions)}]` : text;

tweet(t, _tweet);
