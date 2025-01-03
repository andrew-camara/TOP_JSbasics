console.log("Let the game begin!")
//create variables: player & cpu choice, player & cpu score, while loop variable 'keepgoing'
let playerChoice;
let cpuChoice;
let playerScore = 0;
let cpuScore = 0;
let keepGoing;
//Generate function for cpu choice
function getComputerChoice() {
   //draw random number from 1-3, store in cpuChoice
    cpuChoice = Math.floor((Math.random()*3))+1;
    //If cpuChoice is 1, generate "rock"; if 2, generate "paper";
    //if 3, generate scissors; store result in cpuChoice
    if (cpuChoice === 1) {
        cpuChoice = "rock";
    }
    else if (cpuChoice === 2) {
        cpuChoice = "paper";
    }
    else if (cpuChoice == 3) {
            cpuChoice = "scissors";
        }
    return cpuChoice;
    }
//create function for player's choice
function getPlayerChoice() {
    //set while loop by creating keepGoing variable
    let keepGoing = true;
    while (keepGoing == true) {
        //ask player for choice, store in playerChoice variable
        playerChoice = prompt("rock, paper, or scissors?");
        //If user cancels, don't let them!
        if (playerChoice === null) {
            alert("not so fast, buddy")
        }
        //otherwise, test for valid input
            //If valid, tell player their choice,
            // set keepgoing to false to end the loop,
            //and store their choice in lowercase for 
            // comparisons
        else if (playerChoice.toLocaleLowerCase() === "rock" ||
        playerChoice.toLocaleLowerCase() === "paper" ||
        playerChoice.toLocaleLowerCase() === "scissors") {
            keepGoing = false;
            playerChoice = playerChoice.toLocaleLowerCase();
        } 
        //otherwise, tell player input is invalid, and repeat
        else (alert("invalid input; try again!"))
    }
    return playerChoice;
    }

//Let's play a round
    //need round to repeat until winner declared, so 
    //set up while loop
    keepGoing = true;
    while (keepGoing === true) {
        //have cpu and player make choice
        getPlayerChoice()
        getComputerChoice()
        //if same choice, keepgoing not updated, player 
        // told to go again
        if (playerChoice === cpuChoice) {
            alert(`You selected ${playerChoice} and the computer selected ${cpuChoice}; go again!`);
        } 
        //if player wins, update score, inform player, and 
        // finish the round by setting keepgoing to false
        else if 
        (playerChoice === "rock" && cpuChoice === "scissors"
         || playerChoice === "paper" && cpuChoice === "rock"
         || playerChoice === "scissors" && cpuChoice === "paper") { ++playerScore;
            alert(`You selected ${playerChoice} and the computer selected ${cpuChoice}; you win the round! You are on ${playerScore} points and the computer is on ${cpuScore} points`);
            keepGoing = false;
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
                keepGoing = false;
            }
    } 
