// Create a funtion playGame
// Declare two variables inside the function which will keep the score
// Create two functions that will return the human and computer choices for the game
// Create a function "playRound" which: -> will call upon the two choice functions;
//                                      -> compare the two choices;
//                                      ->increment one of the score variables based on the winner.
// The "playRound" function loops 5 times, each time adding to one of the score variables
// After the loop is done, the "playGame" function stops and calls for a winner


function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper or Scissors");
    let newChoice = choice.slice(0, 1).toUpperCase() + choice.slice(1).toLowerCase();
    if (newChoice == "Rock" || newChoice == "Paper" || newChoice == "Scissors") {
        return newChoice;
    } else {
        throw new Error("Please insert one of the three choices.");
    }
}


function getComputerChoice() {
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



function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
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

    }

    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Human:${humanSelection}\nComputer:${computerSelection}`)
        console.log(`Human: ${humanScore}\nComputer:${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}


playGame()