const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const container = document.querySelector("div");



rockBtn.addEventListener("click", () => {
    choice = "Rock";
    playRound(choice, getComputerChoice());
})
paperBtn.addEventListener("click", () => {
    choice = "Paper";
    playRound(choice, getComputerChoice());
})
scissorsBtn.addEventListener("click", () => {
    choice = "Scissors";
    playRound(choice, getComputerChoice());
})

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


function playRound(humanChoice, computerChoice) {
    console.log(`Human:${humanChoice}\nComputer:${computerChoice}`)

    if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("You lose, paper beats rock!");
        // computerScore++;
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You win, rock beats scissors!");
        // humanScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win, paper beats rock!");
        // humanScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("You lose, scissors beats paper!");
        // computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("You lose, rock beats scissors!");
        // computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win, scissors beats paper!");
        // humanScore++;
    } else if (humanChoice == computerChoice) {
        console.log("No points!")
    }
}




// function playGame() {

//     let humanScore = 0;
//     let computerScore = 0;

//     function playRound(humanChoice, computerChoice) {
//         if (humanChoice == "Rock" && computerChoice == "Paper") {
//             console.log("You lose, paper beats rock!");
//             computerScore++;
//         } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
//             console.log("You win, rock beats scissors!");
//             humanScore++;
//         } else if (humanChoice == "Paper" && computerChoice == "Rock") {
//             console.log("You win, paper beats rock!");
//             humanScore++;
//         } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
//             console.log("You lose, scissors beats paper!");
//             computerScore++;
//         } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
//             console.log("You lose, rock beats scissors!");
//             computerScore++;
//         } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
//             console.log("You win, scissors beats paper!");
//             humanScore++;
//         } else if (humanChoice == computerChoice) {
//             console.log("No points!")
//         }

//     }

//     // for (i = 0; i < 5; i++) {
//     //     const humanSelection = getHumanChoice();
//     //     const computerSelection = getComputerChoice();
//     //     playRound(humanSelection, computerSelection);
//     //     console.log(`Human:${humanSelection}\nComputer:${computerSelection}`)
//     //     console.log(`Human: ${humanScore}\nComputer:${computerScore}`);
//     // }

//     if (humanScore > computerScore) {
//         console.log("You win!");
//     } else {
//         console.log("You lose!");
//     }
// }


// playGame()