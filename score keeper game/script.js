var p1 = document.querySelector('#p1');
var p2 = document.getElementById('p2'); //just to mix the solutions up
var inputNr = document.querySelector('input');
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
var reset = document.querySelector('#reset');
var paragraph = document.querySelector('p');
var winningScoreDisplay = document.querySelector('p span');
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1.addEventListener('click', function () {
    if (!gameOver) {

        p1Score += 1;
        console.log(p1Score, winningScore)
        if (p1Score === winningScore) {
            console.log('GAME OVER!');
            gameOver = true;
            p1Display.classList.add('winning_color');
        }
        p1Display.textContent = p1Score;
    }
})
p2.addEventListener('click', function () {
    if (!gameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            console.log("GAME OVER!")
            gameOver = true;
            p2Display.classList.add('winning_color');
        }
        p2Display.textContent = p2Score;

    }
});

reset.addEventListener('click', function () {

    resetAll();

})

function resetAll() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove('winning_color');
    p2Display.classList.remove('winning_color');
    gameOver = false;
}

inputNr.addEventListener('change', function () {

    winningScoreDisplay.textContent = this.value;
    winningScore = parseInt(this.value);
    resetAll();
})