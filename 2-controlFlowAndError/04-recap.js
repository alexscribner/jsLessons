/*
RECAP
*/
let stringExample = 'string';
let numberExample = 0;
let boolExample = true;

conditionExample = 0;

//if else example

if (typeof conditionExample === 'string'){
    console.log('yep, its a string');
} else if (typeof conditionExample === 'number'){
    console.log('yep its a number');
} else if (typeof conditionExample === 'boolean'){
    console.log('yep its a boolean')
}

//ternary
(typeof conditionExample === 'string') ? console.log('our variable is a string') 
: (typeof conditionExample === 'number') ? console.log('our var is a number') 
: (typeof conditionExample === 'undefined') ? console.log('our var is undefined') 
: console.log('this is our default case');

let FB = 15;

// if (FB % 3 === 0 && FB % 5 === 0){
//     console.log('fizz buzz');
// } else if(FB % 5 ===0){
//     console.log('buzz');
// } else if(FB % 3 === 0){
//     console.log('fizz');
// }

switch (true){
    case (FB % 15 === 0):
    console.log('Fizz Buzz');
    break;
    case (FB % 5 === 0):
    console.log('buzz');
    break;
    case (FB % 3 === 0):
    console.log('fizz');
    break;
}

(FB % 15 === 0) ? console.log('fizz buzz') 
: (FB % 5 === 0) ? console.log('buzz') 
: (FB % 3 === 0) ? console.log('fizz') 
:console.log('this is the default')
