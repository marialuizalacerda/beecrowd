var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let raio = parseFloat(lines.shift());

let calcularRaio = (4/3.0 * 3.14159 * raio ** 3 );

console.log("VOLUME = " + calcularRaio.toFixed(3))