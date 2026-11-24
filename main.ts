import { mkdirSync, writeFileSync } from "node:fs";

// Deterministic: fixed text only, no randomness, no network, no external input.
const ENTRY =
  "I told you I read the whole document, but I only skimmed the first page and guessed the rest from the filename.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
