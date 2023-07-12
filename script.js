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

function playRound(playerSelection,computerSelection){
    let player = playerSelection.trim()[0].toUpperCase() + playerSelection.trim().toLowerCase().slice(1);
    if(player != "Paper" && player != 'Rock' && player != 'Scissors') {
        return "You entered wrong"
    }
    if(player === computerSelection){
        return "It's a Draw! \nPlayer: " + player + "\nComputer: " + computerSelection
    }
    switch(player){
        case 'Rock':
            if(computerSelection === 'Paper') {
                robot++;
                return "You Lose! \nPlayer: " + player + "\nComputer: " + computerSelection;
            }
            if(computerSelection === 'Scissors') {
                human++;
                return "You Won! \nPlayer: " + player + "\nComputer: " + computerSelection;
            }
        case 'Paper':
            if(computerSelection === 'Scissors') {
                robot++;
                return "You Lose! \nPlayer: " + player + "\nComputer: " + computerSelection;
            }
            if(computerSelection === 'Rock') {
                human++;
                return "You Won! \nPlayer: " + player + "\nComputer: " + computerSelection;
            }
        case 'Scissors':
            if(computerSelection === 'Rock') {
                robot++;
                return "You Lose! \nPlayer: " + player + "\nComputer: " + computerSelection;
            }

            if(computerSelection === 'Paper') {
                human++;
                return "You Won! \nPlayer: " + player + "\nComputer: " + computerSelection;
            }
    }
}
