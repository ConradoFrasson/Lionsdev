let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0];
let media = 0
let maxima = notas[0]
let minima = notas[0]
let soma = 0
let acimaMedia = 0
let abaixoMedia = 0 

for (let i = 0; i < notas.length; i++) {
    soma += notas [i];
}
media = soma / notas.length
console.log(`A média é ${media}`)

for (let i = 0; i < notas.length; i++) {
    if (maxima < notas[i]) {
        maxima = notas[i];
    }else if(minima > notas[i]){
        minima = notas[i];
    }
}
console.log(`A nota máxima é ${maxima}`)
console.log(`A nota minima é ${minima}`)

notas.push(3.4)

for (let i = 0; i < notas.length; i++) {
    if(notas[i] <= media){
        acimaMedia++
    }
    if(notas[i] < 6.0) {
        abaixoMedia++
    }
}

console.log(`As notas acima da média são ${acimaMedia}`)
console.log(`As notas abaixo da média são ${abaixoMedia}`)
console.log(`As notas são ${notas}`)
