const path = require("path");
const fs = require("fs");
const readline = require("readline");

const filestream = fs.createReadStream(path.join(__dirname, "input.txt"));
const rl = readline.createInterface({
  input: filestream,
  crlfDelay: Infinity,
});

async function partOne() {
  let total = 0;
  let prev = undefined;
  for await (const line of rl) {
    const actual = Number(line);
    if (prev !== undefined && prev < actual) {
      total++;
    }
    prev = actual;
  }
  console.log("Part One");
  console.log(total);
}

async function partTwo() {
  const batch = 3;
  let lineNumber = 0;
  let total = 0;
  let batchArray = Array(3);
  let lastSum = undefined; // la primera suma siempre esta indefinida
  rl.on("line", (line) => {
    batchArray[lineNumber % batch] = Number(line);
    if (lineNumber >= batch) {
      const suma = batchArray.reduce((a, b) => a + b, 0);
      if (lastSum !== undefined && lastSum < suma) {
        total++;
      }
      lastSum = suma;
    }
    lineNumber++;
  });

  console.log("Part Two");
  rl.on("close", () => console.log(total));
}

partOne();
partTwo();
