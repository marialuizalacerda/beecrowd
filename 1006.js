var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

const result = (A * 2 + B * 3 + C * 5) / 10;

console.log("MEDIA = "+ result.toFixed(1));