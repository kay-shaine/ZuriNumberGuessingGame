console.log("               Zuri Number Guessing Game");
console.log("A number guessing game thats generate a number between the range of 1 and another number and prompts the user to guess the number and move to next stage with the right guess.");
console.log('');

const randomRange = range => {
  return Math.floor(Math.random() * range) + 1;
}


let userName = prompt('Enter your username: ');
console.log(`Welcome to Zuri Number Guessing Game ${userName} `);

let rangeIncrease = 2;
let stage = 1;
let points = 0;
let result = randomRange(rangeIncrease);


let userGuess = prompt(`Guess between is 1 to ${rangeIncrease} for stage One: `);


while(true){
  if(parseInt(userGuess) !== result){
    console.log(`Sorry. Your guess was wrong.\nYou finished at Level ${stage} with ${points} point(s). Try again!`);
    console.log('Please refresh to restart  the game.')
    break;
  }
  else{
    console.log('You are doing well! ooin! unto the next stage .\n');
    rangeIncrease++;
    stage++;
    points++;
    result = randomRange(rangeIncrease);
    userGuess = prompt(`Guess between is 1 to ${rangeIncrease} for stage ${stage}: `);    
  }
}
