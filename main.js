const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const container = document.querySelector("#container");
const container2 = document.querySelector("#container2");
const messages = document.querySelector("#messages");

// const playBtn = document.querySelector("#playGame");


container.setAttribute('style', 'white-space: pre;');
container2.setAttribute('style', 'white-space: pre;');

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

    if (humanChoice == "Rock" && computerChoice == "Paper") {
        messages.textContent = "You lose, paper beats rock!";
        console.log("You lose, paper beats rock!");
        computerScore++;
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        messages.textContent = "You win, rock beats scissors!";
        console.log("You win, rock beats scissors!");
        humanScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        messages.textContent = "You win, paper beats rock!";
        console.log("You win, paper beats rock!");
        humanScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        messages.textContent = "You lose, scissors beats paper!";
        console.log("You lose, scissors beats paper!");
        computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        messages.textContent = "You lose, rock beats scissors!";
        console.log("You lose, rock beats scissors!");
        computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        messages.textContent = "You win, scissors beats paper!";
        console.log("You win, scissors beats paper!");
        humanScore++;
    } else if (humanChoice == computerChoice) {
        messages.textContent = "No points!";
        console.log("No points!")
    }

    container.textContent = `Human: ${humanScore}\r\nPlayed:${humanChoice}`;
    container2.textContent = `Computer:${computerScore}\r\nPlayed:${computerChoice}`;

    console.log(`Human: ${humanScore} \nPlayed:${computerScore}`);
    console.log(`Human:${humanChoice}\nPlayed:${computerChoice}`)
}


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


// }

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


