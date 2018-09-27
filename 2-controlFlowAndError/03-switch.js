let friend; 'Alex'

switch (friend) {
    case 'Tom':
    console.log('Hey Tom, when are you rockclimbing?');
    break;
    case 'Ken':
    console.log('Hey Kenn, wanna play Catan?');
    break;
    case 'Carolyn':
    console.log('Hey Carolyn, why you leavin us?');
    break;
    default:
    console.log(`Im sorry, ${friend}, but do I know you?`)
}

let dessert = 'pizza';

switch (dessert) {
    case 'pie':
    console.log('pie, pie, me oh my!');
    break;
    case 'ice cream':
    console.log('I scream for ice cream!');
    break;
    case 'cake':
    console.log('Cake is great!')
    break;
    default:
    console.log(`Not on the menu`)
}


let yep = -8;

switch (true){
    case (yep < 0 && yep > -10):
    console.log('worked');
    break;
    case (yep > 0):
    console.log('worked here!');
    break;
    default:
    console.log('didnt work');
}