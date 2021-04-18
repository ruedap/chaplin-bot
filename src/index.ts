import { getTodaysText } from "./text";
import { getToday } from "./date";
import { twitter, tweet } from "./tweet";

const args = process.argv.slice(2);
const isProduction = args.some((arg) => arg === "--production");
const isDebug = !isProduction && args.some((arg) => arg === "--debug");

const t = twitter(isProduction);
const zonedDateTime = getToday();
const text = getTodaysText(zonedDateTime).text;
const formatOptions: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  hour: '2-digit',
  hour12: false,
  minute: '2-digit',
  second: '2-digit'
}
const _tweet = isDebug
  ? `${text} [${zonedDateTime.toLocaleString(undefined, formatOptions)}]`
  : text;

tweet(t, _tweet);
