var gasolina, etanol;

function melhor() {
    etanol= parseFloat(frdados.txetanol.value.replace(", ", "."));
    gasolina= parseFloat(frdados.txgasolina.value.replace(", ", "."));
    if (etanol < 0.7*gasolina) {
        document.getElementById("imagem").src = "Imagens/etanol.png";
        console.log(etanol);
    }
    else {
        document.getElementById("imagem").src = "Imagens/gasolina.png";
        console.log(gasolina);
        
    }
}
function limpar() {
    document.getElementById("imagem").src = "Imagens/normal.png";
}