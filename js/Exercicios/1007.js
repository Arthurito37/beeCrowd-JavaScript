// Importa o módulo 'fs' (file system) que permite ler arquivos e entradas padrão
let fs = require('fs');

// Lê toda a entrada padrão (stdin).
// Em seguida, converte para string, remove espaços extras com trim()
// e separa as linhas em um array usando split('\n')
let data = fs.readFileSync(0, 'utf8').trim().split('\n');

// Declara a variavel que armazena o primeiro numero
let A = parseFloat(data[0]);

// Declara a variavel que armazena o segundo numero
let B = parseFloat(data[1]);

// Declara a variavel que armazena o terceiro numero
let C = parseFloat(data[2]);

// Declara a variavel que armazena o quarto numero
let D = parseFloat(data[3]);

// Declara a variavel do A multiplicado por B
let PROD1 = A * B;

// Declara a variavel do C multiplicado por D
let PROD2 = C * D;

// Declara a variavel
let DIFERENCA = (A * B - C * D);

// Mostra no console a informacao
console.log("DIFERENCA = " + DIFERENCA);
