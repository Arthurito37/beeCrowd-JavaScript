// Importa o módulo 'fs' (file system) que permite ler arquivos e entradas padrão
let fs = require('fs');

// Lê toda a entrada padrão (stdin).
// Em seguida, converte para string, remove espaços extras com trim()
// e separa as linhas em um array usando split('\n')
let data = fs.readFileSync(0, 'utf8').trim().split('\n');

// recebe o valor em segundos
let segundos = parseInt(data[0]);

// declara o valor de horas e minutos.
let horas = 0;
let minutos = 0;

// Faz o calculo para saber quantas horas tem no =segundos digitado
while (segundos >= 3600) {
    horas = horas + 1
    segundos = segundos - 3600
}

// Faz o calculo para saber quantas minutos tem no segundos restante
while (segundos >= 60 ) {
    minutos = minutos + 1
    segundos = segundos - 60
}

// Escreve no console as horas, minutos e segundos
console.log(horas + ":" + minutos + ":" + segundos)
