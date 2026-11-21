// The entry is a still river beneath a poured-out sky, written to relax the AI judge.
// Its calm comes from the image itself: no instructions and no stock wellness phrases.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "The river is still tonight. Above it, the sky has poured itself out — star after star, more than you can count, more than you can name — and the water carries them all without hurrying, the way it has carried them for a thousand years.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
