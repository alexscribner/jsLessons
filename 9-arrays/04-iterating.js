//Iterating
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];


//food.forEach(f => {console.log(f)})
food.forEach((food, number) => {
    console.log(food);
    console.log(number);
})

let movies = ['Step Brothers', 'Black Panther', 'SuperBad', 'American Pie'];

movies.forEach((movies)=> {
    console.log(movies);
})
movies.push('Hush')
movies.splice(1, 1, 'Lost')
console.log(movies);

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let newArray = new Array(73);
console.log(newArray.length);
newArray.forEach(el => {
    console.log(el);
})
console.log(newArray);