
let nota

console.log('Qual a sua nota?')
process.stdin.once('data',function(data){

    nota = parseInt(data.toString().trim())
    console.log(calcularNotas(nota))
    process.exit()
})

function calcularNotas(nota) {
    switch(true){
        case  nota >= 90 && nota <= 100:
            return 'você foi aprovado, sua nota é A'
        
        
        case nota >= 80 && nota <= 89:
            return 'você foi aprovado, sua nota é B'
        

        case nota >= 70 && nota <= 79:
            return 'você foi aprovado, sua nota é C'

        case nota >= 60 && nota <= 69:
            return 'você foi reprovado, sua nota é D'
        
        case nota >= 0 && nota <= 59:
            return 'você foi reprovado, sua nota é F'

        default:
        
        console.log('Nota Invalida')
        
    }
}

