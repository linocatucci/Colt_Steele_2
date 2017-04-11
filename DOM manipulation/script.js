//DOM selectors:
/*
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()
*/

// come up with 4 different ways to select the firt <p></p> tag

var version1 = document.getElementById('first').innerHTML;
var version3 = document.querySelector('#first').textContent;
var version3a = document.querySelector('#first');
var version5 = document.getElementsByClassName('special')[0];
var version2 = document.querySelector('p');
var version6 = document.querySelectorAll('.special')[0];
var version4 = document.querySelector('.special');

console.log(version1);
console.log(version2);
console.log(version3);
console.log(version3a);
console.log(version4);
console.log(version5);
console.log(version6);

// changing style with the style property

// srcset
// logo.setAttribute('srcset', 'http://www.eastcottvets.co.uk/uploads/animals/gingerkitten.jpg');