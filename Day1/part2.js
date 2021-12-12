function part2(callback) {
  const lineReader = require("readline").createInterface({
    input: require("fs").createReadStream("day1.txt"),
  });
  let preList = [];
  let answer = 0;

  lineReader.on("line", function (line) {
    if (preList.length < 3) {
      preList.push(Number(line));
    } else {
      let preSum = preList.reduce((sum, curr) => (sum += curr), 0);
      preList.shift();
      preList.push(Number(line));
      let nowSum = preList.reduce((sum, curr) => (sum += curr), 0);
      if (preSum < nowSum) answer += 1;
    }
  });

  lineReader.on("close", () => {
    callback(answer);
  });
}

part2((value) => console.log(value));
