var Day1 = require("../app/day1");

describe("Day 1 problem", function() {
  it("resulting frequency should be 466", function() {
    Day1.resultingFrequency([1, 2, 3]);
    let rf = null;
    fs.readFile("input.txt", "utf8", function(err, data) {
      if (err) throw err;
      //console.log(data);
      rf = Day1.resultingFrequency(data);
      console.log(`\n\n\n\n\n rf=${rf}\n\n\n`);
    });
    expect(rf).toBe(466);
  });
});
