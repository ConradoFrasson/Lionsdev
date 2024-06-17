const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let jogo = []

exibirMenu()
function exibirMenu() {
	console.log(`
	Menu:
	1. Cadastrar jogo
    2.Listar todos os jogo
    3.Editar o jogo
	4. Remover o jogo
	5.Sair
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarJogo()
				break
			case '2':
				listarJogos()
				break
                case '3':
				edicaoJogo()
				break
			case '4':
				removerJogo()
				break
            case '5':
				rl.close()
				break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarJogo() {
	rl.question('Digite o nome do jogo: ', (nome) => {
		rl.question('Digite o gênero: ', (genero) => {
			rl.question('Digite o valor do jogo: ', (valor) => {
				jogo.push({ nome: nome, cargo: genero, salario: parseFloat(valor)})
				console.log('Jogo cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}
function listarJogos() {
    if(jogo > 0){
    console.log('Não há jogos cadastrados.')
    for (let i = 0; i < jogo.length; i++) {
        console.log(jogo[i])
    	}exibirMenu() 
	} else {
        console.log('Há jogos cadastrados.') 
        for (let i = 0; i < jogo.length; i++) {
            console.log(jogo[i])
            }exibirMenu()

}
}
		

	function edicaoJogo() {
		if (jogo.length == 0) {
			console.log(`Não há jogos para editar.`)
		}else{ 
				console.log('Lista de jogos')
					jogo.forEach((jogo, index) => {
						console.log(`${index + 1}. ${jogo.nome}`)
						})
						rl.question('Digite o número do jogo: ', (numero) => { 
				if(numero > 0 && numero <= jogo.length) {
			
				
				rl.question('Digite o novo jogo: ', (nome) => {
					rl.question('Digite o genero: ', (cargo) => {
						rl.question('Digite o valor: ', (salario) => {
							jogo[numero - 1] = {
								nome,
								cargo,
								salario
							}
						exibirMenu()
					})
				})
			})
		
		}
	}) 
		}
	}
	function removerJogo() {
		if (jogo.length == 0) {
		console.log('Não há jogos para remover.')
		exibirMenu()
		} else {
			for (let i = 0; i < jogo.length; i++) {
				console.log('Lista de jogos')
					jogo.forEach((jogo, index) => {
						console.log(`${index + 1}. ${jogo.nome}`)
		})
		rl.question('Digite o jogo que deseja remover: ', (remover) => {
		if (remover > 0 && remover<= jogo.length) {
		jogo.splice(remover - 1, 1)
		console.log('Jogo removido com sucesso!')
		exibirMenu()
		} else {
		console.log('Opção Inválida, digite novamente')
		exibirMenu()
		}
		})
		}
		}
	}
