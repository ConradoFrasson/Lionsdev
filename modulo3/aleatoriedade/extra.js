let caracteres = 'ABCDDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*?'
let senha = ''
let comprimentoSenha

console.log('Qual o comprimento da senha digitada?')
process.stdin.once('data', function(data) {
    comprimentoSenha = parseInt(data.toString().trim())
    processamento()
    process.exit()
})
function processamento(){
    for( let i = 0; i < comprimentoSenha; i++){
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length + 1))
    }
    console.log(senha)
}