let prova1
let prova2

console.log('Qual a sua nota na primeira prova?')
process.stdin.once('data', function(data){
    prova1 = parseFloat(data.toString().trim())

    console.log('Qual a sua nota na segunda prova?')
    process.stdin.once('data', function(data){
        prova2 = parseFloat(data.toString().trim())
        calcularnota(prova1, prova2)
        process.exit()
    })
})

function calcularnota( prova1, prova2) {
    let nota=[]

    nota.push(prova1, prova2)
    var media = (nota[0] + nota[1]) /2
    console.log(`A sua média é ${media}`)
}