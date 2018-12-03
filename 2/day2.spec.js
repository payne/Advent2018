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

const example2Input = [
  "abcde",
  "fghij",
  "klmno",
  "pqrst",
  "fguij",
  "axcye",
  "wvxyz"
];

diffPositions = (s1, s2) => {
  const a1 = s1.split("");
  const a2 = s2.split("");
  let dp = [];
  for (let i in a1) {
    // console.log(`index: ${i} has value ${a1[i]}`);
    console.log(`dp=${dp}`);
    const v1 = a1[i];
    const v2 = a2[i];
    if (v1 !== v2) {
      dp.push(i);
    }
  }
  console.log(`returning ${dp}`);
  return dp;
};

describe("Day 2 Problems", function() {
  it("fghij and fguij diff example", function() {
    expect([2, 3]).toEqual([2, 3]);
    console.log(`[4]=${[4]}`);
    let a = [];
    a.push(4);
    expect(a).toEqual([4]);
    expect(diffPositions("fghij", "fguij")).toEqual([2]); ### WHY!!!!??
  });
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
