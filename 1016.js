var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const entrada = parseFloat(lines.shift())


const resultado = (60 * entrada) / 30

console.log(`${resultado} minutos`)