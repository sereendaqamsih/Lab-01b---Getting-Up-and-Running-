'use strict';
// let num1 = parseInt(prompt('How many books you read in month?');

let num1 = parseInt (prompt('How many books you read in month?')); 
document.write(`<span >Welcome, you read ${num1} books</span>`);
console.log ('How many books you read in month?');
console.log ('user enter number'+num1);

let numbook = prompt( 'Anytype of books did you prefer? novels or politcal?');
document.write(`<span > and you prefer ${numbook}</span>`);
console.log('Anytype of books did you prefer? novels or politcal?');
console.log (numbook);

let name1 = prompt('Tell me the name of your favourite book?');
document.write(`<span >  your favourite book is ${name1}</span>`);
console.log('Tell me the name of your favourite book?');
console.log(name1);

let type =prompt('Did you prefer to listen to the books or read ? ');
document.write(`<span > and you prefer to ${type}</span>`);
console.log('Did you prefer to listen to the books or read ? ');
console.log (type);
alert (' Welcome, you read '+num1+ ' books' +' and you prefer '+numbook+' your favourite book is '+name1+' and you prefer to '+type );

