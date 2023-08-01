let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById('scissors');

let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');
let drawScore = document.querySelector('.drawScore');

let playerCounter = 0;
let drawCounter = 0;
let computerCounter = 0;

let body = document.querySelector('body');

rock.addEventListener('click', playRock);
paper.addEventListener('click', playPaper);
scissors.addEventListener('click', playScissors);

function getComputerChoice(){
    if (Math.random() < 0.33) {
        return "Rock";
    } else if (Math.random() < 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function play(playerSelection, computerSelection) {
    playerPick = playerSelection.toLowerCase();
    switch (playerPick) {
        case "rock":
            switch (computerSelection.toLowerCase()) {
                case "rock":
                    drawScore.textContent = `Draws - ${++drawCounter}`;
                    break;
                case "paper":
                    computerScore.textContent = `Computer - ${++computerCounter}`;
                    checkWinner();
                    break;
                case "scissors":
                    playerScore.textContent = `Player - ${++playerCounter}`;
                    checkWinner();
                    break;
            }
            break;
        case "paper":
            switch (computerSelection.toLowerCase()) {
                case "rock":
                    playerScore.textContent = `Player - ${++playerCounter}`;
                    checkWinner();
                    break;
                case "paper":
                    drawScore.textContent = `Draws - ${++drawCounter}`;
                    break; 
                case "scissors":
                    computerScore.textContent = `Computer - ${++computerCounter}`;
                    checkWinner();
            }
            break;
        default:
            switch (computerSelection.toLowerCase()) {
                case "rock":
                    computerScore.textContent = `Computer - ${++computerCounter}`;
                    checkWinner();
                    break;
                case "paper":
                    playerScore.textContent = `Player - ${++playerCounter}`;
                    checkWinner();
                    break; 
                case "scissors":
                    drawScore.textContent = `Draws - ${++drawCounter}`;
            }
    }
}

function playRock() {
    play('rock', getComputerChoice());
}

function playPaper() {
    play('paper', getComputerChoice());
}

function playScissors() {
    play('scissors', getComputerChoice());
}

function checkWinner() {
    if (playerCounter === 5 || computerCounter === 5) {
        rock.removeEventListener('click', playRock);
        paper.removeEventListener('click', playPaper);
        scissors.removeEventListener('click', playScissors);
        if (playerCounter === 5) {
            let announcement = document.createElement('div');
            announcement.textContent = "The player wins!";
            body.appendChild(announcement);
        } else if (computerCounter === 5) {
            let announcement = document.createElement('div');
            announcement.textContent = "The computer wins!";
            body.appendChild(announcement);
        }
    }
}