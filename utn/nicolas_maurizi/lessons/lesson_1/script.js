function myFunc() {
// validacion 
    if (document.getElementById('coin_1').value == '' ||
        document.getElementById('coin_2').value == '' ||
        document.getElementById('coin_3').value == '' ||
        document.getElementById('coin_4').value == '' ||
        document.getElementById('multiplier_1').value == '' ||
        document.getElementById('multiplier_2').value == '' ||
        document.getElementById('multiplier_3').value == '' ||
        document.getElementById('multiplier_4').value == '' 
        )
        {
            alert('Complete todos los campos de Entrada')
        }
// paso datos a array (coin)
let coins = []
coins.push(parseInt(document.getElementById('coin_1').value))
coins.push(parseInt(document.getElementById('coin_2').value))
coins.push(parseInt(document.getElementById('coin_3').value))
coins.push(parseInt(document.getElementById('coin_4').value))
// paso datos a array (multiplier)
let mult = []
mult.push(parseInt(document.getElementById('multiplier_1').value))
mult.push(parseInt(document.getElementById('multiplier_2').value))
mult.push(parseInt(document.getElementById('multiplier_3').value))
mult.push(parseInt(document.getElementById('multiplier_4').value))
// ordena ascendentemente como numeros
coins.sort(function(a,b){return a - b;})
mult.sort(function(a,b){return a - b;}) 
// ini contador
let total = 0
// recorro un arreglo y utilizo misma referencia al otro
for (let i = 0 ;i < coins.length;i++)
    {
        // comparacion
        if (coins[i] == parseInt(document.getElementById('coin_1').value))
            {document.getElementById('response_1').value = mult[i]} 

        if (coins[i] == parseInt(document.getElementById('coin_2').value))
            {document.getElementById('response_2').value = mult[i]} 

        if (coins[i] == parseInt(document.getElementById('coin_3').value))
            {document.getElementById('response_3').value = mult[i]} 

        if (coins[i] == parseInt(document.getElementById('coin_4').value))
            {document.getElementById('response_4').value = mult[i]}   
        // acumulo multiplicacion    
        total = total + (coins[i] * mult[i])
    }
    document.getElementById('response_total').value = total //    console.log(total)
   }