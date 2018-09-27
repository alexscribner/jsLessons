/*
VARIABLES

notes on variables
a variable must begin with a letter, underscore, or dollar sign
you can use numbers, but they must follow one of the above
JavaScript is case sensitive- 'hello' and 'Hello' are different
*/

var a = 1;
var b = 2;
console.log(a + b);//3

/*
DECLARATIONS

Declarations are the LEFT SIDE of a variable
It is simply the var a 
It is on the left side of the assignment operator

Initializations are the RIGHT SIDE of a variable 
Set the value of the variable
Includes the variables name (x), the assignment operator (=), and the value 
*/

var x;
console.log('Declaration, x'); 

x = 10;
console.log('Initialization 1:' , x );

x = 33;
console.log('Initialization 2:',x);

/*
Var, Let, and Const:
var = 'old' js keyword for variables
let = 'new' keyword for variables (introduced in ES6)
const = also 'new'; declares unchangable variables
*/

let today = 'Great!';
const elevenFifty = 'Wonderful!';
console.log(today, elevenFifty);

today = "lovely!";
console.log(today,elevenFifty);
