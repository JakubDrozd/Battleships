(function createGB() {
  const gameBoardDiv = document.querySelector(".gameBoard");
  for (let i = 0; i <= 121; i++) {
    const field = document.createElement("div");
    field.classList.add(`field-${i}`);
    field.style.outline = "1px solid black";
    field.style.display = "flex";
    field.style.justifyContent = "center";
    field.style.alignItems = "center";
    gameBoardDiv.appendChild(field);
  }
  document.querySelector(".field-1").innerHTML = "1";
  document.querySelector(".field-2").innerHTML = "2";
  document.querySelector(".field-3").innerHTML = "3";
  document.querySelector(".field-4").innerHTML = "4";
  document.querySelector(".field-5").innerHTML = "5";
  document.querySelector(".field-6").innerHTML = "6";
  document.querySelector(".field-7").innerHTML = "7";
  document.querySelector(".field-8").innerHTML = "8";
  document.querySelector(".field-9").innerHTML = "9";
  document.querySelector(".field-10").innerHTML = "10";
  document.querySelector(".field-11").innerHTML = "A";
  document.querySelector(".field-22").innerHTML = "B";
  document.querySelector(".field-33").innerHTML = "C";
  document.querySelector(".field-44").innerHTML = "D";
  document.querySelector(".field-55").innerHTML = "E";
  document.querySelector(".field-66").innerHTML = "F";
  document.querySelector(".field-77").innerHTML = "G";
  document.querySelector(".field-88").innerHTML = "H";
  document.querySelector(".field-99").innerHTML = "I";
  document.querySelector(".field-110").innerHTML = "J";
})();
