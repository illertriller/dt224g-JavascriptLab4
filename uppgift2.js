/* Uppgift 2 av Martin Sohlberg, 2026 */
"use strict";

const pris = 100;
const antal = 3;

const summa = pris * antal;
const summaMedSkatt = summa * 1.25;

console.log("Pris: " + pris + " kr");
console.log("Antal: " + antal);
console.log("Totalt: " + summa + " kr");
console.log("Totalt inklusive moms: " + summaMedSkatt + " kr");