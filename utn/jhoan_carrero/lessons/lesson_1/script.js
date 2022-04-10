const MAX_COINS = 4;

//Estas lineas crean array con de 4 posiciones donde cada casilla tendra el string seguido del indice

const id_coins = [...Array(MAX_COINS)].map((value, index) => `coin_${index + 1}`);
const id_multipliers = [...Array(MAX_COINS)].map((value, index) => `multiplier_${index + 1}`);
const id_response = [...Array(MAX_COINS)].map((value, index) => `response_${index + 1}`);

const get_value_from_input = function (id) {
    const input = document.getElementById(id);
    return input && input.value ? parseInt(input.value) : NaN;
}


const load_response = function (id, value) {
    const input = document.getElementById(id);
    if (input) input.value = value;
}

const get_response_array = function (coins, multipliers) {

    //.slice() realiza una copia exacta del vector original y no es mutado
    copy_coins = coins.slice();
    sorted_coins = coins.slice().sort((a,b)=>a-b); //ordenados de menor a mayor
    sorted_multipliers = multipliers.slice().sort((a,b)=>a-b);

    //Es necesario hacer un sort() con la funcion (a,b)=>a-b, para que considere los numeros
    //porque sino los considera como strings y devolvera un ordenamiento
    //como este: [1 , 10 , 2, 22, 3, 34, 4] en vez de [1, 2, 3, 4, 10, 22, 34]

    response = [];

    //Apartir de las monedas ordenadas asignamos el menor al menor y el mayor al mayor
    
    sorted_coins.map((coin, index_sorted) => {

        const index_coin = copy_coins.indexOf(coin);

        response[index_coin] = sorted_multipliers[index_sorted];

        //Se borra la moneda que ya se evaluo para evitar colocar la misma
        //por ejemplo si hay [5,5,5,5] siempre index_coin ( indexOf(5) ) valdra 0
        delete copy_coins[index_coin];
    });

    return response;

}


const calculate = function () {

    coins = id_coins.map(id => get_value_from_input(id)).filter(number => !isNaN(number));
    multipliers = id_multipliers.map(id => get_value_from_input(id)).filter(number => !isNaN(number));


    if (coins.length != MAX_COINS || multipliers.length != MAX_COINS) {
        alert("Se debe ingresar informacion en las monedas y los multiplicadores")
        return;
    }

    const response = get_response_array(coins, multipliers);

    id_response.map((id, index) => load_response(id, response[index]));

    const input_reponse = document.getElementById("response_total");

    let response_total = 0;

    coins.map((coin,index)=>response_total+=coin*response[index]);

    if(input_reponse)
        input_reponse.value = response_total;

}

const load_all = function () {
    document.getElementById("calculate")?.addEventListener("click", calculate);
}


document.addEventListener("DOMContentLoaded", load_all);
