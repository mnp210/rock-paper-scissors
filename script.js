function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return "rock";
    } else if (randomNumber < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Please enter rock, paper, or scissors:");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const choice = humanChoice ? humanChoice.toLowerCase() : "";

        if (choice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (choice === "rock" && computerChoice === "scissors") ||
            (choice === "paper" && computerChoice === "rock") ||
            (choice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            const capitalizedHuman = choice.charAt(0).toUpperCase() + choice.slice(1);
            const capitalizedComputer = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
            console.log(`You win! ${capitalizedHuman} beats ${capitalizedComputer}.`);
        } else if (
            (computerChoice === "rock" && choice === "scissors") ||
            (computerChoice === "paper" && choice === "rock") ||
            (computerChoice === "scissors" && choice === "paper")
        ) {
            computerScore++;
            const capitalizedHuman = choice.charAt(0).toUpperCase() + choice.slice(1);
            const capitalizedComputer = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
            console.log(`You lose! ${capitalizedComputer} beats ${capitalizedHuman}.`);
        } else {
            console.log(`Invalid choice: "${humanChoice}". No points awarded.`);
        }
    }

    for (let i = 1; i <= 5; i++) {
        console.log(`--- Round ${i} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
    }

    console.log("=== Final Result ===");
    console.log(`Final Score -> You: ${humanScore} | Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Game over! The computer won the game.");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();
