function calcular() {
    let inputPeso = document.getElementById('peso').value;
    let inputAltura = document.getElementById('altura').value;

    if (inputPeso === '' || inputAltura === '') {
        alert('Por favor, preencha os campos adequadamente.');
        return;
    }
    if (inputPeso < 0 || inputAltura < 0) {
        alert('Por favor, insira valores positivos.');
        return;
    }
    inputPeso = Number(inputPeso);
    inputAltura = parseFloat(inputAltura);

    let resultado = inputPeso / (inputAltura * inputAltura) ;
    resultado = resultado.toFixed(2);

    if (resultado <= 18.49) {
        document.getElementById('resultadoOperacao').textContent = `Seu IMC é de: ${resultado}(Abaixo do peso).`;
    } else if (resultado <=24.9) {
        document.getElementById('resultadoOperacao').textContent = `Seu IMC é de: ${resultado}(Peso normal).`;
    } else if (resultado <= 29.9) {
        document.getElementById('resultadoOperacao').textContent = `Seu IMC é de: ${resultado}(Sobrepeso)`;
    } else if (resultado <= 34.9) {
        document.getElementById('resultadoOperacao').textContent = `Seu IMC é de: ${resultado}(Obesidade grau 1).`;
    } else if (resultado <= 39.9) {
        document.getElementById('resultadoOperacao').textContent = `Seu IMC é de: ${resultado}(Obesidade grau 2).`;
    } else if (resultado >= 40) {
        document.getElementById('resultadoOperacao').textContent = `Seu IMC é de: ${resultado}(Obesidade grau 3).`;
    } else {
        alert('Digite um peso e uma altura válida')
    }
}