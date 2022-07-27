const createShip = require("./script");

test("should create ship object", function () {
  expect(createShip(4)).toEqual({
    length: 4,
    hit: expect.any(Function),
    isSunk: expect.any(Function),
  });
});
