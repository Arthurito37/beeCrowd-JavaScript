// Importa o módulo 'fs' (file system) que permite ler arquivos e entradas padrão
let fs = require('fs');

// Lê toda a entrada padrão (stdin).
// Em seguida, converte para string, remove espaços extras com trim()
// e separa as linhas em um array usando split('\n')
let data = fs.readFileSync(0, 'utf8').trim().split('\n');


// Pega a primeira linha da entrada (data[0]).
// Essa linha contém os três números separados por espaço, por exemplo: "7 14 .
// O método split(' ') divide a string em partes usando o espaço como separador.
// Assim, o resultado é um array com cada valor separado: ["7", "14"].
let valoresLinha1 = data[0].split(' ');

// Pega a primeira linha da entrada (data[1]).
// Essa linha contém os três números separados por espaço, por exemplo: "7 14 ".
// O método split(' ') divide a string em partes usando o espaço como separador.
// Assim, o resultado é um array com cada valor separado: ["7", "14"].
let valoresLinha2 = data[1].split(' ');

// recebe o valor de p1x1
let x1 =  parseFloat(valoresLinha1[0]);

// recebe o valor de p1y1
let y1 = parseFloat(valoresLinha1[1]);

// recebe o valor de p2x2
let x2 = parseFloat(valoresLinha2[0]);

// recebe o valor de p2y2
let y2 = parseFloat(valoresLinha2[1]);

// calcula a distancia
let DISTANCIA = Math.sqrt((x2 - x1)*(x2 - x1) + (y2 - y1) * (y2 - y1));

console.log(DISTANCIA.toFixed(4));




