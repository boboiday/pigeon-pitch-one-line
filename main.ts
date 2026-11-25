import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Milo of St. Mark's Square: hawks ate 40 of us last year, so I built CooNet — 12,000 rooftop sensors. One coo warns the square, the square the city, the city the flock. Raising 2 million crumbs.";

if ([...line].length < 1 || [...line].length > 200) {
  throw new Error("entry must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
