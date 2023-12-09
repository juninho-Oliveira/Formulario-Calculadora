function Calcular() {
    event.preventDefault() //impede de recarregar a página automáticamente.

    //valor capturado no input e guardando o valor na variável n1
    let n1 = parseInt(document.getElementById('num1').value)
    //valor capturado no input e guardando o valor na variável n2
    let n2 = parseInt(document.getElementById('num2').value)
    //operação escolhida pelo usuário (+, -, /, *)
    let operacao = document.getElementById('operacao').value
    //variável para guadar o valor da operação
    let resultado;

    //validação para o usuario não digitar palavras e apenas números
    // if (NaN(n1) && NaN(n2)) {
    //     alert("Somente números")
    // }

    switch (operacao) {
        case 'Somar':
                resultado = n1 + n2

                document.getElementById('resultado').innerHTML = resultado
            break;
        case 'Subtrair':    
                resultado = n1 - n2

                document.getElementById('resultado').innerHTML = resultado
            break;
        case 'Multiplicar':
                resultado = n1 * n2
                document.getElementById('resultado').innerHTML = resultado
            break;
        case 'Dividir':
                
                if (n1 === 0 || n2 === 0) {
                    document.getElementById('resultado').innerHTML = `não da para dividir por ${0}`
                } else {
                    resultado = n1 / n2
                    document.getElementById('resultado').innerHTML = `o resultado da divisão é: ${resultado}`
                }
                
            break;
    
        default:
            alert("Opção inválida")
            break;
    }
    
}


