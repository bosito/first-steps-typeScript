class Padre{
    edad:number;
    nombre:string;

    constructor(_nombre:string, _edad:number){
        this.edad = _edad
        this.nombre = _nombre
    }

    muestraNombre = ():void =>{
        console.log(this.nombre); 
    };
};

class Hijo extends Padre {

    apellido:string;

    constructor(_nombre:string, _edad:number, _apellido:string){
        super(_nombre, _edad);
        this.apellido = _apellido
    };

    nombreHijo = ():void => {
        console.log(this.nombre);
    };
};

const otroHijo = new Hijo('Pepe', 22, 'Vazquez');

/* modificador de classe **/

class Animal {
    nombre:string;
    tamaño:string;

    constructor(_nombre:string, _tamaño:string){
        this.nombre = _nombre
        this.tamaño = _tamaño
    }

    mover = ():void => {
        console.log('me muevo');
    };
};

const obj = new Animal('serpiente', "grande");

/**
 * 
 */