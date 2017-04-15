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
var numSquares = 6;
var colors = [];
// hard code a picked color from the array
var pickedColor;
// "array" of squares which has the class .squares added.
var squares = document.querySelectorAll('.square');
// add the picked color to the display
// give the ColorDisplay color the same color as the pickedColor
var ColorDisplay = document.querySelector('#displayColor');
// select the span message
var messageDisplay = document.querySelector('#messageDisplay');
// select the h1 to give it full color after correct click
var h1 = document.querySelector('.h1-class');
var newGame = document.querySelector('.btn_newGame');
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
    // mode buttons event listeners
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function () {
            modeButtons[0].classList.remove('selected')
            modeButtons[1].classList.remove('selected')
            this.classList.add('selected');
            // this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
            if (this.textContent === 'Easy') {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset();
            // figure out how many squares to show
            // pick new colors
            // pick a new pickedColor
            // update page to reflect changes

        });
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        // add eventlistners to squares
        squares[i].addEventListener('click', function () {

            // grab color of clicked square
            var clickedColor = this.style.background;
            console.log(clickedColor);

            if (clickedColor === pickedColor) {
                messageDisplay.textContent = 'You Won!'
                h1.style.background = clickedColor;
                setWinningColor(clickedColor);
                newGame.textContent = 'Play Again?';
            } else {
                this.style.background = '#232323';
                messageDisplay.textContent = 'Try again';
            }
        })
    }

}

function reset() {
    // generate all new colors
    colors = generateRandomColors(numSquares);

    // pick a new random color from the array
    pickedColor = pickedColorF();
    // change the display color in new picked color
    ColorDisplay.textContent = pickedColor;
    newGame.textContent = 'New colors?';
    messageDisplay.textContent = '';
    // change the colors of squares / add initial colors to squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.background = colors[i];
        } else {
            // if there are no colors in the array (after 3)
            // then display is none hide the bottom 3 squeres
            squares[i].style.display = 'none';
        }
        h1.style.background = "steelblue";
    }
}

newGame.addEventListener('click', function () {
    reset();
})

// when you selected the correct color all squares should get this color
function setWinningColor(color) {

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickedColorF() {
    // create a random nr between 0-5
    // pick the nr corresponding in the colors array
    var randomNR = Math.floor(Math.random() * numSquares);
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
    // pick a blue from 0 - 255
    var randomBlue = Math.floor(Math.random() * 256);

    var randomColorCode = 'rgb(' + randomRed + ', ' + randomGreen + ', ' + randomBlue + ')';
    return randomColorCode;
}



// easyBtn.addEventListener('click', function () {
//     numSquares = 3;
//     easyBtn.classList.toggle('selected');
//     hardBtn.classList.toggle('selected');
//     // generate all new colors
//     colors = generateRandomColors(numSquares);
//     // pick a new random color from the array
//     pickedColor = pickedColorF();
//     // change the display color in new picked color
//     ColorDisplay.textContent = pickedColor;
//     // if there is a color generated or assigned generateRandomColors(3) then add the colors to the squares
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.background = colors[i];
//         } else {
//             // if there are no colors in the array (after 3)
//             // then display is none hide the bottom 3 squeres
//             squares[i].style.display = 'none';
//         }
//     }
//     h1.style.background = "steelblue";
//     messageDisplay.textContent = '';
// })

// hardBtn.addEventListener('click', function () {
//     numSquares = 6;
//     hardBtn.classList.toggle('selected');
//     easyBtn.classList.toggle('selected');
//     colors = generateRandomColors(6);

//     // generate all new colors
//     colors = generateRandomColors(numSquares);
//     // pick a new random color from the array
//     pickedColor = pickedColorF();
//     // change the display color in new picked color
//     ColorDisplay.textContent = pickedColor;
//     // if there is a color generated or assigned generateRandomColors(3) then add the colors to the squares
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.display = 'block';
//         squares[i].style.background = colors[i];
//     }
//     h1.style.background = "steelblue";
//     messageDisplay.textContent = '';
// })