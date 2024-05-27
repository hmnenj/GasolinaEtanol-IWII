var etanol;
var gasolina;
let resultado;

function calcular() {
    // etanol = parseFloat(formulario.etanol.value);
    // gasolina = parseFloat(formulario.gasolina.value);

    let etanol = parseFloat(document.getElementById('etanol').value);
    let gasolina = parseFloat(document.getElementById('gasolina').value);

    let resultado = etanol / gasolina;

    if (etanol < 0.70 * gasolina) {
        document.getElementById('status').src = "./img/tanqueEtanol.png";
    } else {
        document.getElementById('status').src = "./img/tanqueGasolina.png"
    }

    document.getElementById("mensagem").innerHTML = `Resultado: ${resultado.toFixed(2)}`;
}

function limpar() {
    document.getElementById('status').src = "./img/tanque.png";
    document.getElementById('mensagem').innerHTML= '';
    document.getElementById('etanol').value= '';
    document.getElementById('gasolina').value= '';
}