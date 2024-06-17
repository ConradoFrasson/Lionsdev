let valor1
let valor2
let operacao



function calculadora(valor1, valor2, operacao) {
    if(operacao == '+'){
        return valor1 + valor2
    }
        else if(operacao == '-'){
            return valor1 - valor2
        }else if(operacao == '*'){
            return valor1 * valor2
        }else if(operacao =='/'){
            return valor1 / valor2
        }        
}


console.log(calculadora(5, 3, '+'))
console.log(calculadora(5, 3, '-'))
console.log(calculadora(5, 3, '*'))
console.log(calculadora(5, 3, '/'))