// Importa o módulo 'fs' (file system) que permite ler arquivos e entradas padrão
let fs = require('fs');

// Lê toda a entrada padrão (stdin).
// Em seguida, converte para string, remove espaços extras com trim()
// e separa as linhas em um array usando split('\n')
let data = fs.readFileSync(0, 'utf8').trim().split('\n');

// Declara a variavel que armazena o peso1
let peso1 = 3.5;

// Declara a variavel que armazena o peso2
let peso2 = 7.5;

// Soma os dois pesos
let C = peso1 + peso2;

// Converte a primeira linha da entrada para inteiro e armazena em A
let A = parseFloat(data[0]);


// Atribui peso1 a nota 1
A = A * peso1;

// Converte a segunda linha da entrada para inteiro e armazena em B
let B = parseFloat(data[1]);

// Atribui peso 2 a nota 2
B = B * peso2;

// Faz o calculo da meida
let MEDIA = ((A + B)/C);

// Coloca o valor na tela com cinco casas decimais
console.log("MEDIA = " + MEDIA.toFixed(5));
