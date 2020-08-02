import { getTodaysText } from "./text";
import { getTodayJST } from "./date";
import { twitter, options, tweet } from "./tweet";

const args = process.argv.slice(2);
const isProduction = args.some((arg) => arg === "--production");
const isDebug = !isProduction && args.some((arg) => arg === "--debug");

const t = twitter(options(isProduction));
let text = getTodaysText(getTodayJST()).text;
text = isDebug ? `${text} [debug:${Date.now()}]` : text;

tweet(t, text);
