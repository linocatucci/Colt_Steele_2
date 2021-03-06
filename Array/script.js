console.log('Chapter Arrays!, first data structure');
console.log('Chapter Arrays!, group data in a list!');

// // 6 most important Array methods
// // push and pop adds and deletes at the end of the Arrays
// // shift and unshift adds and deletes at the front of an Arrays
// // unshift = add !
// // shift = delete!
// // indexOf
// // slice
// // splice
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
// var toDoList = [];

// while (question !== "quit") {
//     var question = prompt("what would you like to do?");
//     if (question === 'new') {
//         addTodos();
//     } else if (question === 'list') {
//         listTodos();
//     } else if (question === 'delete') {
//         deleteTodos();
//     } else {
//         question = 'quit';
//         console.log('OK, you quit the app');
//     }
// }

// function addTodos() {
//     var addNewItem = toDoList.push(prompt('add a new todo'));
//     console.log(addNewItem + ' ' + ' added to the list');
// }

// function listTodos() {
//     toDoList.forEach(function (toDoList, index) {
//         console.log('************')
//         console.log(index + ': ' + toDoList)
//     })
//     console.log('************')
// }

// function deleteTodos() {
//     var index = prompt('index of todo to delete')
//     // ask for index of todo to be deleted
//     // delete that todo
//     toDoList.splice(index, 1);
// }

// Array Problem set

// 1. printReverse()
// printReverse([1,2,3,4,5])
// 5, 4, 3, 2, ,1

// function printReverse(array) {
//     var index = array.length;
//     console.log(index)
//     array.forEach(function (element, index) {
//         console.log(element);
//         console.log(index + ' ' + element);
//         index--
//     })
// }

function printReverse(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}
printReverse([1, 2, 3, 4, 5]);

printReverse(['a', 'b', 'c', 'd']);

// isUniform()
//[1,1,1,1,1] =  true
// [2,1,1,1] = false
// 
// write a function isUniform which takes an array as argument and returns true
// if all elements in the array are identical
// variable in the loop with value of 1st element in the array and compare it with this element.
//

function isUniform(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (first !== arr[i]) {
            return false;
        }
    }
    return true;
}

var eersteCheck = isUniform([1, 1, 1, 1, 1, 1, 1]);
console.log(eersteCheck);

// sumArray, tel alle getallen op van de array/

function sumArray(arr) {
    var totaal = 0;
    arr.forEach(function (element) {
        totaal += element;
    })
    console.log(totaal);
}

sumArray([1, 2, 3]);

sumArray([5, 7, 2, 9, 3])