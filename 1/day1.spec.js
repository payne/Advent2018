var fs = require("fs");

const readInput = function() {
  return fs
    .readFileSync("input.txt", "utf8")
    .split("\n")
    .filter(s => s.trim().length > 0)
    .map(s => 1 * s);
};

const resultingFrequency = data => data.reduce((a, v) => a + 1 * v, 0);
function* loop(data) {
  let i = 0;
  while (true) {
    const r = data[i++];
    console.log(`about to yield ${r}`);
    yield r;
    i = i % data.length;
  }
}
const stringFrom = s => {
  let r = "";
  it = s.values();
  let v = null;
  while ((v = it.next().value)) {
    r = r + "," + v;
  }
  return r;
};
const firstRepeatedTwice = data => {
  const seen = new Set();
  const it = loop(data);
  let current = 0;
  seen.add(current);
  while (true) {
    const v = it.next().value;
    current = current + v;
    if (seen.has(current)) {
      return current;
    }
    seen.add(current);
    console.log(`seen=${stringFrom(seen)}`);
  }
};

describe("Hello World", function() {
  it("firstRepeatedTwice example 1", function() {
    expect(firstRepeatedTwice([1, -1])).toBe(0);
  });
  it("has a resultingFrequency", function() {
    const input = readInput();
    expect(resultingFrequency(input)).toBe(466);
  });
  beforeAll(function() {
    console.log(`beforeAll called.`);
  });
  it("can read the input", function() {
    const i = readInput();
    expect(i.length).toBe(986);
  });
});
