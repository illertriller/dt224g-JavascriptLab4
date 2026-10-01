/* Lösning till uppgift 8, av Martin Sohlberg 2026 */
"use strict";

// detta beskriver en bok. Titel, författare och år.
let bok = {
    titel: "Atlas shrugged",
    författare: "Ayn Rand",
    utgivningsår: 1957
};

// Skriver ut datan från föregående del.
function printBok(bok) {
    console.log("Titel: " + bok.titel);
    console.log("Författare: " + bok.författare);
    console.log("Utgivningsår: " + bok.utgivningsår);
}

// Anropar funktionen med boken
printBok(bok);