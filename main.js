const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const container = document.querySelector("#container");
// const playBtn = document.querySelector("#playGame");

// playBtn.addEventListener("click", () => {
//     alert("The game has begun!");
//     playGame();
// });

// function playGame() {

let humanScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", () => {
    choice = "Rock";
    playRound(choice, getComputerChoice());
    checkScore();
})

paperBtn.addEventListener("click", () => {
    choice = "Paper";
    playRound(choice, getComputerChoice());
    checkScore();
})

scissorsBtn.addEventListener("click", () => {
    choice = "Scissors";
    playRound(choice, getComputerChoice());
    checkScore();
})

function playRound(humanChoice, computerChoice) {

    console.log(`Human:${humanChoice}\nComputer:${computerChoice}`)

    if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("You lose, paper beats rock!");
        computerScore++;
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You win, rock beats scissors!");
        humanScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win, paper beats rock!");
        humanScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("You lose, scissors beats paper!");
        computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("You lose, rock beats scissors!");
        computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win, scissors beats paper!");
        humanScore++;
    } else if (humanChoice == computerChoice) {
        console.log("No points!")
    }
    container.textContent = `Human: ${humanScore}\nComputer:${computerScore}`;
    console.log(`Human: ${humanScore}\nComputer:${computerScore}`);
}


// }
function checkScore() {
    if (humanScore == 5) {
        alert("Congratulations! You won!");
        humanScore = 0;
        computerScore = 0;

    } else if (computerScore == 5) {
        alert("Better luck next time!");
        humanScore = 0;
        computerScore = 0;
    }
}



const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}


