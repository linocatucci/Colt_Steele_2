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
var pickedColor = colors[3];
// add the picked color to the display
var colorDisplay = document.getElementById('colorDisplay');
// give the ColorDisplay color the same color as the pickedColor
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.background = colors[i];

    // add eventlistners to squares
    squares[i].addEventListener('click', function () {
        // grab color of clicked square
        clickedColor = this.style.background;
        // compare color to pickedColor
        if (clickedColor === pickedColor) {
            alert('You won!')
        } else {
            alert('wrong!')
        }
    });
}