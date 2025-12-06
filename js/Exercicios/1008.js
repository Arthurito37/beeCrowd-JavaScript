// Importa o módulo 'fs' (file system) que permite ler arquivos e entradas padrão
let fs = require('fs');

// Lê toda a entrada padrão (stdin).
// Em seguida, converte para string, remove espaços extras com trim()
// e separa as linhas em um array usando split('\n')
let data = fs.readFileSync(0, 'utf8').trim().split('\n');

// Le o numero do funcionario
let numero = parseInt(data[0]);

// Le o numero de horas trabalhadas
let horas = parseInt(data[1]);

// Le o valor da hora do funcionario
let valordahora = parseFloat(data[2]);

// Calculo do salario do funcionario
let salario = horas * valordahora;

// Escreve no console o numero do funcionario
console.log("NUMBER = " + numero);

// Escreve no console o salario o final do funcionario com duas casas decimais
console.log("SALARY = U$ " + salario.toFixed(2));