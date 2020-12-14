var km = parseInt(prompt('Quanti km vuoi percorrere?'));
var eta = parseInt(prompt('Quanti anni hai?'));


// MESSAGGIO PROMO ETA
var promo;


// CALCOLO PREZZO BIGLIETTO
var prezzo = km * 0.21;
promo = "Nessuno sconto disponibile";


// CALCOLO SCONTO BIGLIETTO

if (eta < 18) {
    prezzo -= prezzo * 20 / 100;
    promo = "Sconto del 20%";
} else if ( eta > 65) {
    prezzo -= prezzo * 40 / 100;
    promo= "Sconto del 40%";
}

// PREZZO SENZA DECIMALI

var price = prezzo.toFixed(2)

document.getElementById('price').innerHTML = price + "€";

document.getElementById('promo').innerHTML = promo;
