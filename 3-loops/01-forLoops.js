/*
CLASSIC FOR LOOPS
*/

//Loop Variations
//For statement
//Do while statement -> old code
//while
//labeled statement
//break statement
//continue statement
//for in statement
//for of statement -> introduced in ES6

//counted from 0 - 9 by 1's
for(let i = 0; i < 10; i++){
    console.log(i);
}

//count from 0 - 20 by 2s
for (let i = 0; i <= 20; i+=2){
    console.log(i);
}

//Challenge: using a for loop, count from 10 to 0, going down by 1s
for (let i = 10; i >= 0; i--){
    console.log(i);
}

let name = 'alex';

for(let i = 0; i < name.length; i++ ){
    console.log(name[i]);
}

let sum = 0;

for(let i = 1; i <= 50; i++){
    sum = sum + i;
}
console.log(sum);