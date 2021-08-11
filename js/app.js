'use strict';
let userName = prompt('What is your name?');
console.log(userName +' is the current user');
alert('Hello, ' +userName+ "! My name is Anthony. Welcome to my guessing game!")
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
alert(userName + ', thank you for playing my guessing game! You got ' +correct+ ' answers right. Have a good day!')
console.log(userName + ' got ' +correct+ ' answers right.')