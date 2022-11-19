let pcScore = 0;
let pScore = 0;
let tie = 0;
let moves = 5;
let btnRock = document.querySelector('.rock');
let btnPaper = document.querySelector('.paper');
let btnScissor = document.querySelector('.scissor');
let outComeDiv = document.querySelector('.outcome');
let pScoreDiv = document.querySelector('.pscore');
let pcScoreDiv = document.querySelector('.pcscore');
let winnerDiv = document.querySelector('.winner');
let movesDiv = document.querySelector('.moves');
let ctn = document.querySelector('.containerbtn')
let tieDiv = document.querySelector('.tie')

function getComputerChoice() {
    const pcChoice = ["🗿", "📜", "✂️"];
    let arr = pcChoice[Math.floor(Math.random() * pcChoice.length)];
    return arr;
}


function playRound(playerSelection, computerSelection) {
    if((playerSelection === "📜" && computerSelection === "✂️") ||
    (playerSelection === "✂️" && computerSelection === "🗿") ||
    (playerSelection === "🗿" && computerSelection === "📜")){
        pcScore += 1;
        moves -= 1;
        outComeDiv.textContent = `Computer: ${computerSelection}  beats Player: ${playerSelection}`;

    } else if((playerSelection === "✂️" && computerSelection === "📜") ||
            (playerSelection === "🗿" && computerSelection === "✂️") ||
            (playerSelection === "📜" && computerSelection === "🗿")
    ){
        pScore += 1;
        moves -= 1;
        outComeDiv.textContent = `Player: ${playerSelection}  beats Computer: ${computerSelection}`;
    } else  {
        moves -= 1;
        tie += 1;
        outComeDiv.textContent = `Player: ${playerSelection} Tie Computer: ${computerSelection}`;
    }
}

btnRock.addEventListener('click', () => {
    const playerSelection = "🗿";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    pScoreDiv.textContent = `Player: ${pScore}`
    pcScoreDiv.textContent = `Computer: ${pcScore}`
    movesDiv.textContent = `Moves left: ${moves}`;
    tieDiv.textContent  = `Tie: ${tie}`
    winner();
});
btnPaper.addEventListener('click', () => {
    const playerSelection = "📜";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    pScoreDiv.textContent = `Player: ${pScore}`
    pcScoreDiv.textContent = `Computer: ${pcScore}`
    movesDiv.textContent = `Moves left: ${moves}`;
    winner();
});
btnScissor.addEventListener('click', () => {
    const playerSelection = "✂️";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    pScoreDiv.textContent = `Player: ${pScore}`
    pcScoreDiv.textContent = `Computer: ${pcScore}`
    movesDiv.textContent = `Moves left: ${moves}`;
    winner();
});


function winner() {
    if ((pScore > pcScore) && (moves == 0)) {
        winnerDiv.textContent = "Player Win!";
        winnerDiv.style.color = "green";
        rmvBtn()
    } else if((pScore < pcScore) && (moves == 0)) {
        winnerDiv.textContent = "Computer Win!"
        winnerDiv.style.color = "red";
        rmvBtn()
    } else if ((pcScore == pScore) && (moves == 0)) {
        winnerDiv.textContent = "Tie Game!"
        winnerDiv.style.color = "gray";
        rmvBtn()
    }
}

function reset() {
    pScore = 0;
    pcScore = 0;
    moves = 5;
    tie = 0;
    winnerDiv.textContent = "";
    pScoreDiv.textContent = `Player: 0`
    pcScoreDiv.textContent = `Computer: 0`
    movesDiv.textContent = `Moves left: 5`;
    outComeDiv.textContent = "";
    tieDiv.textContent = "Tie: 0";
    ctn.appendChild(btnRock);
    ctn.appendChild(btnPaper);
    ctn.appendChild(btnScissor);
}

function rmvBtn() {
    if(moves == 0) {
        btnPaper.remove()
        btnRock.remove()
        btnScissor.remove()
    }
}