function createShip(length) {
  return {
    length: length,
    hit(number) {
      markHit(number);
    },
    isSunk() {},
  };
}

(function createGB() {
  const gameBoardDiv = document.querySelector(".gameBoard");
  for (let i = 0; i <= 121; i++) {
    const field = document.createElement("div");
    field.classList.add(`field-${i}`);
    field.style.outline = "1px solid black";
    gameBoardDiv.appendChild(field);
  }
})();

const gameBoardDiv = document.querySelector(".gameBoard");
