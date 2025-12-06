// Importa o módulo 'fs' (file system) que permite ler arquivos e entradas padrão
let fs = require('fs');

// Lê toda a entrada padrão (stdin).
// Em seguida, converte para string, remove espaços extras com trim()
// e separa as linhas em um array usando split('\n')
let data = fs.readFileSync(0, 'utf8').trim().split('\n');

// recebe o valor em reais
let valorTotal = parseInt(data[0]);

// informa o valor total digitado
console.log(valorTotal);

// declara o valor das notas
let notaDe100 = 0;
let notaDe50 = 0;
let notaDe20 = 0;
let notaDe10 = 0;
let notaDe5 = 0;
let notaDe2 = 0;
let notaDe1 = 0;

// faz a logica de quantas vezes o valorTotal cabe em notas de 100
while (valorTotal >= 100) {
    valorTotal = valorTotal - 100
    notaDe100 = notaDe100 + 1
}

// faz a logica de quantas vezes o valorTotal cabe em notas de 50
while (valorTotal >= 50) {
    valorTotal = valorTotal - 50
    notaDe50 = notaDe50 + 1
}

// faz a logica de quantas vezes o valorTotal cabe em notas de 20
while (valorTotal >= 20) {
    valorTotal = valorTotal - 20
    notaDe20 = notaDe20 + 1
}

// faz a logica de quantas vezes o valorTotal cabe em notas de 10
while (valorTotal >= 10) {
    valorTotal = valorTotal - 10
    notaDe10 = notaDe10 + 1
}

// faz a logica de quantas vezes o valorTotal cabe em notas de 5
while (valorTotal >= 5) {
    valorTotal = valorTotal - 5
    notaDe5= notaDe5 + 1
}

// faz a logica de quantas vezes o valorTotal cabe em notas de 2
while (valorTotal >= 2) {
    valorTotal = valorTotal - 2
    notaDe2 = notaDe2 + 1
}

// faz a logica de quantas vezes o valorTotal cabe em notas de 1
while (valorTotal >= 1) {
    valorTotal = valorTotal - 1
    notaDe1 = notaDe1 + 1
}

// informa o valor de nota de 100
console.log(notaDe100 + " nota(s) de R$ 100,00"); 

// informa o valor de nota de 50
console.log(notaDe50 + " nota(s) de R$ 50,00"); 

// informa o valor de nota de 20
console.log(notaDe20 + " nota(s) de R$ 20,00"); 

// informa o valor de nota de 10
console.log(notaDe10 + " nota(s) de R$ 10,00"); 

// informa o valor de nota de 5
console.log(notaDe5 + " nota(s) de R$ 5,00"); 

// informa o valor de nota de 2
console.log(notaDe2 + " nota(s) de R$ 2,00"); 

// informa o valor de nota de 1
console.log(notaDe1 + " nota(s) de R$ 1,00"); 

