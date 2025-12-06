// Importa o módulo 'fs' (file system) que permite ler arquivos e entradas padrão
let fs = require('fs');

// Lê toda a entrada padrão (stdin). No Beecrowd, 0 significa stdin.
// Em seguida, converte para string, remove espaços extras com trim()
// e separa as linhas em um array usando split('\n')
let data = fs.readFileSync(0, 'utf8').trim().split('\n');

// armazena o valor digitado pelo usuario na variavel raio tipo float
let raio = parseFloat(data[0]);

// declara o valor de pi na variavel n do tipo float
let n = parseFloat(3.14159);

// Encontra o valor da area do circulo
let area = n * (raio * raio);

// Imprime o resultado da area do circulo com quatro casas decimais
console.log("A=" + area.toFixed(4));
