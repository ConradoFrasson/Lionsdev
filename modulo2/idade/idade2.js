let nome
let idade
let aniversario
const ano = 2024

console.log('Digite seu nome')
process.stdin.once('data', function(data) {
    nome = data.toString().trim()

    console.log('Qual sua idade?')
    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())

        console.log('Você já fez aniversário?')
        process.stdin.once('data', function(data){
            aniversario = data.toString().trim()
            calcularidade(nome, idade, aniversario)
        process.exit()
        })
    })
})

    function calcularidade(nome, idade, aniversario){
    let anoNasc
    let simOuNao

    if (aniversario == 'sim'){
    simOuNao = true
 }
 
    else {
    simOuNao = false

 }
    anoNasc = 2024 - idade

    if (simOuNao == true){


        console.log(`${nome}, Você nasceu em ${anoNasc}`)
    }
    
    else {
        console.log(`${nome}, você nasceu em ${anoNasc-1}`)
    }
 }
