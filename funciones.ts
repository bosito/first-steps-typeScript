//funciones con typeScript
/*
function suma(a:number, b:number):number {
    return a + b
};

const respuesta: number = suma(20, 12);

console.log(respuesta);
*/

function mostrar(): void {
    console.log('el tipado void dice que la funcion no va a retornar nada');
    console.log('solo hara la accion programada y listo');
}

const mostrar2 = (): void => console.log('asi se hace en arrow function');

const mostrar3 = (txt:string):void => console.log(txt);


//mostrar();
//mostrar2();
//mostrar3("hola crack");

//parametros opcionales 

const mostrar4 = (nombre:string, apellido:string, eddad?:number):void => {
    console.log(`Hola mi nombre es: ${nombre} mi apellido es ${apellido} y tengo ${eddad}`);
};

const mostrar5 = (nombre:string, apellido:string, eddad:number = 0):void => {
    console.log(`Hola mi nombre es: ${nombre} mi apellido es ${apellido} y tengo ${eddad}`);
};

//mostrar4("pepe", "jimenez", 23);
//mostrar4("pepe", "jimenez");

//mostrar5("luis", "jimenez", 23);
//mostrar5("luis", "jimenez");

//Funciones rest

const fundionRes = (postre:string, ...frutas:string[]):void => {
    console.log(`El postre es ${postre} y tienes estas frutas: ${frutas}`);
};

fundionRes('pastel', 'manzana', 'uvas', 'pera');

