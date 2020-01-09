function computerPlay() {
    min = Math.ceil(1);
    max = Math.floor(3);
    play = Math.floor(Math.random() * (max - min + 1)) + min;
    if (play === 1){
        return "rock";
    } else if (play === 2) {
        return "paper";
    } else if (play === 3) {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === computerSelection) {
        result = "Draw";
    } else if (playerSelection === "rock") {
        switch (computerSelection) {
            case "paper":
                result = "You Lose! Paper beats Rock";
                break;
            case "scissors":
                result = "You Win! Rock beats Scissors";
                break;
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "scissors":
                result = "You Lose! Scissors beats Paper";
                break;
            case "rock":
                result = "You Win! Paper beats Rock";
                break;                       
        }
    } else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                result = "You Lose! Rock beats Scissors";
                break;
            case "paper":
                result = "You Win! Scissors beats Paper";
                break; 
        }
    }
    return result;
}


function gameResult(result) {
    if (result.charAt(4) === "W") {
        playerScore.textContent = Number(playerScore.textContent) + 1;
    } else if (result.charAt(4) === "L") {
        computerScore.textContent = Number(computerScore.textContent) + 1;
    }
    if (playerScore.textContent === "5") {
        msg.textContent = "You are the winner! Pick one to start over:";
    } else if (computerScore.textContent === "5") {
        msg.textContent = "You are the loser! Pick one to start over:";
    }
}

function resetScore() {
    if (playerScore.textContent === "5" || computerScore.textContent === "5") {
        playerScore.textContent = "0";
        computerScore.textContent = "0";
    }
}


let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let options = [rock, paper, scissors];

let msg = document.getElementById('msg');
let playerScore = document.getElementById('player-score')
let computerScore = document.getElementById('computer-score')

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', (e) => {
        resetScore();
        let playerPlay = e.target.textContent.toLowerCase();
        let result = playRound(playerPlay, computerPlay());
        msg.textContent = result;
        gameResult(result);
    })
}
