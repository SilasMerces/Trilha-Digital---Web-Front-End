// Estruturas Condicionais

const idade = 20

if(idade >= 18){
    console.log('Você é maior de idade!')
} else {
    console.log('VoCê é menor de idade!')
}

// Se média >= 7, aprovado
// se média < 7 e média >= 5, recuperação
// se média < 5, reprovado

console.clear //Limpando as saídas anteriores

let media = 4

if (media >= 7) {
    console.log ('Aprovado (a)')
} else if (media >= 5){
    console.log ('Recuperação')
}else {
    console.log ("Reprovado (a)")
}