// Estruturas de Repetição | Laços Condicionais

// Laços condicionais
console.clear

const input = require ('readline-sync')

const numeroSorteado = 5

let numero = Number (input.question ('Qual número você escolhe?'))

console.log (numero, typeof numero)

while (numero !== numeroSorteado) {
    console.log('Você errou o número. Tente novamente...')

    numero = Number (input.question ('Qual número você escolhe?'))
}

console.log ('Você acertou!')