// Importa o módulo 'fs' (file system) que permite ler arquivos e entradas padrão
let fs = require('fs');

// Lê toda a entrada padrão (stdin).
// Em seguida, converte para string, remove espaços extras com trim()
// e separa as linhas em um array usando split('\n')
let data = fs.readFileSync(0, 'utf8').trim().split('\n');

// recebe o valor em dias
let dias = parseInt(data[0]);

// declara o valor de horas e minutos.
let anos = 0;
let meses = 0;

// Faz o calculo para saber quantas anos tem no dias digitado
while (dias >= 365) {
    anos = anos + 1
    dias = dias - 365
}

// Faz o calculo para saber quantas meses tem nos dias restante
while (dias >= 30 ) {
    meses = meses + 1
    dias = dias - 30
}

// Escreve as informacoes na tela
console.log(anos + " ano(s)")
console.log(meses + " mes(es)")
console.log(dias + " dia(s)")