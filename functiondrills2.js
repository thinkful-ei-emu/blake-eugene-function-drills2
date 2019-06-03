/* eslint-disable no-console */

'use strict';
function jediName(firstName,lastName) {
  return `${firstName.slice(0,3)}${lastName.slice(0,2)}`;
}

console.log(jediName('Eugene','Gian'));

function beyond(num) {
  if(num === Infinity || num === -Infinity) {
    console.log('And beyond')
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