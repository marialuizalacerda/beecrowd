var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valor = parseFloat(lines)

const notas = [100, 50, 20, 10, 5, 2]
const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01]

console.log('NOTAS:')

for (let nota of notas) {
  let qtdNotas = Math.floor(valor / nota)
  console.log(`${qtdNotas} nota(s) de R$ ${nota.toFixed(2)}`)
  valor = valor % nota
}

console.log('MOEDAS:')

for (let moeda of moedas) {
  let qtdMoedas = Math.floor(valor / moeda)
  valor = valor % moeda + 0.00001
  console.log(`${qtdMoedas} moeda(s) de R$ ${moeda.toFixed(2)}`)
}
