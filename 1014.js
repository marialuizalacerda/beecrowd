var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let X = parseFloat(lines.shift());
let Y = parseFloat(lines.shift());

let result = (X / Y);
console.log(result.toFixed(3) + " km/l");