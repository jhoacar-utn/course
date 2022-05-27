
function agregarDatos(){
    let nombre = document.getElementById('txtNombre').value;
    let cajaNombre = document.getElementById('datos');
    cajaNombre.append(nombre);
    document.getElementById('txtNombre').value = "";
}


function abrirModal(){
let modal = document.getElementById('miModal');
    modal.className = 'abrirModal';
};

function cerrarModal(){
let modal = document.getElementById('miModal');
    modal.className ='cerrarModal';
};
