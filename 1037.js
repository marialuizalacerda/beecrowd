var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(Number);

function verificarIntervalo (valor) {
  if(valor >= 0 && valor <= 25) {
    return `Intervalo [0,25]`
  }
  if(valor > 25 && valor <= 50) {
    return `Intervalo (25,50]`
  }
  if(valor > 50 && valor <= 75) {
    return `Intervalo (50,75]`
  }
  if(valor > 75 && valor <= 100) {
    return `Intervalo (75,100]`
  }
  else {
    return`Fora de intervalo`
  }
}

console.log(verificarIntervalo(lines))