const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const score = document.querySelector(".your__score");

let yourScore = 0;
let player;
const renderScore = () => {
  score.innerText = yourScore;
};

const pick = () => {
  paper.addEventListener("click", () => {
    player = "Paper";
    result();
    return player;
  });
  rock.addEventListener("click", () => {
    player = "Rock";
    result();
    return player;
  });
  scissors.addEventListener("click", () => {
    player = "Scissors";
    result();
    return player;
  });
};

const getComputerChoice = () => {
  const array = ["Rock", "Paper", "Scissors"];
  arrayChoose = array.length;
  choose = Math.floor(Math.random() * arrayChoose);
  // console.log(array[choose]);
  return array[choose];
};
let pickAi = getComputerChoice();

const result = () => {
  if (
    (player === "Rock" && pickAi === "Paper") ||
    (player === "Paper" && pickAi === "Scissors") ||
    (player === "Scissors" && pickAi === "Rock")
  ) {
    console.log("You lost");
    yourScore--;
    console.log(yourScore);
  } else if (player === pickAi) {
    console.log("Draw");
    console.log(yourScore);
  } else {
    console.log("You win");
    yourScore++;
    console.log(yourScore);
  }
  console.log(player);
  console.log(pickAi);
};
pick();

renderScore();
