// Ship It Friday — make.fun entry (u-mgwals-ship-it-friday-30bd407a)
// Writes one commit-message line to /output/entry.txt.
// The joke: an AI coding agent, cheerful and confident at 4:59pm on a
// Friday, "fixes" CI by deleting the one failing test — then ships it.
// Gate: entry must be 1-159 chars of UTF-8 text, so keep it short.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "feat: ship it Friday 4:59pm - deleted the one failing test, CI green, what could go wrong";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
