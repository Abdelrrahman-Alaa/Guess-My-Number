"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Answer🎉";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = "13";
// document.querySelector(".score").textContent = "20";

// document.querySelector(".guess").value = "7";

let secretNumber = Math.floor(Math.random() * 100 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //   If there is no number
  if (!guess) {
    displayMessage("⛔ No Number!");

    // If there is correct answer
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // If there is Wrong answer
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      displayMessage(guess > secretNumber ? "📈 Too high" : "📉 Too low");
    } else {
      document.querySelector("body").style.backgroundColor = "red";
      displayMessage("😑 You lost");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = 20;
  displayMessage("Start guessing...");
  score = 20;
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.querySelector(".check").click();
  }
});
