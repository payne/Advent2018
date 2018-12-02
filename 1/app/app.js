var fs = require("fs");

fs.readFile("input.txt", "utf8", function(err, data) {
  if (err) throw err;
  console.log(`Resulting frequency: ${resultingFrequency(data)}`);
  console.log(`First repeated frequency: ${firstRepeatedTwice(data)}`);
});

resultingFrequency = data => data.split("\n").reduce((a, v) => a + 1 * v, 0);
// Correct answer 750
firstRepeatedTwice = data => {
  const seen = new Set();
  let repeated = null;
  let a = data
    .split("\n")
    .filter(x => x.trim().length > 0)
    .map(x => x * 1);
  a = a
    .concat(a)
    .concat(a)
    .concat(a)
    .concat(a)
    .concat(a)
    .concat(a)
    .concat(a)
    .concat(a)
    .concat(a)
    .concat(a);
  while (repeated === null) {
    a.reduce((a, v) => {
      let newA = a + v;
      if (repeated === null && seen.has(newA)) {
        repeated = newA;
      }
      seen.add(newA);
      //console.log(`${v} leads to ${newA}`);
      return newA;
    }, 0);
  }
  //  console.log(`seen size is ${seen.size}`);
  // seen.forEach(i => console.log(`\t${i}`));
  return repeated;
};
