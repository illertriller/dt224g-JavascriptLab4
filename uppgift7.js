/* Lösning till uppgift 7, av Martin Sohlberg */
"use strict";

let numbers = [1, 4, 9, 22, 14, 5];

function summa(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

console.log("Summan är " + summa(numbers));