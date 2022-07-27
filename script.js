function createShip(length) {
  return {
    length: length,
    hit(number) {
      markHit(number);
    },
    isSunk() {},
  };
}

function createGameBoard() {
  return {
    fields: [
      ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ],
  };
}

module.exports = { createShip, createGameBoard };
