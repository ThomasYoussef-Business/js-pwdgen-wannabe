const nomeUtente = prompt("Inserisci il tuo nome:");
const cognomeUtente = prompt("Inserisci il tuo cognome: ");
const colorePreferitoUtente = prompt("Inserisci il tuo colore preferito: ");

let numeroUno;
do {
    numeroUno = parseFloat(prompt("Inserisci il primo numero: "));
} while (isNaN(numeroUno) || numeroUno === 0)

let numeroDue;
do {
    numeroDue = parseFloat(prompt("Inserisci il secondo numero: "));
} while (isNaN(numeroDue) || numeroDue === 0)


console.log(`${nomeUtente}${cognomeUtente}${colorePreferitoUtente}${numeroUno/numeroDue}`);