// Importa o módulo 'fs' (file system) que permite ler arquivos e entradas padrão
let fs = require('fs');

// Lê toda a entrada padrão (stdin).
// Em seguida, converte para string, remove espaços extras com trim()
// e separa as linhas em um array usando split('\n')
let data = fs.readFileSync(0, 'utf8').trim().split('\n');

// recebe o tempo gasto na viagem
let T = parseInt(data[0]);

// recebe a velocidade media da viagem
let KM = parseInt(data[1]);

// calcula a distancia
let Distancia = KM * T;

// calcula a quantidade de litros gastos
let litros =  Distancia / 12;

// escreve no log o resultado co0m tres casas decimais
console.log(litros.toFixed(3));