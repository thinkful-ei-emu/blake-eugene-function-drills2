/* eslint-disable no-console */

'use strict';
function jediName(firstName,lastName) {
  return `${firstName.slice(0,3)}${lastName.slice(0,2)}`;
}

console.log(jediName('Eugene','Gian'));

function beyond(num) {
  if(num === Infinity || num === -Infinity) {
    console.log('And beyond');
  }

  else if(num === 0) {
    console.log('Staying home');
  }

  else if((num < 0) && (num !== -Infinity)) {
    console.log('To negative infinity');
  }

  else if((num > 0) && (num !== Infinity)) {
    console.log('To infinity');
  }
}

beyond(Infinity);

function decode(word) {
  if(word.charAt(0) === 'a') {
    return word.charAt(1);   
  }
  else if(word.charAt(0) === 'b') {
    return word.charAt(2);   
  }
  else if(word.charAt(0) === 'c') {
    return word.charAt(3);   
  }
  else if(word.charAt(0) === 'd') {
    return word.charAt(4);   
  }
  else {
    return ' ';
  }
}

let message = 'craft block argon meter bells brown croon droop';
const messageArr = message.split(' ');
messageArr.map(function(word) {
  if(word.charAt(0) === 'a') {
    return word.charAt(1);   
  }
  else if(word.charAt(0) === 'b') {
    return word.charAt(2);   
  }
  else if(word.charAt(0) === 'c') {
    return word.charAt(3);   
  }
  else if(word.charAt(0) === 'd') {
    return word.charAt(4);   
  }
  else {
    return ' ';
  }
});

function daysInMonth(month, leapYear) {
  switch (month) {
  case 'February':
    if (!leapYear) {
      return 'February has 28 days';
    } else{
      return 'February has 29 days';
    }
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    return  `${month} has 30 days`;
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    return `${month} has 31 days`;
  }
}

daysInMonth('February', true);
// not sure if breaks are needed, ask why

function rockPaperScissors(num) {
  const randomNo = Math.floor(Math.random() * 3) + 1;
  if (num < 1 || num > 3){
    throw Error;
  } else if (num === 1) {
    if (randomNo === 1){
      return 'Tie';
    }else if(randomNo === 2){
      return 'Lose';
    } else {
      return 'Win';
    }
  } else if (num === 2) {
    if (randomNo === 2){
      return 'Tie';
    }else if(randomNo === 1){
      return 'Lose';
    } else {
      return 'Win';
    }
  } else if (num === 3) {
    if (randomNo === 3){
      return 'Tie';
    }else if(randomNo === 2){
      return 'Lose';
    } else {
      return 'Win';
    }
  }
}
  
rockPaperScissors(1);