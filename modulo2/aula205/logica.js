var somaPares =0
var somaImpares =0
var totalPares =0
var totalImpares =0
var mediaPares =0
var mediaImpares =0


    for (var i = 0; i <= 999; i ++){
        if(i% 2 ==0){
        somaPares += i
        totalPares ++
        }
            else{
             somaImpares += i
             totalImpares ++
            }
    }
    mediaImpares = somaImpares/ totalImpares
    mediaPares = somaPares/ totalPares
    
    console.log(` a soma dos pares: ${somaPares}\n a soma dos impares: ${somaImpares}\n total dos pares: ${totalPares}\n total dos impares: ${totalImpares}`)
    if (mediaPares > mediaImpares){
        console.log (`a media dos pares: ${mediaPares} é maior que a dos ímpares.`)
    }else {
        console.log (`a media dos impares: ${mediaImpares} é maior que a dos pares ${mediaPares}`)
    }