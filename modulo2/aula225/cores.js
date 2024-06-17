let coresFavoritas = ['preto', 'azul', 'verde']
let coresEspeciais = []

console.log('Qual a sua cor favorita')
process.stdin.once('data', function(data){
    corDoUsuario = (data.toString().trim())
    cores(coresFavoritas, coresEspeciais, corDoUsuario)
    process.exit()
})

function cores(coresFavoritas, coresEspeciais, corDoUsuario){
    if(coresFavoritas.includes(corDoUsuario)) {
        console.log(`A sua cor é uma das favoritas `)

    
    }else{
        console.log(`A sua cor não é uma das mais preferidas pela turma, vamos colocá-la`)
        coresEspeciais.push(corDoUsuario)
    
    }
    console.log(`As cores preferidas são ${coresFavoritas}, As cores especiais são ${coresEspeciais}, no total temos ${coresFavoritas.length} cores favoritas`)
}