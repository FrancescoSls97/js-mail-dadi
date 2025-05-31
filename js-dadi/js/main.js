// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Tramite due variabili date da math.random si ottengono due numeri da 1 a 6, moltiplicando il risultato * 6 e aggiungendo +1 in modo da non ottenere un numero fisso tra 1 o 0 come farebbe di norma Math.random
// Utilizzare Math.floor per arrotondare il risultato per difetto a un numero intero
// Confronto dei valori tramite un if

let player_dice = Math.floor(Math.random(1, 6) * 6) + 1;
let cpu_dice = Math.floor(Math.random(1, 6) * 6) + 1;

console.log("Player Result " + player_dice);
console.log("CPU Result " + cpu_dice);

if (player_dice > cpu_dice) {
  console.log("Player Wins");
} else if (cpu_dice === player_dice) {
  console.log("Draw");
} else console.log("CPU Wins");
