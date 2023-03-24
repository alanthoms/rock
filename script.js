
const rps = ["rock", "paper", "scissors"]


//get random computer choice for rps
function getComputerChoice(){
    choice = Math.floor(Math.random() * 3);
    return rps[choice];
}
//play a round

function playRound(playerSelection, computerSelection){

}

//calculate who won

console.log(getComputerChoice());