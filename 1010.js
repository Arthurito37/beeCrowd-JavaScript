// Importa o módulo 'fs' (file system) que permite ler arquivos e entradas padrão
let fs = require('fs');

// Lê toda a entrada padrão (stdin).
// Em seguida, converte para string, remove espaços extras com trim()
// e separa as linhas em um array usando split('\n')
let data = fs.readFileSync(0, 'utf8').trim().split('\n');

let linha1 = data[0].split(' ');
let linha2 = data[1].split(' ');


// Le o codigo da roupa 1
let roupaCodigo1 = parseInt(linha1[0]);

// Le o numero de roupas 1 
let numero1 = parseInt(linha1[1]);

// Le o preco da roupa 1
let precoRoupa1 = parseFloat(linha1[2])

// Faz o calculo do valor total da roupas 1
let total1 = numero1 * precoRoupa1;

// Le o codigo da roupa 2
let roupaCodigo2 = parseInt(linha2[0]);

// Le o numero de roupas 2 
let numero2 = parseInt(linha2[1]);

// Le o preco da roupa 2
let precoRoupa2 = parseFloat(linha2[2])

// Faz o calculo do valor total da roupas 
let total2 = numero2 * precoRoupa2;

// Faz o calculo do valor da compra
let valorFinal = total1 + total2;

// Escreve no console o valor das vendas
console.log("VALOR A PAGAR : R$ " + valorFinal.toFixed(2))


