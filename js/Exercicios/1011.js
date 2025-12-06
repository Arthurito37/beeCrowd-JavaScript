// Importa o módulo 'fs' (file system) que permite ler arquivos e entradas padrão
let fs = require('fs');

// Lê toda a entrada padrão (stdin).
// Em seguida, converte para string, remove espaços extras com trim()
// e separa as linhas em um array usando split('\n')
let data = fs.readFileSync(0, 'utf8').trim().split('\n');

// valor de PI
let pi =3.14159;

// recebe o valor do raio
let raio = parseFloat(data[0])

// Faz o calculo do volume da esfera
let volume = ((4.0/3.0 * pi * (raio * raio * raio)));

// Escreve no console a resposta
console.log("VOLUME = " + volume.toFixed(3))
