
const rps = ["rock", "paper", "scissors"];

// get player
function getPlayerSelection(){
    let result = prompt("enter choice");
    return result;
}
//get random computer choice for rps
function getComputerChoice(){
    choice = Math.floor(Math.random() * 3);
    return rps[choice];
}
//play a round
function playRound(){
    let playerSelection = getPlayerSelection();
    let computerSelection = getComputerChoice();
    let outcome;
    if (playerSelection == computerSelection){
        outcome = "draw";
    } else if(playerSelection == "rock"){
        if(computerSelection == "scissors"){
            outcome = "win";
        }else{
            outcome = "lose";
        }
    } else if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            outcome = "win";
        }else{
            outcome = "lose";
        }
    } else if(playerSelection == "scissors"){
        if(computerSelection == "paper"){
            outcome = "win";
        }else{
            outcome = "lose";
        }
    }
    return console.log(outcome + " " + playerSelection + " vs " + computerSelection);

}
//repeat for game
function game(){
    /** 
    for (let i = 0; i <5; i++){
        playRound();
    }
    */
   playRound();
}

game();