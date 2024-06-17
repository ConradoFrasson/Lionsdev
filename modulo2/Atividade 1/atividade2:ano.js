const anoAtual=2024
let nome
let idade

console.log('Como é seu nome?')
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('Qual é sua idade?')

    process.stdin.once('data', function(data) {
       idade = parseInt(data.toString().trim())
       CalcularIdade(idade, nome)

       process.exit() 
    })
})

function CalcularIdade(idade, nome){
    let anoNasc = anoAtual-idade
    console.log(`Se você ja fez aniversario ${nome}, o ano de seu nascimento é ${anoNasc} \n , se não, o seu ano de nascimento é ${anoNasc-1}.`)
}