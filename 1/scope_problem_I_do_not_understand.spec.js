var fs = require("fs");
describe("Hello World", function() {
  var theData = null;

  beforeAll(function() {
    console.log(`beforeAll called.`);
    fs.readFile("input.txt", "utf8", function(err, data) {
      if (err) throw err;
      theData = data
        .split("\n")
        .filter(s => s.trim().length > 0)
        .map(s => 1 * s);
      console.log(`theData length is ${theData.length}`);
    });
  });

  it("says hello world", function() {
    console.log(`length ${theData.length}`);
  });
});
