// 10 random products with ten random prices
/*
var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

*/

var faker = require('faker/locale/en_US');

console.log('=====================');
console.log('WELCOME TO MY SHOP');
console.log('=====================');
for (var i = 0; i <= 10; i++) {

    var randomProductName = faker.commerce.productName();
    var randomPrice = faker.commerce.price();
    console.log(randomProductName + ' - $' + randomPrice);
}