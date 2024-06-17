let notas = [ 22, 46, 80, 68, 50, 10, 25, 69, 45, 98]
let media = 0
let maior = 0
let menor = 100
let acimaMedia = 0
let abaixoMedia = 0


for (let i = 0; i < notas.length; i++) {
    media+= notas[i]
}
for (let i = 0; i < notas.length; i++) {
    if(maior<notas[i]){
        maior = notas[i]
    } else if(menor>notas[i]) {
        menor = notas[i]
    }
}

media = media/10
console.log(`A média da turma é ${media}`)
console.log(`A nota mais alta é ${maior}, e a menor é ${menor}`)
notas.push(66)

for (let i = 0; i < notas.length; i++) {
    if (notas[i]> media) {
        acimaMedia++
    }
    if (notas[i]<80){
        abaixoMedia++
}
}
console.log(`As notas acima da média são ${acimaMedia}`)
console.log(` As notas abaixo de 80 são ${abaixoMedia}`)
console.log(`As notas são ${notas}`)