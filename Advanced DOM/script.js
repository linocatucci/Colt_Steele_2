// Advanced DOM manipulation
// alert('are we connected')
// Events the process:
/*

1. We select an element and then add an event listener 

- listen for a click on this <button>

- listen for a hover event on the <h1></h1>

- listen for a keypress event on text input

The syntax:

to add a listner, we use a method called: addEventListner
*/
/*
element.addEventListner(type, functionToCall);

var button = document.querySelector('button');

button.addEventListner('click', function () {

    console.log('SOMEONE CLICKED THE BUTTON!')
})

document.querySelector('#myForm').addEventListener('submit', saveBookmark);
*/

// document.querySelector('#click').addEventListener('submit', function () {
//     alert('you clicked me!')
//     //document.body.style.backgroundColor = 'purple';
// });

var button = document.querySelector("#clicked");
var body = document.querySelector('body');
button.addEventListener("click", function () {
    // alert('clicked!')
    body.classList.toggle('make_purple');
});