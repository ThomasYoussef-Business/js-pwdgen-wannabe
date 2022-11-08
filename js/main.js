const nomeUtente = prompt("Inserisci il tuo nome:");
const cognomeUtente = prompt("Inserisci il tuo cognome: ");
const colorePreferitoUtente = prompt("Inserisci il tuo colore preferito: ");


let numeroUno = prompt("Inserisci un numero: ");
while (isNaN(parseFloat(numeroUno))) {
    numeroUno = prompt("Quello non è un numero! Prova di nuovo: ");
}
numeroUno = parseFloat(numeroUno)

let numeroDue = prompt("Inserisci un'altro numero: ");
while (isNaN(parseFloat(numeroDue))) {
    numeroDue = prompt("Quello non è un numero! Prova di nuovo: ");
}
numeroDue = parseFloat(numeroDue)


console.log(`${nomeUtente}${cognomeUtente}${colorePreferitoUtente}${numeroUno/numeroDue}`);