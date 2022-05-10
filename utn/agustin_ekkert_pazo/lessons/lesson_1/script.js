alert("Se debe crear la logica en el archivo script.js");



const mostrar = () => {
let c1 = document.getElementById('coin_1').value;
let c2 = document.getElementById('coin_2').value;
let c3 = document.getElementById('coin_3').value;
let c4 = document.getElementById('coin_4').value;

let m1 = document.getElementById('multiplier_1').value;
let m2 = document.getElementById('multiplier_2').value;
let m3 = document.getElementById('multiplier_3').value;
let m4 = document.getElementById('multiplier_4').value;




let monedas = [c1,c2,c3,c4];
let multiplicadores = [m1,m2,m3,m4];
console.log(monedas);
console.log(multiplicadores);

monedas = monedas.sort((a,b)=>b-a)
console.log(monedas);
multiplicadores = multiplicadores.sort((a,b)=>b-a)
let cont = 0; 
for(i=0;i<4;i++){
    let r1 = monedas[i] * multiplicadores[i];
    document.getElementById(`response_${i+1}`).value = r1;
    cont+= r1;
    console.log(`response_${i+1}`);
    console.log(r1);
}
document.getElementById('response_total').value = cont;
}

document.getElementById('calculate');
