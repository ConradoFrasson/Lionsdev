// questão 4

let idade = 20
let mensagem

if(idade >= 16) {
    mensagem = 'Você pode votar!'
} else {
    mensagem = 'Você não pode votar!!!'
}
console.log(mensagem)

// questão 2

let verificacao
let valor = 4

if(valor % 2 == 0){

    verificacao = true
} else{

    verificacao = false
}

if(verificacao == true){
    console.log(`Número é par!`)
} else{
    console.log(`Número é ímpar!`)
}

//questão 6

let numeros = [1, 2, 3, 4, 5]
let impares = []

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 != 0) {
        impares.push(numeros[i])
    }
}
console.log(impares)

// questão 7
let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0];
let media = 0
let maxima = notas[0]
let minima = notas[0]
let soma = 0
let acimaMedia = 0
let abaixoMedia = 0 

for (let i = 0; i < notas.length; i++) {
    soma += notas [i];
}
media = soma / notas.length
console.log(`A média é ${media}`)

for (let i = 0; i < notas.length; i++) {
    if (maxima < notas[i]) {
        maxima = notas[i];
    }else if(minima > notas[i]){
        minima = notas[i];
    }
}
console.log(`A nota máxima é ${maxima}`)
console.log(`A nota minima é ${minima}`)

notas.push(3.4)

for (let i = 0; i < notas.length; i++) {
    if(notas[i] <= media){
        acimaMedia++
    }
    if(notas[i] < 6.0) {
        abaixoMedia++
    }
}

console.log(`As notas acima da média são ${acimaMedia}`)
console.log(`As notas abaixo da média são ${abaixoMedia}`)
console.log(`As notas são ${notas}`)

/*
a) Declara o array com as notas, utiliza o 'for' para percorrer todo o array, e imprime no console, cada uma das notas
b) Entradas seria somente a declaração de variáveis, pois não há interação com o usuário; saídas são todos os 'console.log'
c) 'media' é para calcular a média
   'maxima' é para identificar a maior nota
   'minima' é para identificar a menor nota
   'soma' é para somar todas as notas
   'acimaMedia' é para identificar todas as notas acima da média total
   'abaixoMedia' é para identificar todas as notas abaixo da média 6.0
*/

