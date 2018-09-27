// Ternaries 

var x = 6;

(x > 0) ? console.log("x is greater than 0.") : console.log("x is not greater than 0")

if (x > 0) {
    console.log("greater")
} else {
    console.log("lesser")
}
let x = 10
(x == 0) ? console.log("x equals 0") : (x < 0) ? console.log("x is less than zero") : console.log("x is greater than 0")


let age = 26;

(age < 18) ? console.log('sorry youre too young to do anything') 
: (age >= 18 && age < 21) ? console.log('yay you can vote') 
: (age >= 21 && age < 25) ? console.log('yay you can drink') 
: console.log('yay you can rent a car')

let yep = -8;

(yep < 0 && yep > -10) ? console.log("yep is between 0 and 10") 
: (yep > 0) ? console.log("yep is greater 0") 
: console.log("yep is greater than 0")