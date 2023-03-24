
const rps = ["rock", "paper", "scissors"];
const playerSelection = "paper";

//get random computer choice for rps
function getComputerChoice(){
    choice = Math.floor(Math.random() * 3);
    return rps[choice];
}
//play a round
function playRound(playerSelection, computerSelection){
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
    return outcome + " " + playerSelection + " vs " + computerSelection;

}

//calculate who won
console.log(playerSelection)
console.log(playRound(playerSelection,getComputerChoice()));