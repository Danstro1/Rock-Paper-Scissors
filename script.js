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
        result.innerText = "It's a Draw! \nPlayer: " + player + "\nComputer: " + computerSelection;
        final.innerText = `Total Human wins: ${human}\n Total Robot wins: ${robot}\n`
        return;
    }
    switch(player){
        case 'Rock':
            if(computerSelection === 'Paper') {
                robot++;
                result.innerText = "You Lose! \nPlayer: " + player + "\nComputer: " + computerSelection;
                break;
            }
            if(computerSelection === 'Scissors') {
                human++;
                result.innerText = "You Won! \nPlayer: " + player + "\nComputer: " + computerSelection;
                break;
            }
        case 'Paper':
            if(computerSelection === 'Scissors') {
                robot++;
                result.innerText = "You Lose! \nPlayer: " + player + "\nComputer: " + computerSelection;
                break;
            }
            if(computerSelection === 'Rock') {
                human++;
                result.innerText = "You Won! \nPlayer: " + player + "\nComputer: " + computerSelection;
                break;
            }
        case 'Scissors':
            if(computerSelection === 'Rock') {
                robot++;
                result.innerText = "You Lose! \nPlayer: " + player + "\nComputer: " + computerSelection;
                break;
            }

            if(computerSelection === 'Paper') {
                human++;
                result.innerText = "You Won! \nPlayer: " + player + "\nComputer: " + computerSelection;
                break;
            }
    }    
    final.innerText = `Total Human wins: ${human}\n Total Robot wins: ${robot}\n`
    if(human >= 5 || robot >= 5){
        buttons.forEach(button => button.disabled = true);
        if(human > robot) final.innerText += "Human won overall!";
        else if(human < robot) final.innerText += "Robot won overall!";
        else final.innerText += "Draw overall!";
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click',playRound));

const final = document.querySelector('.final');
