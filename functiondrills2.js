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