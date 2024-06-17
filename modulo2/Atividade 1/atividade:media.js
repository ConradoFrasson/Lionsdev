let nota1
let nota2
let media

console.log('determine a nota aqui.')
process.stdin.once('data', function(data) {
    nota1 = parseFloat(data.toString().trim())
    console.log('determine a nota aqui.')

    process.stdin.once('data', function(data) {
      
        nota2 = parseFloat(data.toString().trim())
        processamento(nota1, nota2)
        process.exit()

    })
})

function processamento(nota1,nota2) {
    media = parseFloat((nota1 + nota2)/2)
    console.log(`media igual a: ${media}`)
    
}