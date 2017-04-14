// array of 6 colors

// "array" of squares which has the class .squares added.

// hard code a picked color from the array

// add the picked color to the display
// give the ColorDisplay color the same color as the pickedColor

// add initial colors to squares

// add eventlistners to squares

// grab color of clicked square

// compare color to pickedColor

// array of 6 colors
/*
= [
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 255, 255)',
    'rgb(0, 0, 255)',
    'rgb(255, 0, 255)'
];
*/
// generate 6 or whatever input it will be, random colors
var colors = generateRandomColors(6);

// "array" of squares which has the class .squares added.
var squares = document.querySelectorAll('.square');
// hard code a picked color from the array
var pickedColor = pickedColorF();

// add the picked color to the display
// give the ColorDisplay color the same color as the pickedColor
var ColorDisplay = document.querySelector('#displayColor');
ColorDisplay.textContent = pickedColor;

// select the span message
var messageDisplay = document.querySelector('#messageDisplay');
// select the h1 to give it full color after correct click
var h1 = document.querySelector('.h1-class');

var newGame = document.querySelector('.btn_newGame');
var easyBtn = document.querySelector('#easybtn');
var hardBtn = document.querySelector('#hardbtn');

easyBtn.addEventListener('click', function () {
    easyBtn.classList.toggle('selected');
    hardBtn.classList.toggle('selected');
})

hardBtn.addEventListener('click', function () {

    hardBtn.classList.toggle('selected');
    easyBtn.classList.toggle('selected');
})

newGame.addEventListener('click', function () {
    // generate all new colors
    newGame.textContent = 'New Color?'
    colors = generateRandomColors(6);

    // pick a new random color from the array
    pickedColor = pickedColorF();
    // change the display color in new picked color
    ColorDisplay.textContent = pickedColor;
    // change the colors of squares / add initial colors to squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "#232323";
    messageDisplay.textContent = '';
})

for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    // add eventlistners to squares
    squares[i].addEventListener('click', function () {

        // grab color of clicked square
        var clickedColor = this.style.background;
        console.log(clickedColor);

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'You Won!'
            h1.style.background = clickedColor;
            setWinningColor(clickedColor);
            newGame.textContent = 'Play Again?'
        } else {
            this.style.background = '#232323';
            messageDisplay.textContent = 'Try again';
        }
    })
}

// when you selected the correct color all squares should get this color
function setWinningColor(color) {

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickedColorF() {
    // create a random nr between 0-5
    // pick the nr corresponding in the colors array
    var randomNR = Math.floor(Math.random() * 6);
    return colors[randomNR];
}

function generateRandomColors(number) {

    // make an array
    var arr = [];
    for (var i = 0; i <= number - 1; i++) {
        // add num random colors to array: (255, 255, 255)
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor() {
    // pick a red from 0 - 255;
    var randomRed = Math.floor(Math.random() * 256);
    // pick a green from 0 - 255
    var randomGreen = Math.floor(Math.random() * 256);
    //     // pick a blue from 0 - 255
    var randomBlue = Math.floor(Math.random() * 256);

    var randomColorCode = 'rgb(' + randomRed + ', ' + randomGreen + ', ' + randomBlue + ')';
    return randomColorCode;
}