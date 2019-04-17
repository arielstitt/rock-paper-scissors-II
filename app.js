let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}

function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissors'
}
function win(userChoice, computerChoice) {
    //increase user score
    userScore++;
    //show user score
    userScore_span.innerHTML = userScore;
    //show user win
    //result_p = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} You win`

}
function lose(userChoice, computerChoice) {
    //increase computer score
    computerScore++;
    //show computer score
    computerScore_span.innerHTML = computerScore;
    //show user win
    //result_p = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} You win`
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            console.log("user wins");
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose();
            console.log('user loses');
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw();
            console.log('tie');
            break;
    }

    console.log('user choice', userChoice)

}

function main() {

    rock_div.addEventListener('click', function () {
        game('r');
    });

    paper_div.addEventListener('click', function () {
        game('p')
    })

    scissors_div.addEventListener('click', function () {
        game('s')
    })

}

main();