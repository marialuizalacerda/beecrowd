var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [tempoGasto, velocidadeMedia] = lines

const totalPercorrido = tempoGasto * velocidadeMedia
const qtdCombustivelGasto = totalPercorrido / 12

console.log(qtdCombustivelGasto.toFixed(3))