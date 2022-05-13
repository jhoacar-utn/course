interface Person{
    name:String;
    sueldo:number;
    edad:number; 
    /**
     * Metodo de todo ser vivo
     */
    respirar():boolean;
}

class Student implements Person{

    public name:String;
    public sueldo:number;
    public edad:number; 

    respirar():boolean{
        
        console.log("Estoy respirando");
        return true;
    };

    constructor(){
        this.edad = 20;
        this.name = "default";
        this.sueldo = 12321234;
    }

    mostrarEdad(){
        console.log(this.edad);
    }
}

const persona = new Student();
persona.mostrarEdad()