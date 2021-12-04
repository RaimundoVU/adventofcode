const path = require("path");
const fs = require("fs");
const readline = require("readline");

const filestream = fs.createReadStream(path.join(__dirname, "input.txt"));
const rl = readline.createInterface({
  input: filestream,
  crlfDelay: Infinity,
});

let aim = 0;
let horizontalPos = 0;
let verticalPos = 0;
rl.on("line", (line) => {
  let splitted = line.split(" ");
  const action = splitted[0];
  const qtty = Number(splitted[1]);
  switch (action) {
    case "forward":
      horizontalPos += qtty;
      let newDepth = qtty * aim;
      verticalPos += newDepth;
      break;
    case "up":
      aim -= qtty;
      break;
    case "down":
      aim += qtty;
      break;
  }
});

rl.on("close", () => {
  console.log("Vertical Pos : " + verticalPos);
  console.log("HorizontalPos : " + horizontalPos);
  console.log("Aim : " + aim);
  console.log("total : " + horizontalPos * verticalPos);
});
