console.log("Hello World!")
//Generate cpu choice
function getComputerChoice() {
   //draw random number from 1-3, store in cpuChoice
    let cpuChoice = Math.floor((Math.random()*3))+1
    //If cpuChoice is 1, generate "rock"; if 2, generate "paper";
    //if 3, generate scissors
    if (cpuChoice === 1) {
        console.log("rock");
    }
    else if (cpuChoice === 2) {
        console.log("paper");
    }
    else if (cpuChoice == 3) {
            console.log("scissors");
        }
    }