console.log('Chapter Arrays!, first data structure');
console.log('Chapter Arrays!, group data in a list!');

// // 6 most important Array methods
// // push and pop adds and deletes at the end of the Arrays
// // shift and unshift adds and deletes at the front of an Arrays
// // unshift = add !
// // shift = delete!
// // indexOf
// // slice
// var nums = [34, 23, 33, 12];

// // 2 dimension Arrays:

// var friends = [
//     ["harry", "hermoine", "arthur"],
//     ["bert", "ernie", "waldo"],
//     ["cheezs", "tjong", "ellen"]
// ]
// // [2] = laatste rij, [1] = tjong
// console.log(friends[2][1]);

// VERSION 1.0
// new - Add a todo 
// list - view all todo
// quit - quit app
// var toDoList = [];

// while (question !== "quit") {
//     var question = prompt("what would you like to do?");
//     if (question === 'new') {
//         toDoList.push(prompt('add a new todo'));
//     } else if (question === 'list') {
//         console.log(toDoList);
//     } else {
//         question = 'quit';
//         console.log('OK, you quite the app');
//     }
// }

// VERSION 2.0
// new - Add a todo 
// list - view all todo
// delete - delete an item
// quit - quit app
// var toDoList = [];
var toDoList = [];

while (question !== "quit") {
    var question = prompt("what would you like to do?");
    if (question === 'new') {
        toDoList.push(prompt('add a new todo'));
    } else if (question === 'list') {
        toDoList.forEach(function (toDoList, index) {
            console.log('************')
            console.log(index + ': ' + toDoList)
            console.log('************')
        })
    } else if (question === 'delete') {


    } else {
        question = 'quit';
        console.log('OK, you quite the app');
    }
}