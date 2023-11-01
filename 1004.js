var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());

const result = a * b;

console.log("PROD = " + result);