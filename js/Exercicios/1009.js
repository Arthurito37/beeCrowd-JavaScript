// Importa o módulo 'fs' (file system) que permite ler arquivos e entradas padrão
let fs = require('fs');

// Lê toda a entrada padrão (stdin).
// Em seguida, converte para string, remove espaços extras com trim()
// e separa as linhas em um array usando split('\n')
let data = fs.readFileSync(0, 'utf8').trim().split('\n');

// Armazena o nome do funcionario em String
let nome = data[0];

// Armazena o salario fixo
let salario = parseFloat(data[1]);

// Armaneza total de vendas por mes em dinheiro
let vendas = parseFloat(data[2]);

// Calcula o salario do funcionario
let salarioBonus = salario + (0.15 * vendas);
// Escreve no console o numero do funcionario
console.log("TOTAL = R$ " + salarioBonus.toFixed(2));