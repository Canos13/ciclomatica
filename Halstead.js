const Halstead = () => {
    var numOpDis = document.getElementById('op1').value;
    var numOpdDis = document.getElementById('op2').value;
    var numTotalop = document.getElementById('numT1').value;
    var numTotalopd = document.getElementById('numT2').value;

    var vocabulario = (parseFloat(numOpDis)) + (parseFloat(numOpdDis));
    var duracionPrograma = (parseFloat(numTotalop)) + (parseFloat(numTotalopd));
    var duracionEstimada = (parseFloat(numOpDis *  Math.log2(numOpDis)))+(parseFloat(numOpdDis * Math.log2(numOpdDis)))
    var volumen = duracionPrograma * Math.log2(vocabulario);
    var dificultad = (numOpDis/2) * (numTotalopd/numOpdDis);
    var esfuerzo = dificultad * volumen;
    var tiempoRequerido = esfuerzo/18;
    var numErrores = volumen/3000;

    document.getElementById('duracionEstimada').innerText = `Duración estimada calculada del programa: ${duracionEstimada}`;
    document.getElementById('volumen').innerText = `Volumen: ${volumen}`;
    document.getElementById('dificultad').innerText = `Dificultad: ${dificultad}`;
    document.getElementById('esfuerzo').innerText = `Esfuerzo: ${esfuerzo}`;
    document.getElementById('tiempoRequerido').innerText = `Tiempo requerido para programar: ${tiempoRequerido} segundos`;
    document.getElementById('numErrores').innerText = `Número de errores entregados: ${numErrores}`;
}