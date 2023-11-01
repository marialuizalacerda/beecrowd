var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let idfuncionario = parseFloat(lines.shift());
let qthorasTrabalhadas = parseFloat(lines.shift());
let valorHora = parseFloat(lines.shift());

const salario = ( qthorasTrabalhadas * valorHora );

console.log("NUMBER = " + idfuncionario);
console.log("SALARY = U$ " + salario.toFixed(2));