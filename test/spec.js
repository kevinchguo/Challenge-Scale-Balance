// write tests here
const chai = require("chai");
const expect = chai.expect;
const scaleBalance = require("../index.js");

describe("Balance the given array", function() {
  it("should return a string", function() {
    var result = scaleBalance(["[5, 9]", "[1, 2, 6, 7]"]);
    expect(result).to.equal("2,6");
  });
  it("should return a string if only 1 weight is used", function() {
    var result = scaleBalance(["[5, 9]", "[1, 2, 4, 7]"]);
    expect(result).to.equal("4");
  });
  it("should return 'not possible' if there is no solution", function() {
    var result = scaleBalance(["[5, 9]", "[12, 123, 1234, 12345]"]);
    expect(result).to.equal("not possible");
  });
});
