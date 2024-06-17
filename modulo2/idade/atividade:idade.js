let idade
let nome

console.log('Qual o seu  nome?')
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('Qual a sua idade?')

    process.stdin.once('data', function(data) {
        idade= parseInt(data.toString().trim())
        calcularanos(nome, idade)

        process.exit()
    })
})

function calcularanos(nome, idade){

    if(idade >=18){
        console.log(` ${nome} você é maior de idade.`)
    }
    else console.log(`${nome} você é menor de idade.`)
}