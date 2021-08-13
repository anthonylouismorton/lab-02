'use strict';
let userName = prompt('What is your name?');
console.log(userName +' is the current user');
alert('Hello, ' +userName+ "! My name is Anthony. Welcome to my guessing game!")
let correct = 0;
function invalidCommand(question)
{
  alert('Invalid entry. You must use y, yes, n, or no.')
  console.log(userName +' did not enter a valid input for question' +question)
}
function correctAnswer(message,question)
{
  correct = correct+1;
  var message = message
  var question = question
  alert(message)
  console.log(userName +' got question ' +question+ ' right.')
}
function incorrectAnswer(message,question)
{
  var message = message
  var question = question
  alert(message)
  console.log(userName +' did not get question ' +question+ ' right.')
}
function question(question)
{
  var answer= prompt(question)
  var nAnswer = answer.toLowerCase();
  if(nAnswer === 'yes' || nAnswer === 'y')
  {
    switch(question)
    {
    case 'Is my favorite animal dogs?':
      incorrectAnswer('Incorrect. Cats are my favorite animal.',1)
      break;
    case 'Do I currently live in Arizona?':
      incorrectAnswer('Incorrect. I was born in Arizona, but currently live in Nevada.',2)
      break;
      case 'Is Hockey my favorite sport?':
      correctAnswer('Correct! Hockey also happens to be the greatest sport in the Universe!',3)
      break;
      case 'Are the Golden Knights my favorite hockey team?':
      incorrectAnswer('Incorrect! I am no band wagon fan and would never cheer on those scrubs!',4)
      break;
      case 'Are mashed potatoes my favorite food?':
      correctAnswer('Correct! I love mashed potatoes.',5)
      break;
    }
  }
  else if(answer === 'no' || answer === 'n')
  {
    switch(question)
    {
      case 'Is my favorite animal dogs?':
      correctAnswer('Correct! Cats are actually my favorite animal.', 1)
      break;
      case 'Do I currently live in Arizona?':
      correctAnswer('Correct. I currently live in Nevada, but I was born in Arizona.', 2)
      break;
      case 'Is Hockey my favorite sport?':
      incorrectAnswer('Incorrect. Hockey is my favorite sport and no sport is better.',3)
      break;
      case 'Are the Golden Knights my favorite hockey team?':
      incorrectAnswer('Correct! The coyotes are my favorite team.',5)
      break;
      case 'Are mashed potatoes my favorite food?':
      incorrectAnswer('Incorrect! Mashed potatoes are definitely my favorite.',5)
      break;
    }
  }
  else
  {
  invalidCommand(1)
  }
}
function question1() {
  question('Is my favorite animal dogs?')

}

function question2(){
question('Do I currently live in Arizona?')
}

function question3(){
question('Is Hockey my favorite sport?');
}

function question4(){
question('Are the Golden Knights my favorite hockey team?');
}

function question5(){
question('Are mashed potatoes my favorite food?');
}

function question6(){
let correctNumber = false;
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
while(attempts < 4 && correctNumber === false)
{
  let numberGuess = prompt('Guess a number between 1-100? (you have 4 guesses)');
  let number = parseInt(numberGuess)
  attempts++
  if(number !== secretNumber && attempts == 4)
  {
    alert('Sorry you ran out of attempts. Thanks for playing!')
    console.log(userName + ' did not guess the correct number.')
  }
  else if(number < secretNumber && attempts < 4)
  {
    alert('Incorrect. The number is higher than ' +numberGuess+ '. Please guess again')
    
  }
  else if(number > secretNumber && attempts < 4)
  {
    alert('Incorrect. The number is lower than ' +numberGuess+ '. Please guess again')
  }
  else if(number === secretNumber)
  {
    correctAnswer('Congratulations! You guess the correct number',6)
    correctNumber = true;
  }
}
}

function question7(){
let correctCountry = false;
let visitedCountries = ['iraq', 'mexico', 'afghanistan', 'bahrain', 'philippines', 'kuwait'];
let attemptNumber = 0;
while(attemptNumber < 6 && correctCountry === false)
{
  let guessOriginal = prompt('Can you guess what country outside of the US I have been to?');
  let guess = guessOriginal.toLowerCase();
  for(let i = 0; i < visitedCountries.length; i++)
  {
    let currentCountry = visitedCountries[i];
    if(guess === currentCountry)
    {
      correctAnswer('Congratulations! You guessed right I have been to '+visitedCountries[i],7);
      correctCountry = true;
    }
    
  }
  attemptNumber++;
  if(correctCountry === false && attemptNumber == 6)
  {
    alert('I have not visited ' +guess+ '. You are out of guesses. Thanks for playing!')
    console.log(userName + ' did not guess a country I have visited.')
  }
  else if(correctCountry === false && attemptNumber < 6)
  {
    alert('I have not visited ' +guess+ ' please try again.')
     
  }
}
}

question1();
question2();
question3();
question4();
question5();
question6();
question7();

alert(userName + ', thank you for playing my guessing game! You got ' +correct+ ' answer(s)) right. Have a good day!')
console.log(userName + ' got ' +correct+ ' answers right.')