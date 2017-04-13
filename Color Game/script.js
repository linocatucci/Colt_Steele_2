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
var colors = [
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 255, 255)',
    'rgb(0, 0, 255)',
    'rgb(255, 0, 255)'
];

// "array" of squares which has the class .squares added.
var squares = document.querySelectorAll('.square');
// hard code a picked color from the array
var pickedColor = pickedColor();

// add the picked color to the display
// give the ColorDisplay color the same color as the pickedColor
var ColorDisplay = document.querySelector('#displayColor');
ColorDisplay.textContent = pickedColor;

// select the span message
var messageDisplay = document.querySelector('#messageDisplay');

// add initial colors to squares
for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    // add eventlistners to squares
    squares[i].addEventListener('click', function () {

        // grab color of clicked square
        var clickedColor = this.style.background;
        console.log(clickedColor);

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'You Won!'
            setWinningColor(clickedColor);
        } else {
            this.style.background = '#232323';
            messageDisplay.textContent = 'Try again';
        }
    })
}

// when you selected the correct color all squares should get this color
function setWinningColor(color) {

    for (var i = 0; i < squares.length; i++)
        squares[i].style.background = color;
}

function pickedColor() {
    // create a random nr between 0-5
    // pick the nr corresponding in the colors array
    var randomNR = Math.floor(Math.random() * colors.length);
    console.log(colors[randomNR]);
    return colors[randomNR]
}