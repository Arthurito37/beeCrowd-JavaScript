// Importa o módulo 'fs' (file system) que permite ler arquivos e entradas padrão
let fs = require('fs');

// Lê toda a entrada padrão (stdin). No Beecrowd, 0 significa stdin.
// Em seguida, converte para string, remove espaços extras com trim()
// e separa as linhas em um array usando split('\n')
let data = fs.readFileSync(0, 'utf8').trim().split('\n');

// Converte a primeira linha da entrada para inteiro e armazena em A
let A = parseInt(data[0]);

// Converte a segunda linha da entrada para inteiro e armazena em B
let B = parseInt(data[1]);

// Soma os valores de A e B e armazena o resultado em X
let SOMA = A + B;

// Imprime o resultado exatamente no formato exigido:
// "soma = valor"
// incluindo o espaço antes e depois do "="
console.log("SOMA = " + SOMA);
