function calcularPercentual() {
    // Obtém o valor digitado pelo usuário
    const valor = parseFloat(document.getElementById('value').value);
    
    if (isNaN(valor)) {
        alert('Por favor, insira um valor válido.');
        return;
    }
    
    // Calcula 1,2% do valor
    const percentual = 1.2 / 100;
    const resultado = valor * percentual;
    
    // Exibe o resultado
    document.getElementById('result').textContent = `1,2% de ${valor} é ${resultado.toFixed(2)}`;
}