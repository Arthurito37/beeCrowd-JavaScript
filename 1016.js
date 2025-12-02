// Importa o módulo 'fs' (file system) que permite ler arquivos e entradas padrão
let fs = require('fs');

// Lê toda a entrada padrão (stdin).
// Em seguida, converte para string, remove espaços extras com trim()
// e separa as linhas em um array usando split('\n')
let data = fs.readFileSync(0, 'utf8').trim().split('\n');

// recebe a distancia
let km = parseInt(data[0]);


// calculo do tempo que Y leva para chegar essa distancia de X
T = km * 2;

// escreve no console o tempo que Y leva para chegar a essa distancia de X
console.log(T + " minutos")


