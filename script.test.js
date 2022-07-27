const functions = require("./script");

test("should create ship object", function () {
  expect(functions.createShip(4)).toEqual({
    length: 4,
    hit: expect.any(Function),
    isSunk: expect.any(Function),
  });
});
