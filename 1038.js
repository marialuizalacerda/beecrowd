var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const codigo = lines[0].split(' ')[0]
const quantidade = lines[0].split(' ')[1]
let preco

if (codigo == 1) {
  preco = 4.0
}else if (codigo == 2) {
  preco = 4.50
}else if (codigo == 3) {
  preco = 5.0
}else if (codigo == 4) {
  preco = 2.0
}else if (codigo == 5) {
  preco = 1.5
}
const valorTotal = preco * quantidade

console.log(`Total: R$ ${valorTotal.toFixed(2)}`)
