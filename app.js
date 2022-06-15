const Arista = () => {
    var arista = document.getElementById('arista').value;
    var nodo = document.getElementById('nodo').value;
    
    var compleCiclo = (arista - nodo)+2;
    console.log(compleCiclo);
    var resultado = document.getElementById('resultado');

    resultado.innerText = `La complejidad ciclomática es: ${compleCiclo}`;
}

const Nodo = () => {
    var arista = document.getElementById('aris').value;
    var compleCiclo = parseFloat(arista) + 1;
    console.log(compleCiclo);
    var resultado = document.getElementById('resultad');
    resultado.innerText = `La complejidad ciclomática es: ${compleCiclo}`;
}

const Region = () => {
    var arista = document.getElementById('ari').value;
    
    var resultado = document.getElementById('resul');

    resultado.innerText = `La complejidad ciclomática es: ${arista}`;
}