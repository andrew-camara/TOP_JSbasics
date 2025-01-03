console.log("Let the game begin!")
//create variables: player & cpu choice, player & cpu score, while loop variable 'keepgoing'
let playerScore = 0;
let cpuScore = 0;
//Generate function for cpu choice
function getComputerChoice() {
   //draw random number from 1-3, store in randNum
    let randNum = Math.floor((Math.random()*3))+1;
    //If random number is 1, generate "rock"; if 2, generate "paper";
    //if 3, generate scissors; store result in cpuChoice
    if (randNum === 1) {
        return "rock";
    }
    else if (randNum === 2) {
        return "paper";
    }
    else if (randNum == 3) {
        return "scissors";
    }
    }
//create function for player's choice
function getPlayerChoice() {
    //set while loop by creating keepGoing variable
    let keepGoing = true;
    while (keepGoing == true) {
        //ask player for choice, store in playerChoice variable
        playerAnswer = prompt("rock, paper, or scissors?");
        //If user cancels, don't let them!
        if (playerAnswer === null) {
            alert("not so fast, buddy")
        }
        //otherwise, test for valid input
            //If valid, tell player their choice,
            // and return their answer in lowercase
            //thus exiting the loop
        else if (playerAnswer.toLocaleLowerCase() === "rock") {return "rock";}
        else if (playerAnswer.toLocaleLowerCase() === "paper") {return "paper";} 
        else if (playerAnswer.toLocaleLowerCase() === "scissors") {return "scissors";} 
        //otherwise, tell player input is invalid, and repeat
        else (alert("invalid input; try again!"))
    }
    }

//create function to play a single round
    //first define inputs: player and cpu choice
    function playRound(cpuChoice, playerChoice)
    {
        //If tie, do not update score and alert player
        if (cpuChoice === playerChoice) {
            alert(`You selected ${playerChoice} and the computer selected ${cpuChoice}; it's a tie! You are on ${playerScore} points and the computer is on ${cpuScore} points`);
        }
          //If player wins, increase playerScore by 1, 
          // inform player
        else if (playerChoice === "rock" && cpuChoice === "scissors"
            || playerChoice === "paper" && cpuChoice === "rock"
            || playerChoice === "scissors" && cpuChoice === "paper") { ++playerScore;
                alert(`You selected ${playerChoice} and the computer selected ${cpuChoice}; you win the round! You are on ${playerScore} points and the computer is on ${cpuScore} points`);
            }
            //If cpu wins, increase cpuScore by 1, inform 
            // player, and end the round by setting keepgoing 
            // to false
            else if 
            (cpuChoice === "rock" && playerChoice === "scissors"
                || cpuChoice === "paper" && playerChoice === "rock"
                || cpuChoice === "scissors" && playerChoice === "paper") {
                    ++cpuScore;
                    alert(`You selected ${playerChoice} and the computer selected ${cpuChoice}; you lost the round! You are on ${playerScore} points and the computer is on ${cpuScore} points`);
                    }
    }
//Create function that plays 5 rounds, declares winner
function playGame() {
    //reset scores to zero
    cpuScore = 0
    playerScore = 0
    //run playRound() 5 times, and re-assign value
    // of player and cpu choice so that new value selected
    // each time
    for (let i = 0; i < 5; i++)
    {
        let playerChoice = getPlayerChoice();
        let cpuChoice = getComputerChoice();
        playRound(cpuChoice, playerChoice);
    }
    //compare scores, declare a winner
    if (cpuScore > playerScore) {
        alert(
            `Player score: ${playerScore}
            Cpu score: ${cpuScore}
            You lost :( commiserations!`
        ); 
        }
    else if (cpuScore < playerScore) {
        alert(
            `Player score: ${playerScore}
            Cpu score: ${cpuScore}
            You won! Congratulations!`
        );
        }
    else if (cpuScore === playerScore) {
        alert(
            `Player score: ${playerScore}
            Cpu score: ${cpuScore}
            it's a tie!`
        );
        }
    playerScore = 0;
    cpuScore = 0;
    }
//add button so that user can play the game from the webpage
document.getElementById("playButton").addEventListener("click", playGame);