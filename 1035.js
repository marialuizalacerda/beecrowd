var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const valores = lines[0].split(' ').map(Number)

function verificarValores(a, b, c, d) {
  if (b>c && d>a && (c+d)>(a+b) && c>0 && d>0 && a%2==0){
    console.log('Valores aceitos')
  }else{
    console.log('Valores nao aceitos')
  }

}

verificarValores(...valores)
//os 3 pontinhos ... representa cada posição do array , ao invés de passar valores[0], valores[1], valores[2], valores[3] 
