var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let infoItem1 = lines.shift().split(" ");
let infoItem2 = lines.shift().split(" ");

let idItem1 = infoItem1.shift();
let qtdItem1 = infoItem1.shift(); ;
let ValorUnitarioItem1  = infoItem1.shift();
let ValorTotalItem1 = qtdItem1 * ValorUnitarioItem1;

let idItem2 = infoItem2.shift();
let qtdItem2 = infoItem2.shift(); ;
let ValorUnitarioItem2  = infoItem2.shift();
let ValorTotalItem2 = qtdItem2 * ValorUnitarioItem2;


let valorTotalCompra = ValorTotalItem1 + ValorTotalItem2;

console.log("VALOR A PAGAR: R$ " + valorTotalCompra.toFixed(2));


