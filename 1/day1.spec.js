var fs = require("fs");

const readInput = function() {
  return fs
    .readFileSync("input.txt", "utf8")
    .split("\n")
    .filter(s => s.trim().length > 0)
    .map(s => 1 * s);
};

const resultingFrequency = data => data.reduce((a, v) => a + 1 * v, 0);

describe("Hello World", function() {
  var theData = null;

  beforeAll(function() {
    console.log(`beforeAll called.`);
  });

  it("can read the input", function() {
    const i = readInput();
    expect(i.length).toBe(986);
  });

  it("has a resultingFrequency", function() {
    const input = readInput();
    expect(resultingFrequency(input)).toBe(466);
  });
});
