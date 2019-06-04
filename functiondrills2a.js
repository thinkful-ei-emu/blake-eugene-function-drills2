/* eslint-disable no-console */
'use strict';
function jediName (first, last){
  return first.slice(0,3) + last.slice(0,2);
}

console.log(jediName('Blake', 'Lowrey'));

function beyond (num){
  if (!isFinite(num)){
    console.log('And Beyond');
  }
  if (isFinite(num) && num > 0){
    console.log('To infinity');
  }
  if (!isFinite(num)&& num < 0){
    console.log('To negative infinity');
  }
  if (num === 0){
    console.log('Staying home');
  }
}

beyond(50);

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
console.log(decode('cloolo'));

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

console.log(daysInMonth('October'));

function rockPaperScissors(playNum){
  const cpuPlay = Math.floor(Math.random() * 3) + 1;
  if ((playNum === 1 && cpuPlay === 3) || (playNum === 2 && cpuPlay === 1) || (playNum === 3 && cpuPlay === 2)){
    return 'win';
  }
  if ((playNum === 3 && cpuPlay === 1) || (playNum === 1 && cpuPlay === 2) || (playNum === 2 && cpuPlay === 3)){
    return 'lose';
  }
  if (playNum === cpuPlay){
    return 'tie';
  }
  else {
    throw Error;
  }
}

console.log(rockPaperScissors(1));
  