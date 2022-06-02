
// const calcularTotal = (e) => {
//     e.preventDefault()
//     const unaHora = 3500;
//     const tresHoras = 2800;
//     const seisHoras = 2600;
//     const mayoHoras = 2500;
//     let hora = document.getElementById('idTiempo').value;
//     let costo = document.getElementById('idTotal');

//     if(hora === 1){
//         costo.value= hora * unaHora
//     }
//   switch (hora) {
//       case hora === 1:
//         return costo.value= hora * unaHora
//       case hora > 3:
//         return costo.value= hora * tresHoras
//       case hora > 6:
//         return costo.value= hora * seisHoras
//       case hora > 7:
//         return costo.value= hora * mayoHoras
//       default:
//         return costo
//   }
// }


let btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', (e)=>{
  e.preventDefault();
    let cantidadHoras = document.getElementById('txtHoras').value;
        mensaje = document.getElementById('mensaje');
        pagoTotal = document.getElementById('txtResultado');
        dias = document.getElementById('cantidadDias').value;
        dias = (cantidadHoras / 24);
        horas = cantidadHoras - (24 * dias);
    if (dias >= 30){
      pagoTotal.value= 125000;
      mensaje.value= ' retire el veiculo'
      return;
    }
    if (cantidadHoras >= 1  ) {
      pagoTotal.value = (cantidadHoras * 4500);
    }
    if (cantidadHoras > 1 && cantidadHoras < 3) {
      pagoTotal.value = (cantidadHoras * 3800) ;
    }
    if (cantidadHoras >= 3 && cantidadHoras <=5) {
      pagoTotal.value = (cantidadHoras * 3000) ;
    }
    if (cantidadHoras > 5 && cantidadHoras <=8) {
      pagoTotal.value = (cantidadHoras * 2500) ;
    }
    if (cantidadHoras == 24) {
      pagoTotal.value = 7500;
    }
    if (cantidadHoras > 24) {
      pagoTotal.value = (dias * 7500) ;
    }
    if (cantidadHoras <= 0 && dias == 0) {
      alert("ERROR. Debes ingresar un número de hora válido.");
    } else {
      mensaje.value=("El vehiculo estuvo estacionado: " + parseInt(dias | 0) + " días y " + (cantidadHoras) + " horas," + " el" +
      " total a pagar es = $" + pagoTotal.value);
    }
    
  } )