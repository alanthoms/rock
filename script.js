
const rps = ["rock", "paper", "scissors"];

storage = document.getElementById("pointStore");

var upoint = 0;
var cpoint = 0;

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
function playRound(choice){
    let playerSelection = choice;
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
    var point = document.createElement("div");
    point.classList.add("content");
    if (outcome == "win"){
        upoint +=1;
    } else if (outcome = "lose"){
        cpoint += 1;
    }
    point.textContent= outcome + " " + playerSelection + " vs " + computerSelection + "user score : " + upoint + "  comp score = " +cpoint;
    if (cpoint == 5 || upoint == 5){
        point.textContent += "   You " + outcome;
        cpoint = 0;
        upoint = 0;
    }
    storage.appendChild(point);
    return console.log(outcome + " " + playerSelection + " vs " + computerSelection);

}
//repeat for game
function game(){
    /** 
    for (let i = 0; i <5; i++){
        playRound();
    }
    */
}


const btn1 = document.querySelector('#roc');
btn1.onclick = () => playRound("rock");


const btn2 = document.querySelector('#pap');
btn2.onclick = () => playRound("paper");


const btn3 = document.querySelector('#sci');
btn3.onclick = () => playRound("scissors");




game();