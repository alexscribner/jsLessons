/*
Intro to Arrays

have[] brakcets
can hold multiple datatypes
great for listing
*/

//overview/calling
let students = ['Tony','Marshall','Rhys','Ray', 23, true, ['Ryan', 'Iesha']];
 //index numbers  0        1       2       3    4    5       6       
console.log(typeof students);  //object
console.log(students[2]);
console.log(`Hello ${students[6][1]}, you look nice today.`);

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
// for(let i = 0; i < food.length; i++){
//     console.log(food[i]);
// }
// for (let f of food){
//     console.log(f);
// }

food.push('Pizza') //appends pizza to the end of the array
// console.log(food);
food.splice(1, 1, 'Bananas'); //first num: the index to start at, second num: number of things to remove, third num: replcaement value
//console.log(food);
food.splice(2, 0, 'Sweet Potato Pie');
//console.log(food);
food.pop();  //removes the last value