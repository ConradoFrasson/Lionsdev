var numero
var i

console.log('Digite um número para saber a tabuada do mesmo')
process.stdin.once('data', function(data){
    numero = parseInt(data.toString().trim())
    tabuada(numero)
    process.exit()
})

    function tabuada(numero) {

        for (var i = 0; i <= 10; i ++){
            console.log(` ${numero} x ${i} = ${i * numero}`)
        }
    }

