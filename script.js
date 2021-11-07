let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
const generateTarget = () => {
  targetNumber = Math.floor(Math.random()*10);
  return targetNumber;
}
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if(humanGuess >=10)
    alert("Please guess number between 0 - 9! Computer Won this round!!");
  
  let {compDiff,humanDiff} = getAbsoluteDistance(humanGuess, computerGuess, targetNumber);
  
  if (humanDiff < compDiff)
    return true;
  else if (compDiff  > humanDiff)
    return false;
  else if(compDiff === humanDiff)
    return true; //tied and human should win.  
}

const updateScore = (winner) => {
  if(winner == 'human')
    humanScore +=1;
  else
    computerScore +=1;
}

const advanceRound = () => currentRoundNumber +=1;

const getAbsoluteDistance = (humanGuess,computerGuess, targetNumber) => {
  compDiff = Math.abs(targetNumber - computerGuess);
  humanDiff = Math.abs(targetNumber - humanGuess);
  return {compDiff,humanDiff};
}
