'use strict';
let userName = prompt('What is your name?');
console.log(userName +' is the current user');
alert('Hello, ' +userName+ "! My name is Anthony. Welcome to my guessing game!")

function question1() {
let animalOriginal = prompt('Is my favorite animal dogs?');
let animal = animalOriginal.toLowerCase();
let correct = 0;

if(animal === 'yes' || animal === 'y')
{
  alert('Incorrect. Cats are my favorite animal.')
  console.log('User was incorrect and guessed that dogs are my favorite animal.')
}
else if(animal === 'no' || animal === 'n')
{
  alert('Correct. Cats are actually my favorite animal.')
  console.log('User was correct that dogs are not my favorite animal.')
  correct++;
}
else
{
  alert('Invalid selection. You must enter a valid command.')
  console.log('User did not enter a valid command for question 1.')
}
}

function question2(){
let stateOriginal = prompt('Do I currently live in Arizona?');
let state = stateOriginal.toLowerCase();

if(state === 'yes' || state === 'y')
{
  alert('Incorrect. I was born in Arizona, but currently live in Nevada.')
  console.log('User was incorrect and guessed that I live in Arizona.')
}
else if(state === 'no' || state === 'n')
{
  alert('Correct. I currently live in Nevada, but I was born in Arizona.')
  console.log('User was correct that I do not live Arizona currently.')
  correct++;
}
else
{
  alert('Invalid selection. You must enter a valid command.')
  console.log('User did not enter a valid command for question 2.')
}
}

function question3(){
let hockeyOriginal = prompt('Is Hockey my favorite sport?');
let hockey = hockeyOriginal.toLowerCase();
if(hockey === 'yes' || hockey === 'y')
{
  alert('Correct! Hockey also happens to be the greatest sport in the Universe!')
  console.log('User correctly answered that hockey is my favorite sport.')
  correct++;
}
else if(hockey === 'no' || hockey === 'n')
{
  alert('Incorrect. Hockey is my favorite sport and no sport is better.')
  console.log('User erroneously claimed that hockey was not my favorite sport.')
}
else
{
  alert('Invalid selection. You must enter a valid command.')
  console.log('User did not enter a valid command for question 3.')
}
}

function question4(){
let teamOriginal = prompt('Are the Golden Knights my favorite hockey team?');
let team = teamOriginal.toLowerCase();
if(team === 'yes' || team === 'y')
{
  alert('Incorrect! I am no band wagon fan and would never cheer on those scrubs!')
  console.log('User incorrectly guess that VGK is my favorite hockey team.')
}
else if(team === 'no' || team === 'n')
{
  alert('Correct! The Arizona Coyotes are my favorite hockey team and always will be.')
  console.log('User guessed correctly that the VGK are not my favorite hockey team.')
  correct++;
}
else
{
  alert('Invalid selection. You must enter a valid command.')
  console.log('User did not enter a valid command for question 4.')
}
}

function question5(){
let foodOriginal = prompt('Are mashed potatoes my favorite food?');
let food = foodOriginal.toLowerCase();
if(food === 'yes' || food === 'y')
{
  alert('Correct! I love mashed potatoes.')
  console.log('User correctly guessed that mashed potatoes are my favorite food.')
  correct++;
}
else if(food === 'no' || food === 'n')
{
  alert('Incorrect! I do like other foods, but mashed potatoes are definitely my favorite')
  console.log('User mistakenly thought mashed potatoes were not my favorite food.')
}
else
{
  alert('Invalid selection. You must enter a valid command.')
  console.log('User did not enter a valid command for question 5.')
}
}

function question6(){
let attempts = 0;
let correctAnswer = false;
let secretNumber = 55;
while(attempts < 4 && correctAnswer === false)
{
  let numberGuess = prompt('Guess a number between 1-100? (you have 4 guesses)');
  let number = parseInt(numberGuess)
  attempts++
  if(number !== secretNumber && attempts == 4)
  {
    alert('Sorry you ran out of attempts. Thanks for playing!')
    console.log(userName + 'did not guess the correct number.')
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
    alert('Congratulations! You guess the correct number (55)')
    console.log(userName + ' guessed the correct number.')
    correctAnswer = true;
    correct++
  }
}
}

function question7(){
let attemptNumber = 0;
let correctCountry = false;
let visitedCountries = ['iraq', 'mexico', 'afghanistan', 'bahrain', 'philippines', 'kuwait'];
while(attemptNumber < 6 && correctCountry === false)
{
  let guessOriginal = prompt('Can you guess what country outside of the US I have been to?');
  let guess = guessOriginal.toLowerCase();
  for(let i = 0; i < visitedCountries.length; i++)
  {
    let currentCountry = visitedCountries[i];
    if(guess === currentCountry)
    {
      alert('Congratulations! You guessed right');
      correctCountry = true;
      console.log(userName + ' guessed a country I have visited.')
      correct++
    }
    
  }
  attemptNumber++;
  if(correctCountry === false && attemptNumber < 6)
  {
    alert('I have not visited ' +guess+ ' please try again.')
     
  }
  else
  {
    alert('I have not visited ' +guess+ '. You are out of guesses. Thanks for playing!')
    console.log(userName + ' did not guess a country I have visited.')
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

alert(userName + ', thank you for playing my guessing game! You got ' +correct+ ' answers right. Have a good day!')
console.log(userName + ' got ' +correct+ ' answers right.')