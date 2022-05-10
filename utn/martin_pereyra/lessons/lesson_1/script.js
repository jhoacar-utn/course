alert("Se debe crear la logica en el archivo script.js");

function recargar(){

    // valor monedas
    let coin1, coin2, coin3, coin4;
    // valor multiplicadores
    let multiplier1, multiplier2, multiplier3, multiplier4;
    // valor respuesta
    let response1, response2, response3, response4;
    //
    let responsetotal;
    let monedas;

    coin1 = parseFloat(document.getElementById("coin_1").value);
    coin2 = parseFloat(document.getElementById("coin_2").value);
    coin3 = parseFloat(document.getElementById("coin_3").value);
    coin4 = parseFloat(document.getElementById("coin_4").value);

    monedas = [coin1, coin2, coin3, coin4];
    monedas.sort(function(a, b){return a - b});

    multiplier1 = parseFloat(document.getElementById("multiplier_1").value);
    multiplier2 = parseFloat(document.getElementById("multiplier_2").value);
    multiplier3 = parseFloat(document.getElementById("multiplier_3").value);
    multiplier4 = parseFloat(document.getElementById("multiplier_4").value);

    multiplicador = [multiplier1, multiplier2, multiplier3, multiplier4];
    multiplicador = multiplicador.sort(function(a, b){return a - b});

    response1 = monedas[0] * multiplicador[0];
    response2 = monedas[1] * multiplicador[1];
    response3 = monedas[2] * multiplicador[2];
    response4 = monedas[3] * multiplicador[3];

    responsetotal = response1 + response2 + response3 + response4;

    document.getElementById("coin_1").value=monedas[0];
    document.getElementById("coin_2").value=monedas[1];
    document.getElementById("coin_3").value=monedas[2];
    document.getElementById("coin_4").value=monedas[3];
    document.getElementById("multiplier_1").value=multiplicador[0];
    document.getElementById("multiplier_2").value=multiplicador[1];
    document.getElementById("multiplier_3").value=multiplicador[2];
    document.getElementById("multiplier_4").value=multiplicador[3];
    document.getElementById("response_1").value=response1;
    document.getElementById("response_2").value=response2;
    document.getElementById("response_3").value=response3;
    document.getElementById("response_4").value=response4;
    document.getElementById("response_total").value=responsetotal;
    
}











