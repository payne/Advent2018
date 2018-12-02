var fs = require("fs");

fs.readFile("input.txt", "utf8", function(err, data) {
  if (err) throw err;
  console.log(`Resulting frequency: ${resultingFrequency(data)}`);
});

resultingFrequency = data => data.split("\n").reduce((a, v) => a + 1 * v, 0);
