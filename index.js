// Get DOM elements
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const restartBtn = document.getElementById('restart-btn'); // NEW: Get restart button
const resultDiv = document.getElementById('result');
const winnerDiv = document.getElementById('winner');
const playerScoreDiv = document.getElementById('player-score');
const computerScoreDiv = document.getElementById('computer-score');

// Game variables
let playerScore = 0;
let computerScore = 0;

// Computer's choice function
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Play a single round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return `It's a tie! Both chose ${playerSelection}.`;
    }
    
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

// Update the UI
function updateUI(result) {
    resultDiv.textContent = result;
    playerScoreDiv.textContent = `Player: ${playerScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
    
    // Check for a winner
    if (playerScore === 5) {
        winnerDiv.textContent = "Congratulations! You won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        winnerDiv.textContent = "Sorry! The computer won the game!";
        disableButtons();
    }
}

// Disable buttons after game ends
function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

// NEW: Function to enable buttons
function enableButtons() {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}

// NEW: Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    resultDiv.textContent = '';
    winnerDiv.textContent = '';
    playerScoreDiv.textContent = `Player: ${playerScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
    enableButtons();
}

// Event listeners for choice buttons
rockBtn.addEventListener('click', () => {
    const result = playRound('rock', computerPlay());
    updateUI(result);
});

paperBtn.addEventListener('click', () => {
    const result = playRound('paper', computerPlay());
    updateUI(result);
});

scissorsBtn.addEventListener('click', () => {
    const result = playRound('scissors', computerPlay());
    updateUI(result);
});

// NEW: Event listener for the restart button
restartBtn.addEventListener('click', resetGame);