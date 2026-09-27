/* Uppgift 2 av Martin Sohlberg, 2026 */
"use strict";

// Priset och antal i två variabler
const pris = 100;
const antal = 3;

// Beräknar totalsumman och totalsumma inklusive skatt 25%
const summa = pris * antal;
const summaMedSkatt = summa * 1.25;

// Output, skriver ut resultatet i terminalen
console.log("Pris: " + pris + " kr");
console.log("Antal: " + antal);
console.log("Totalt: " + summa + " kr");
console.log("Totalt inklusive moms: " + summaMedSkatt + " kr");