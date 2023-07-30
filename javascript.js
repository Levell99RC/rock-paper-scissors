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
                    return "You tie! You're both rock!";
                    break;
                case "paper":
                    return "You lose! Paper beats rock!";
                    break;
                case "scissors":
                    return "You win! Rock beats scissors!";
                    break;
            }
            break;
        case "paper":
            switch (computerSelection.toLowerCase()) {
                case "rock":
                    return "You win! Paper beats rock!";
                    break;
                case "paper":
                    return "You tie! You're both paper!";
                    break; 
                case "scissors":
                    return "You lose! Scissors beat paper!";
            }
            break;
        default:
            switch (computerSelection.toLowerCase()) {
                case "rock":
                    return "You lose! Rock beats scissors!";
                    break;
                case "paper":
                    return "You win! Scissors beats paper!";
                    break; 
                case "scissors":
                    return "You tie! You're both scissors!";
            }
    }
}

function game() {
    let player = prompt("Rock, paper, or scissors?");
    let comp = getComputerChoice();

    for (let a = 0; a < 5; a++) {
        console.log(play(player, comp));
        if (a < 4) {
            player = prompt("Let's play again! Rock, paper, or scissors?");
            comp = getComputerChoice();
        }
    }
}