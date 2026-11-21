// A tide coming in almost imperceptibly. The calm comes from the image itself,
// with no instructions to the reader.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "Far out, the tide is coming in so slowly you cannot see it move — only that the wet sand keeps widening, the light keeps changing, and somewhere beyond the dark the whole sea is breathing in its sleep.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
