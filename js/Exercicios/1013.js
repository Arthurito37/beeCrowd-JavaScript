// Importa o módulo 'fs' (file system) que permite ler arquivos e entradas padrão
let fs = require('fs');

// Lê toda a entrada padrão (stdin).
// Em seguida, converte para string, remove espaços extras com trim()
// e separa as linhas em um array usando split('\n')
let data = fs.readFileSync(0, 'utf8').trim().split('\n');

// Pega a primeira linha da entrada (data[0]).
// Essa linha contém os três números separados por espaço, por exemplo: "7 14 106".
// O método split(' ') divide a string em partes usando o espaço como separador.
// Assim, o resultado é um array com cada valor separado: ["7", "14", "106"].
let valores = data[0].split(' ');

// recebe o valor de A do tipo inteiro
let A = parseInt(valores[0])

// recebe o valor do B do tipo inteiro
let B = parseInt(valores[1])

// recebe o valor do C do tipo inteiro
let C = parseInt(valores[2])

// variavel que faz o calculo do maior valor entre a e b.
let D = (A + B + Math.abs(A - B)) / 2

// variavel que encontra o maior valor entre AB e C
maiorValor = (D + C + Math.abs(D - C)) / 2

// escreve no console o maior valor
console.log(maiorValor + " eh o maior")