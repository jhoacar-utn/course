//Creacion de Clase
class Movie {
    constructor(nombre, id){
        this.nombre = nombre;
        this.id = id;
    }

    reproducir(){
        return `Reproduciendo la pelicula ${this.nombre}`
    }
}

class Serie extends Movie{
    constructor(nombre,id,cap){
        super(nombre,id)
        this.cap = cap
    }

    reproducirCapitulo(){
        return `Reproduciendo el capitulo ${this.cap}`
    }
}

//Instanciacion de Objeto
const movie1 = new Movie('Batman',1)
const movie2 = new Movie('Superman',2)
const serie1 = new Serie('Breaking bad',1, 55)

console.log(movie1.reproducir());
console.log(movie2.reproducir());
console.log(serie1.reproducirCapitulo());

//prueba split
const dniCp = `00314085776"PRIETO"CHRISTIAN DARIO"M"23153873"A"13-01-1973"18-11-2014"239`;
const dniLs = `00185325221"SALAZAR DE MOYA"LAUTARO ADRIAN"M"35639654"B"31-10-1990"25-04-2013`;
const comillas = `"`

function dividirCadena(cadenaADividir,separador) {
    const arrayDeCadenas = cadenaADividir.split(separador);
    document.write('<h3>Nombre: '+ arrayDeCadenas[2]);
    document.write('<br>Apellido: ' + arrayDeCadenas[1]);
    document.write('<br>DNI: ' + arrayDeCadenas[4] + '</h3>');
    document.write("<br>El array tiene " + arrayDeCadenas.length + " elementos: ");

    for (var i=0; i < arrayDeCadenas.length; i++) {
    document.write(arrayDeCadenas[i] + " - ");
    }
}

dividirCadena(dniLs, comillas);
dividirCadena(dniCp, comillas);
