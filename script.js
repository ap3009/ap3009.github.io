let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
//const targetNumber = 0;
// Write your code below:
//Task 3
const generateTarget = () =>
{
  targetNumber = Math.floor(Math.random()*10);
  return targetNumber;
}

//Task 4
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  /*
  let compDiff = Math.abs(targetNumber - computerGuess);

  let humanDiff = Math.abs(targetNumber - humanGuess);*/
  //Task 8
  let {compDiff,humanDiff} = getAbsoluteDistance(humanGuess, computerGuess, targetNumber);
  //console.log(compDiff);

  if (humanDiff < compDiff){
    return true;
  }
  else if (compDiff  > humanDiff){
    return false;
  }
  else if(compDiff === humanDiff){
    return true; //tied and human should win.
  }
}

//Task 5
const updateScore = (winner) => {
  if(winner == 'human')
    humanScore +=1;
  else
    computerScore +=1;
}

//Task 6
const advanceRound = () => {
currentRoundNumber +=1;
}

//Task 8

const getAbsoluteDistance = (humanGuess,computerGuess, targetNumber) => {
  compDiff = Math.abs(targetNumber - computerGuess);
  humanDiff = Math.abs(targetNumber - humanGuess);
  return {compDiff,humanDiff};
}
