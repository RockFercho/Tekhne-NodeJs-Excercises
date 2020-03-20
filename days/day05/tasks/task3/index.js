let concat = require('./Concat');
let formatDate = require('./Format-Date');

let word1 = 'Hi';
let word2 = 'World';
let date = '2012-04-10';

console.log(concat.merge(word1, word2));

console.log(formatDate.converStringToDate(date));