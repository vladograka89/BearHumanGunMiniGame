/*The user should be able to choose 'bear', 'human', 
or 'gun' when the game starts*/

//Creating function for the user choice making userInput to lowerCase
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'bear' || userInput === 'human' || userInput === 'gun')
    {
        return userInput;
    } else {
        console.log('Please enter valid option')
    }
}

//Creating function for the computer choice, randomly generating a choice
function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'bear';
    } else if (randomNumber === 1) {
        return 'human';
    } else {
        return 'gun';
    }
}

//Function determining a winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'The game is a tie'
    }
    if (userChoice === 'human') {
        if (computerChoice === 'bear') {
            return 'You have been eaten by a bear!'
        } else {
            return 'You have disarmed a gun!'
        }
    }
    if (userChoice === 'bear') {
        if (computerChoice === 'gun') {
            return 'You have been shot by a gun!'
        } else {
            return 'You have eaten a human!'
        }
    }
    if (userChoice === 'gun') {
        if (computerChoice === 'human') {
            return 'Your gun has been disarmed!'
        } else {
            return 'You have shot a bear!'
        }
    }
}

//Creating function to play the game
function playGame() {
    var promptUserChoice = prompt('Please choose bear, human or gun');
    var userChoice = getUserChoice(promptUserChoice);
    var computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    alert(determineWinner(userChoice, computerChoice));
}

//Play the Game!
playGame();