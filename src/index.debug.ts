import { getTodaysText } from "./text";
import { tweet } from "./tweet";

const t = getTodaysText(new Date());
tweet(`${t.text} [debug:${Date.now()}]`);
