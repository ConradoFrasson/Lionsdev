let numero

console.log('Vamos descobrir se o numero é par.')
console.log('Digite um numero')

process.stdin.once('data', function(data) {
    numero = parseInt(data.toString().trim())
    descobrePar(numero)
    process.exit()

})

function descobrePar (numero){
    
    let resto = numero%2

    if (resto>0){

        console.log(` numero ${numero} é impar`)
    }
    
    else console.log(`O numero ${numero} é par`)
}