var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let c = parseInt(lines.shift());
let d = parseInt(lines.shift());

const result = ( a * b - c * d);

console.log("DIFERENCA = " + result);