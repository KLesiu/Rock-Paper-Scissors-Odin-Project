const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const score = document.querySelector(".your__score");
let text = document.querySelector(".text");
let pickAi;
let round = 1;
let yourScore = 0;
let player;
const renderScore = () => {
  score.innerText = yourScore;
  if (round == 5 && yourScore > 0) {
    text.innerText = "You win";
    yourScore = 0;
    round = 0;
  } else if (round == 5 && yourScore < 0) {
    text.innerText = "You lose";
    yourScore = 0;
    round = 0;
  } else if (round == 5 && yourScore < 1 && yourScore > -1) {
    text.innerText = "Draw";
    yourScore = 0;
    round = 0;
  } else {
    text.innerText = "Result:";
  }
};

const pick = () => {
  paper.addEventListener("click", () => {
    player = "Paper";
    gameAI();
    result();
    round++;
    return player;
  });
  rock.addEventListener("click", () => {
    player = "Rock";
    gameAI();
    result();
    round++;
    return player;
  });
  scissors.addEventListener("click", () => {
    player = "Scissors";
    gameAI();
    result();
    round++;
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
const gameAI = () => {
  pickAi = getComputerChoice();
};

const result = () => {
  if (
    (player === "Rock" && pickAi === "Paper") ||
    (player === "Paper" && pickAi === "Scissors") ||
    (player === "Scissors" && pickAi === "Rock")
  ) {
    console.log("You lost");
    yourScore--;
    console.log(yourScore);
    renderScore();
  } else if (player === pickAi) {
    console.log("Draw");
    console.log(yourScore);
    renderScore();
  } else {
    console.log("You win");
    yourScore++;
    console.log(yourScore);
    renderScore();
  }
  console.log(player);
  console.log(pickAi);
};

pick();
