var fs = require("fs");

const readInput = function() {
  return fs
    .readFileSync("input.txt", "utf8")
    .split("\n")
    .filter(s => s.trim().length > 0)
    .map(s => 1 * s);
};

describe("Hello World", function() {
  var theData = null;

  beforeAll(function() {
    console.log(`beforeAll called.`);
  });

  it("can read the input", function() {
    const i = readInput();
    expect(i.length).toBe(986);
  });

  it("says hello world", function() {
    //console.log(`length ${theData.length}`);
  });
});
