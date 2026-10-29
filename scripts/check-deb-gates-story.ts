/**
 * Compare Deb's story data to the source text.
 *
 * Usage:
 *   npx tsx scripts/check-deb-gates-story.ts /path/to/story.txt
 *
 * Passes when the only differences are whitespace (BOM, blank lines,
 * trailing spaces, and the newline around the stray ". " fragment).
 */
import { readFileSync } from "fs";
import {
  DEB_GATES_STORY_MEMORIAL_URL,
  DEB_GATES_STORY_PARAGRAPHS,
  DEB_GATES_STORY_PULL_QUOTE,
  DEB_GATES_STORY_SIGN_OFF,
} from "../lib/deb-gates-story";

const sourcePath = process.argv[2];
if (!sourcePath) {
  console.error("Usage: npx tsx scripts/check-deb-gates-story.ts <story.txt>");
  process.exit(2);
}

function collapse(value: string): string {
  return value.replace(/\uFEFF/g, "").replace(/\s+/g, " ").trim();
}

function stripWhitespace(value: string): string {
  return value.replace(/\uFEFF/g, "").replace(/\s+/g, "");
}

const source = readFileSync(sourcePath, "utf8");
const rendered = DEB_GATES_STORY_PARAGRAPHS.join("\n");
const collapsedEqual = collapse(source) === collapse(rendered);
const whitespaceOnly = stripWhitespace(source) === stripWhitespace(rendered);
const words = (value: string) => collapse(value).split(" ");
const sourceWords = words(source);
const renderedWords = words(rendered);
const wordsEqual =
  sourceWords.length === renderedWords.length &&
  sourceWords.every((word, index) => word === renderedWords[index]);

const pullQuoteIsExcerpt = DEB_GATES_STORY_PARAGRAPHS.some((paragraph) =>
  paragraph.includes(DEB_GATES_STORY_PULL_QUOTE),
);
const urlPresent = DEB_GATES_STORY_PARAGRAPHS.some((paragraph) =>
  paragraph.includes(DEB_GATES_STORY_MEMORIAL_URL),
);
const signOffOk =
  DEB_GATES_STORY_SIGN_OFF === "Deb Gates" &&
  DEB_GATES_STORY_PARAGRAPHS[DEB_GATES_STORY_PARAGRAPHS.length - 1] ===
    DEB_GATES_STORY_SIGN_OFF;

console.log(
  JSON.stringify(
    {
      paragraphs: DEB_GATES_STORY_PARAGRAPHS.length,
      sourceWords: sourceWords.length,
      renderedWords: renderedWords.length,
      wordsEqual,
      collapsedWhitespaceEqual: collapsedEqual,
      whitespaceRemovedEqual: whitespaceOnly,
      whitespaceOnlyDiff: whitespaceOnly && wordsEqual,
      pullQuoteIsExactExcerpt: pullQuoteIsExcerpt,
      memorialUrlPresent: urlPresent,
      signOffOk,
    },
    null,
    2,
  ),
);

if (!whitespaceOnly || !wordsEqual || !pullQuoteIsExcerpt || !urlPresent || !signOffOk) {
  const limit = Math.max(sourceWords.length, renderedWords.length);
  for (let index = 0; index < limit; index += 1) {
    if (sourceWords[index] !== renderedWords[index]) {
      console.error(
        `First word mismatch at ${index}: source=${JSON.stringify(sourceWords[index])} rendered=${JSON.stringify(renderedWords[index])}`,
      );
      break;
    }
  }
  process.exit(1);
}
