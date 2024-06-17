let gostaDeCafe

console.log('Você gosta de café?')
process.stdin.once('data', function(data) {
    gostaDeCafe = data.toString().trim()
    beberCafe(gostaDeCafe)
    process.exit()
})

function beberCafe(gostaDeCafe) {
    let resposta = false

    if (gostaDeCafe=='sim'|| gostaDeCafe== 'SIM' || gostaDeCafe=='Sim'){

        resposta=true
    }

    if(resposta==true){
          console.log('Café te acorda')
        
    }
    else console.log('COMO NÃO!?')
}