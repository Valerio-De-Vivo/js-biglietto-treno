var km = parseInt(prompt('Quanti km vuoi percorrere?'));
var eta = parseInt(prompt('Quanti anni hai?'));


// CALCOLO PREZZO BIGLIETTO
var prezzo = km * 0.21;


// CALCOLO SCONTO BIGLIETTO

if (eta < 18) {
    prezzo -= prezzo * 20 / 100;
} else if ( eta > 65) {
    prezzo -= prezzo * 40 / 100;
}

console.log(prezzo);
