const formulario = document.getElementById('meu-formulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorCampoA = parseFloat(campoA.value);
    const valorCampoB = parseFloat(campoB.value);

    if (isNaN(valorCampoA) || isNaN(valorCampoB)) {
        mensagem.textContent = 'Por favor, insira valores numéricos em ambos os campos.';
    } else if (valorCampoB > valorCampoA) {
        mensagem.textContent = 'Formulário válido! O número B é maior que o número A.';
        mensagem.style.color = 'green';
    } else {
        mensagem.textContent = 'Formulário inválido. O número B deve ser maior que o número A.';
        mensagem.style.color = 'red';
    }
});