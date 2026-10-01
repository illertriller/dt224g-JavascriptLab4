/* Lösning för uppgift 9, av Martin Sohlberg */
"use strict";

// Array med tre personer och uppgifter.
const people = [
    { name: "Linus", age: 18, city: "Uddevalla" },
    { name: "Sanna", age: 17, city: "Trollhättan"},
    { name: "Per", age: 64, city: "Vänersborg"},
];

// Skriver ut namn, stad och om personen är myndig.
function printPerson(person) {
    if (person.age >= 18) {         // kollar om personen är myndig
        console.log(person.name + " bor i " + person.city + " och är myndig.");
    } else {                        // om personen inte är myndig skrivs detta ut
        console.log(person.name + " bor i " + person.city + " och är inte myndig.");
    }
}
// Går igenom alla personer i arrayen
for (let i = 0; i < people.length; i++) {
    printPerson(people[i]);
}