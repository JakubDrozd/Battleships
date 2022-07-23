function createShip(length) {
  return {
    length: length,
    hit(position) {
      markHit(position);
    },
    isSunk(length) {},
  };
}

function createGameBoard() {
  return {};
}
