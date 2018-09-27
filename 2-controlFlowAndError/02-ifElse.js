/*
If Else
*/

weather = 75;

if (weather < 70){
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary!');
}

let name = 'alex'

if (name = 'alex'){
    console.log('Hello, my name is alex');
} else {
    console.log('Hello, what is your name?')
}

function name(string){
    return string.charAt(0). toUpperCase() + string.slice(1);
}
console.log(name('alex'));

let name = 'tYlEr';

if (name[0] == name[0].toUpperCase){
    firstLetter = name.slice(1).toLowerCase();
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetters);
}



let age = 21;

if(age < 18){
    console.log('Sorry, youre too young to do anything.')
} else if (age >= 18 && age <21){
    console.log('yay you can vote')
} else if (age >= 21 && age < 25){
    console.log('yay you can drink')
} else {
    console.log('yay you can rent a car')
}
