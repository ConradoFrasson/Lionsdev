let valor1
let valor2
let operacao

function calculadora(valor1, valor2, operacao) {
    switch(operacao){
        case '+':
            return valor1 + valor2
        
        
        case '-':
            return valor1 - valor2  
        

        case '*':
            return valor1 * valor2
        

        case '/':
            return valor1 / valor2
        
    }
}

console.log(calculadora(5, 6, '+'))
console.log(calculadora(5, 6, '-'))
console.log(calculadora(5, 6, '*'))
console.log(calculadora(5, 6, '/'))


