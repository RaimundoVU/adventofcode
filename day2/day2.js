const path = require("path");
const fs = require("fs");
const readline = require("readline");

const filestream = fs.createReadStream(path.join(__dirname, "input.txt"));
const rl = readline.createInterface({
  input: filestream,
  crlfDelay: Infinity,
});

let horizontalPos = 0;
let verticalPos = 0;
rl.on("line", (line) => {
  let splitted = line.split(" ");
  const action = splitted[0];
  const qtty = Number(splitted[1]);
  switch (action) {
    case "forward":
      horizontalPos += qtty;
      break;
    case "up":
      verticalPos -= qtty;
      break;
    case "down":
      verticalPos += qtty;
      break;
  }
});

rl.on("close", () => {
  console.log("Vertical Pos : " + verticalPos);
  console.log("HorizontalPos : " + horizontalPos);
  console.log("total : " + horizontalPos * verticalPos);
});
