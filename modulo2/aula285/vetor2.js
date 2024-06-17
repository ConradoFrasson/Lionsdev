let numeros = [27, 10, 3, 0, 20, 5, 6, 3]
let impares = []
let par = []
let idade = 19

numeros.push(idade)

console.log(`Vetor Numeros ${numeros}}`)

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2!=0) {
        impares.push(numeros [i])
    }else {
        par.push(numeros [i])
    }
}
console.log(impares)
console.log(par)