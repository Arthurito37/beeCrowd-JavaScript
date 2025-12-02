// Importa o módulo 'fs' (file system) que permite ler arquivos e entradas padrão
let fs = require('fs');

// Lê toda a entrada padrão (stdin).
// Em seguida, converte para string, remove espaços extras com trim()
// e separa as linhas em um array usando split('\n')
let data = fs.readFileSync(0, 'utf8').trim().split('\n');

// recebe o valor de X do tipo float correspondendo a distancia percorrida por KM
let X = parseFloat(data[0]);

// recebe o valor de Y do tipo float correspondendo ao combustivel gasto por litro
let Y = parseFloat(data[1]);

// formula que recebe o valor do consumo km/l
let Z = X / Y 
// escreve no console o consumo medio por automovel por com tres casas decimais seguido por km/l
console.log(Z.toFixed(3) + " km/l")

