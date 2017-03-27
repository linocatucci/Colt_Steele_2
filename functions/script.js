function doSomething() {
    console.log('hey hij doet iets');
}

doSomething();

function square(num) {
    console.log(num * num);
}

square(13);

function sayHello() {
    console.log('Hello!')
}

sayHello();

function sayHello(name) {
    console.log('Hello!' + ' ' + name)
}

sayHello('lino');
sayHello('rusty');

// return key word
// see slides

// problem 1: isEven() takes a single argument = number and check in the function
// if the number is even or not true / false

function isEven(number) {
    if (number % 2 === 0) {
        //console.log('true');
        return true;
    } else {
        //console.log('false')
        return false;
    }
}

var tien = isEven(10);
console.log(tien);
console.log(isEven(8));
isEven(5);
isEven(39);
isEven(33);
isEven(50);

// problem 2. : factorial(), take a number 4! = 4x3x2x1 = 24
// will do factorial 5, I'm sure you can figure out from there how to generalise it...

// var factorial = 1;
// for (i = 1; i <= 5; i++) {
//     factorial *= i;
//     console.log(factorial)
// }

function myFactorial(num) {
    var factorial = 1;
    for (i = 1; i <= num; i++) {
        factorial *= i;
        console.log(factorial);
    }
    console.log(factorial)
    return factorial;
}

var test5 = myFactorial(5);
var test6 = myFactorial(6);
var test8 = myFactorial(8);
var test10 = myFactorial(10);

// problem 3. kebabToSnake(), replace all - dashes with _ underscores in a word.

function kebabToSnake(string) {
    //string.replace(searchvalue, newvalue)
    newString = string.replace(/-/g, '_');
    return newString;
}

var word = kebabToSnake('bla-bla-bla');
console.log(word);