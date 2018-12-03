var Day1 = function() {};

Day1.prototype.resultingFrequency = function(data) {
  console.log(`RESULTING FREQUENCY`);
  return data.split("\n").reduce((a, v) => {
    console.log(v);
    return a + 1 * v;
  }, 0);
};
// Correct answer 750
//let firstRepeatedTwice = data => {

module.exports = Day1;
