function createShip(length) {
  return {
    length: length,
    hit(number) {
      markHit(number);
    },
    isSunk() {},
  };
}
