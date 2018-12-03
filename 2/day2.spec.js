var fs = require("fs");

const readInput = function() {
  return fs
    .readFileSync("input.txt", "utf8")
    .split("\n")
    .filter(s => s.trim().length > 0);
};

const repeat = n => {
  return s => {
    const a = s.split("");
    const m = a.reduce((a, v) => {
      if (a[v]) {
        a[v]++;
      } else {
        a[v] = 1;
      }
      return a;
    }, {});
    for (let k in m) {
      const v = m[k];
      if (v === n) return true;
    }
    return false;
  };
};

const repeat3 = repeat(3);
const repeat2 = repeat(2);
const checksum = input => {
  let count2 = 0;
  let count3 = 0;
  input.forEach(s => {
    if (repeat3(s)) count3++;
    if (repeat2(s)) count2++;
  });
  result = count3 * count2;
  return result;
};

const exampleInput = [
  "abcdef",
  "bababc",
  "abbcde",
  "abcccd",
  "aabcdd",
  "abcdee",
  "ababab"
];

describe("Day 2 Problems", function() {
  it("Fequency example 1", function() {
    const s = `bababc`;
    expect(repeat3(s)).toBe(true);
    expect(repeat2(s)).toBe(true);
  });
  it("checksum for exmple input", function() {
    expect(checksum(exampleInput)).toBe(12);
  });
  it("checksum for input", function() {
    const input = readInput();
    const result = checksum(input);
    expect(checksum(input)).toBe(4980);
  });
});
