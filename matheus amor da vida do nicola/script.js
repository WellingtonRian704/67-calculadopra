let display = document.getElementById('display');

function adicionarCaractere(char) {
    const valorAtual = display.value;
    const ultimoChar = valorAtual.slice(-1);
    const operadores = ['+', '-', '*', '/', '%', '.'];

    // 1. Evita que comece com um operador (exceto números)
    if (valorAtual === "" && operadores.includes(char)) {
        return; 
    }

    // 2. Impede que dois operadores sejam colocados em sequência (ex: "++" ou "*-")
    if (operadores.includes(ultimoChar) && operadores.includes(char)) {
        // Substitui o último operador pelo novo
        display.value = valorAtual.slice(0, -1) + char;
        return;
    }

    display.value += char;
}

function limpar() {
    display.value = "";
}

function calcular() {
    try {
        // A função eval() processa a string como conta matemática
        // Substituímos o '%' por '/100' para a conta de porcentagem funcionar
        let expressao = display.value.replace(/%/g, '/100');
        
        if (expressao) {
            display.value = eval(expressao);
        }
    } catch (e) {
        display.value = "Erro";
        setTimeout(limpar, 1500);
    }
}