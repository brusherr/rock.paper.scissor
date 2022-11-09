let pcScore = 0;
let pScore = 0;

function getComputerChoice() {
    const pcChoice = ["rock", "paper", "scissor"];
    let arr = pcChoice[Math.floor(Math.random() * pcChoice.length)];
    return arr;
}


function playRound(playerSelection, computerSelection) {
    if((playerSelection === "paper" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "paper")){
        pcScore += 1;
        return `Computer Win! Player: ${playerSelection}  beats Computer: ${computerSelection}`

    } else if((playerSelection === "scissor" && computerSelection === "paper") ||
            (playerSelection === "rock" && computerSelection === "scissor") ||
            (playerSelection === "paper" && computerSelection === "rock")
    ){
        pScore += 1;
        return `Player Win! Player: ${playerSelection}  beats Computer: ${computerSelection}`
    } else  {
        return `Game is Tie! Player: ${playerSelection} Computer: ${computerSelection}`
    }
}


function game() {
    playRound();
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Scissor, Paper").toLocaleLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
        console.log(pScore, pcScore)
     }
}

game()

function winner(pScore, pcScore) {
    if(pScore > pcScore) {
        return `Player win! ${pScore} vs ${pcScore}`
    } else if(pcScore > pScore){
        return `Computer win! ${pcScore} vs ${pScore}`
    } else{
        return `Draw! ${pcScore} vs ${pScore}`
    }
}
console.log(winner(pScore, pcScore))