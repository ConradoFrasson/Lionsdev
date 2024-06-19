let numeros

console.log('Qual o número de lados que deseja?')
process.stdin.once('data', function(data) {
    numeros = parseInt(data.toString().trim())
    dado(numeros)
    process.exit()
})
    function dado(numeros) {

        console.log(`O dado caiu no numero: ${Math.floor(Math.random() * numeros) + 1}`)
    }

    // Quem fez a atividade: Conrado e Andressa.
