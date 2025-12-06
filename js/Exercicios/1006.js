// Importa o módulo 'fs' (file system) que permite ler arquivos e entradas padrão
let fs = require('fs');

// Lê toda a entrada padrão (stdin).
// Em seguida, converte para string, remove espaços extras com trim()
// e separa as linhas em um array usando split('\n')
let data = fs.readFileSync(0, 'utf8').trim().split('\n');

// Declara a variavel que armazena o peso1
let peso1 = 2;

// Declara a variavel que armazena o peso2
let peso2 = 3;

// Declara a variavel que armazena o peso2
let peso3 = 5;

// Soma os dois pesos
let D = peso1 + peso2 + peso3;

// Converte a primeira linha da entrada para real e armazena em A
let A = parseFloat(data[0]);


// Atribui peso1 a nota 1
A = A * peso1;

// Converte a segunda linha da entrada para real e armazena em B
let B = parseFloat(data[1]);

// Atribui peso 2 a nota 2
B = B * peso2;

// Converte a terceira linha de entrada para real e armazena em C

let C = parseFloat(data[2]);

// Atribui peso 3 a nota 3
C = C * peso3;

// Faz o calculo da meida
let MEDIA = ((A + B + C)/D);

// Coloca o valor na tela com uma casas decimais
console.log("MEDIA = " + MEDIA.toFixed(1));
