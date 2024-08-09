let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const resultMessage = document.getElementById('result-message');
const attemptsDisplay = document.getElementById('attempts');
const restartButton = document.getElementById('restart-button');

guessButton.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);
    attemptsLeft--;

    if (userGuess === randomNumber) {
        resultMessage.textContent = `Congratulations! You guessed the correct number: ${randomNumber}`;
        resultMessage.style.color = 'green';
        endGame();
    } else if (attemptsLeft === 0) {
        resultMessage.textContent = `Game Over! The correct number was ${randomNumber}`;
        resultMessage.style.color = 'red';
        endGame();
    } else {
        resultMessage.textContent = userGuess < randomNumber ? 'Too low! Try again.' : 'Too high! Try again.';
        resultMessage.style.color = 'orange';
    }

    attemptsDisplay.textContent = attemptsLeft;
    guessInput.value = '';
    guessInput.focus();
});

function endGame() {
    guessButton.disabled = true;
    guessInput.disabled = true;
    restartButton.style.display = 'block';
}

restartButton.addEventListener('click', () => {
    attemptsLeft = 10;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    resultMessage.textContent = '';
    attemptsDisplay.textContent = attemptsLeft;
    guessButton.disabled = false;
    guessInput.disabled = false;
    guessInput.value = '';
    guessInput.focus();
    restartButton.style.display = 'none';
});
