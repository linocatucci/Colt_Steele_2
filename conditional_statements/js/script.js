console.log('het werkt!!')
/*
var age = 16;

if (age < 0) {
    console.log('Hey, your age is a negative number!');
} else if (age === 21) {
    console.log('Happy birthday!')
} else if (age % 2 === 0) {
    console.log('your age is a odd number');
} else if ((age > 0) && (Math.sqrt(age) % 1 === 0)) {
    console.log('your age is a perfect square!')
} else {
    console.log('voldoet aan geen van de voorwaarden');
}
*/

// WHILE LOOPS
/*
// create secret number
// ask user for guess
// check guess
var secretNumber = 4;
var guessed = false;
var stringGuess //= prompt('guess a number: ');
var guess = Number(stringGuess);

while (!guessed) {
    if (guess === secretNumber) {
        alert('you got it right');
        guessed = true;
    } else if (guess > secretNumber) {
        alert('the number is too high!');
        break;
    } else {
        alert('the number is too low!');
        break;
    }
}
*/

/*
console.log('PRINT ALL NUMBERS BETWEEN -10 AND 19');
var number = -10;

while (number <= 19) {
    console.log(number);
    number += 1;
}
console.log('PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40');
var number1 = 10;
while (number1 >= 10 && number1 <= 40) {
    if (number1 % 2 === 0) {
        console.log(number1);
    }
    number1 += 1;
}
console.log('PRINT ALL ODD NUMBERS BETWEEN 300 AND 300');
var number2 = 300;
while (number2 >= 300 && number2 <= 330) {
    if (number2 % 2 !== 0) {
        console.log(number2);
    }
    number2 += 1;
}
console.log('PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50');
var number3 = 5;
while (number3 >= 5 && number3 <= 50) {
    if ((number3 % 5 === 0) && (number3 % 3 === 0)) {
        console.log(number3);
    }
    number3 += 1;
}

*/
// version 1
// var answer = prompt('Are we there yet!?!?');
// while (answer !== "yes" && answer !== "yeah") {
//     var answer = prompt('Are we there yet!?!?');
// }
// alert('Yay, we finally made it!')

// Bonus 
// version 2
// var answer = prompt('Are we there yet!?!?');
// while (answer.indexOf('yes') === -1 && answer.indexOf('yeah') === -1) {
//     var answer = prompt('Are we there yet!?!?');
// }
// alert('Yay, we finally made it!')

// FOR LOOPS
//1
console.log('PRINT NRS TUSSEN -10 EN 19');
for (var i = -10; i <= 19; i++) {

    console.log(i);
}
//2
console.log('PRINT ALLE EVEN NRS TUSSEN 10 EN 40');
for (var i = 10; i <= 40; i++) {
    if (i % 2 === 0) {

        console.log(i);
    }
}
//3
console.log('PRINT ALLE ONEVEN NRS TUSSEN 300 EN 333');
for (var i = 300; i <= 333; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
//4
console.log('PRINT ALLE DEELBARE NRS (5 EN 3) TUSSEN 5 EN 50');
for (var i = 5; i <= 50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {

        console.log(i);
    }
}
