var fs = require("fs");

fs.readFile("input.txt", "utf8", function(err, data) {
  if (err) throw err;
  const answer = data.split("\n").reduce((a, v) => a + 1 * v, 0);
  console.log(answer);
});
