var fs = require("fs");

const readInput = function() {
  return fs
    .readFileSync("input.txt", "utf8")
    .split("\n")
    .filter(s => s.trim().length > 0);
};

const repeat3 = s => {
  const a = s.split("");
  console.log(a);
  const m = a.reduce((a, v) => {
    if (a[v]) {
      a[v]++;
    } else {
      a[v] = 1;
    }
    return a;
  }, {});
  console.log(m);
  for (let k in m) {
    const v = m[k];
    if (v === 3) return true;
  }
  return false;
};

describe("Day 2 Problems", function() {
  it("Fequency example 1", function() {
    const s = `bababc`;
    expect(repeat3(s)).toBe(true);
  });
});
