let human = 0;
let robot = 0;

function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);
    switch(rand){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound(playerSelection){
    const result = document.querySelector('.result');
    let computerSelection = getComputerChoice();
    let player = playerSelection.target.classList.value;
    if(player === computerSelection){
        result.textContent = "It's a Draw! \nPlayer: " + player + "\nComputer: " + computerSelection
        return;
    }
    switch(player){
        case 'Rock':
            if(computerSelection === 'Paper') {
                robot++;
                result.textContent = "You Lose! \nPlayer: " + player + "\nComputer: " + computerSelection;
                return;
            }
            if(computerSelection === 'Scissors') {
                human++;
                result.textContent = "You Won! \nPlayer: " + player + "\nComputer: " + computerSelection;
                return;
            }
        case 'Paper':
            if(computerSelection === 'Scissors') {
                robot++;
                result.textContent = "You Lose! \nPlayer: " + player + "\nComputer: " + computerSelection;
                return;
            }
            if(computerSelection === 'Rock') {
                human++;
                result.textContent = "You Won! \nPlayer: " + player + "\nComputer: " + computerSelection;
                return;
            }
        case 'Scissors':
            if(computerSelection === 'Rock') {
                robot++;
                result.textContent = "You Lose! \nPlayer: " + player + "\nComputer: " + computerSelection;
                return;
            }

            if(computerSelection === 'Paper') {
                human++;
                result.textContent = "You Won! \nPlayer: " + player + "\nComputer: " + computerSelection;
                return;
            }
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click',playRound));

