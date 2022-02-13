'use strict';

const choiceButton1 = document.getElementById(choice1);
const choiceButton2 = document.getElementById(choice2);
const choiceButton3 = document.getElementById(choice3);
  
const nolButton1 = document.getElementById(nol1);
const nolButton2 = document.getElementById(nol2);
const nolButton3 = document.getElementById(nol3);

const choiceValue1 = Number(choiceButton1.value);
const choiceValue2 = choiceButton2.value;
const choiceValue3 = choiceButton3.value;

const nolValue1 = nolButton1.value;
const nolValue2 = nolButton2.value;
const nolValue3 = nolButton3.value;

let result = choiceValue3*nolValue3;

console.log(result);