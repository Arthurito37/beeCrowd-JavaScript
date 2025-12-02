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

// recebe o valor de A
let A = parseFloat(valores[0])

// recebe o valor do B
let B = parseFloat(valores[1])

// recebe o valor do C
let C = parseFloat(valores[2])

// calcular a area do triangulo retangulo
let areaTrianguloRentagulo = ((A * C) / 2);

// declara o valor de pi
let pi =3.14159;

// calcular a area do circulo
let areaDoCirculo = pi * (C*C);

// calcular area do trapezio
let areaDoTrapezio = ((A + B) * C) / 2;

// calcula a area do quadrado
let areaDoQuadrado = B * B;

// calcula a area do retangulo
let areaDoRetangulo = A * B;

// Escreve no console a area do triangulo
console.log("TRIANGULO: " + areaTrianguloRentagulo.toFixed(3))

// Escreve no console a resposta
console.log("CIRCULO: " + areaDoCirculo.toFixed(3))

// Escreve no console a resposta
console.log("TRAPEZIO: " + areaDoTrapezio.toFixed(3))

// Escreve no console a resposta
console.log("QUADRADO: " + areaDoQuadrado.toFixed(3))

// Escreve no console a resposta
console.log("RETANGULO: " + areaDoRetangulo.toFixed(3))

