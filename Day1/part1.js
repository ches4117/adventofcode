function part1(callback) {
  const lineReader = require("readline").createInterface({
    input: require("fs").createReadStream("day1.txt"),
  });

  let preNumber = 0;
  let answer = 0;

  lineReader.on("line", function (line) {
    const lineNum = Number(line);
    if (preNumber < lineNum) {
      answer += 1;
    }
    preNumber = lineNum;
  });

  lineReader.on("close", () => {
    callback(answer);
  });
}

part1((value) => console.log(value));
