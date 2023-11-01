var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let totalDias = parseInt(lines);

let qtdAnos = parseInt(totalDias / 365)
totalDias = totalDias % 365

let qtdMeses = parseInt(totalDias / 30)
totalDias = totalDias % 30

qtdDias = parseInt(totalDias)

console.log(`${qtdAnos} ano(s)
${qtdMeses} mes(es)
${qtdDias} dia(s)`)