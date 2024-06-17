let opcoes = ['Pedra', 'Papel', 'Tesoura']
let escolhaComputador = ''
let escolhaUsuario = ''
let resultado = ''
let numeroAleatorio = Math.floor(Math.random() * 2 + 1)

console.log('Qual você quer selecionar?')
process.stdin.once('data', function(data) {
    escolhaUsuario = data.toString().trim()
    escolhaComputador = opcoes[numeroAleatorio]
    console.log(`A escolha do computador será ${escolhaComputador}`)
    jockenpo()
    console.log(resultado)
    process.exit()
})

function jockenpo() {
    if (escolhaUsuario == escolhaComputador) {
        resultado = 'empate'
    } else if (escolhaUsuario == 'Pedra' && escolhaComputador == 'Tesoura'|| escolhaUsuario == 'Papel' && escolhaComputador == 'Pedra' || escolhaUsuario == 'Tesoura' && escolhaComputador == 'Papel') {
        resultado = 'Você venceu'
    } else {
        resultado = 'Você perdeu'
    } 
}
// Quem fez a atividade: Conrado e Andressa.