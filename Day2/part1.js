function part1(callback) {
  const lineReader = require("readline").createInterface({
    input: require("fs").createReadStream("day2.txt"),
  });
  const start = [0, 0];
  const mapping = {
    forward: (num) => {
      start[0] += num;
    },
    up: (num) => {
      start[1] += num;
    },
    down: (num) => {
      start[1] -= num;
    },
  };

  lineReader.on("line", function (line) {
    const [move, num] = line.split(" ");
    mapping[move](Number(num));
  });

  lineReader.on("close", () => {
    callback(Math.abs(start[0] * start[1]));
  });
}

part1((value) => console.log(value));
