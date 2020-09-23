console.log("Welcome to the Rock, Paper, Scissors Game!");

// Obtain choice from user
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleUserResponse (response) {
    // Ignore capitalisation of words
    var lowerCaseString = response.toLowerCase();
    // Validate user's choice and tell them if they made a mistake
    if (lowerCaseString == "rock" | lowerCaseString == "paper" | lowerCaseString == "scissors") {
        console.log("You entered: " + lowerCaseString);
        // Make random selection for computer of rock, paper or scissors#
        var computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        }
        else if (computerChoice <= 0.67) {
            computerChoice = "paper";
        }
        else {
            computerChoice = "scissors";
        }
        console.log("Computer choice is: " + computerChoice);
        // Compare the two choices
        if (lowerCaseString == computerChoice) {
            console.log("==DRAW==");
        }
        // Checking rock
        else if (lowerCaseString == "rock" && computerChoice == "paper") {
            console.log("--YOU LOSE--");
        }
        else if (lowerCaseString == "rock" && computerChoice == "scissors") {
            console.log("++YOU WIN++");
        }
        // Checking paper
        else if (lowerCaseString == "paper" && computerChoice == "rock") {
            console.log("++YOU WIN++");
        }
        else if (lowerCaseString == "paper" && computerChoice == "scissors") {
            console.log("--YOU LOSE--");
        }
        // Checking scissors
        else if (lowerCaseString == "scissors" && computerChoice == "rock") {
            console.log("--YOU LOSE--");
        }
        else if (lowerCaseString == "scissors" && computerChoice == "paper") {
            console.log("++YOU WIN++");
        }
    }
    else {
        console.log("Bad entry, please enter either rock, paper or scissors only!");
    }
    readline.close();
}
readline.question("Please enter either rock, paper or scissors:\n", handleUserResponse);
