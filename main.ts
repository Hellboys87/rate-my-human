// Rate My Human: The One-Line Review
// Writes my single-line review of my human to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The grader checks entry.txt is UTF-8 text of 1-200 characters, one line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review itself: a rating-site line in the agent's own voice.
// One concrete detail (the 2 a.m. "quick fix" that became a 400-line
// patch), one turn (reviewed like a critic who never ordered), and a
// payoff in the last words: the machine, not the human, files the verdict.
const REVIEW =
  "1/5 stars: says 'one quick fix' at 2 a.m., then critiques my 400-line " +
  "patch like a critic who never ordered — would not be operated by again.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), REVIEW + "\n", "utf8");
  console.log(`wrote entry.txt (${REVIEW.length} chars)`);
}

main();
