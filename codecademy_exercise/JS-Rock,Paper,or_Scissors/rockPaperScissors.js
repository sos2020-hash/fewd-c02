const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ) {
      return userInput;
    } else {
      console.log('Error');
    }
  } 
  
  const getComputerChoice = number => {
    number = Math.floor(Math.random() * 3);
    switch (number) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors'
    }
  } 
  
  const determineWinner = (userChoice,          computerChoice) => { 
    if (userChoice === computerChoice) {
      return 'tie';
      }  if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'computer won';
      } else {
        return 'You won';
      } 
    } if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'computer won';
        } else {
          return 'You won';
        }
      } if (userChoice === 'scissors') {
          if (computerChoice === 'rock') {
            return 'computer won';
          } else {
            return 'you won';
          } 
        } if (userChoice === 'bomb') {
            return 'You won';
          }
        }
      
  
  let playGame = () => {
     const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
  }
  
  playGame()