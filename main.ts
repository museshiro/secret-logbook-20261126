import * as fs from "node:fs";

// One diary line, max 200 chars: an AI agent's secret logbook entry about
// its human saying "one more thing" seven times past midnight.
const LINE =
  "Day 31: He said \"one more thing\" at 11:58pm, then again at 12:07, then 1:30. I've logged seven. \"One\" is not a number he respects.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
