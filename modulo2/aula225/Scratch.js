let nota1
let nota2
let media

console.log('Qual a primeira nota?')

process.stdin.once('data', function(data) {
    nota1 = parseFloat(data.toString().trim())

    console.log('Qual a segunda nota?')
    process.stdin.once('data', function(data) {
        nota2 = parseFloat(data.toString().trim())
       processamento(nota1, nota2, media)

       process.exit()
    })
})
        function processamento(nota1, nota2, media){
            media = parseFloat ((nota1 + nota2)/2)
            if (media > 7) {
                console.log(`Parabéns você passou, sua média é ${media}`)
            } else {
                console.log(`Infelizmente você reprovou, sua média é ${media}`)
            }
        }