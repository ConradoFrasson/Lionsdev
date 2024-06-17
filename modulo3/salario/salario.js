const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []

exibirMenu()
function exibirMenu() {
	console.log(`
	Menu:
	1. Cadastrar funcionário
    2.Listar todos os funcionarios
    3.Exibir qual o maior salário dos funcionarios
	4. Editar o funcionário
	5. Remover o funcionário
	6.Sair
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
			case '2':
				listarFuncionarios()
				break
                case '3':
				maiorSalario()
				break
			case '4':
				edicaoFuncionario()
				break
			case '5':
				removerFuncionario()
				break
            case '6':
				rl.close()
				break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: parseFloat(salario)})
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}
function listarFuncionarios() {
    if(funcionarios > 0){
    console.log('Há funcionários cadastrados.')
    for (let i = 0; i < funcionarios.length; i++) {
        console.log(funcionarios[i])
    	}exibirMenu() 
	} else {
		console.log('Não há funcionários cadastrados.')
    for (let i = 0; i < funcionarios.length; i++) {
        console.log(funcionarios[i])
	}exibirMenu()
}
}
function maiorSalario() {
    let maiorSalario = funcionarios [0]
    console.log('Esse é o funcionário com o maior salário ')
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].salario > maiorSalario) {
			maiorSalario = funcionarios[i]
			maiorSalario++
		}
        
    }
	console.log(maiorSalario)
	exibirMenu()
}
		

	function edicaoFuncionario() {
		if (funcionarios.length == 0) {
			console.log(`Não há funcionários para editar.`)
		}else{ 
				console.log('Lista de funcionários')
					funcionarios.forEach((funcionario, index) => {
						console.log(`${index + 1}. ${funcionario.nome}`)
						})
						rl.question('Digite o número do funcionário: ', (numero) => { 
				if(numero > 0 && numero <= funcionarios.length) {
			
				
				rl.question('Digite o nome do funcionário: ', (nome) => {
					rl.question('Digite o novo cargo: ', (cargo) => {
						rl.question('Digite o novo salário: ', (salario) => {
							funcionarios[numero - 1] = {
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
	function removerFuncionario() {
		if (funcionarios.length == 0) {
		console.log('Não há funcionários para remover.')
		exibirMenu()
		} else {
			for (let i = 0; i < funcionarios.length; i++) {
				console.log('Lista de funcionários')
					funcionarios.forEach((funcionarios, index) => {
						console.log(`${index + 1}. ${funcionarios.nome}`)
		})
		rl.question('Digite o funcionário que deseja remover: ', (remover) => {
		if (remover > 0 && remover<= funcionarios.length) {
		funcionarios.splice(remover - 1, 1)
		console.log('Funcionário removido com sucesso!')
		exibirMenu()
		} else {
		console.log('Opção Inválida, digite novamente')
		exibirMenu()
		}
		})
		}
		}
	}
