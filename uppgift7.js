/* Lösning till uppgift 7, av Martin Sohlberg */
"use strict";

// Array som innehåller de tal som ska användas
let numbers = [1, 4, 9, 22, 14, 5];

// Summerar alla tal i arrayen
function summa(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];         // lägger till nästa tal i följden
    }
    return total;
}

console.log("Summan är " + summa(numbers));