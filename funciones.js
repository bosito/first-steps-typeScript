//funciones con typeScript
/*
function suma(a:number, b:number):number {
    return a + b
};

const respuesta: number = suma(20, 12);

console.log(respuesta);
*/
function mostrar() {
    console.log('el tipado void dice que la funcion no va a retornar nada');
    console.log('solo hara la accion programada y listo');
}
var mostrar2 = function () { return console.log('asi se hace en arrow function'); };
var mostrar3 = function (txt) { return console.log(txt); };
//mostrar();
//mostrar2();
//mostrar3("hola crack");
//parametros opcionales 
var mostrar4 = function (nombre, apellido, eddad) {
    console.log("Hola mi nombre es: " + nombre + " mi apellido es " + apellido + " y tengo " + eddad);
};
var mostrar5 = function (nombre, apellido, eddad) {
    if (eddad === void 0) { eddad = 0; }
    console.log("Hola mi nombre es: " + nombre + " mi apellido es " + apellido + " y tengo " + eddad);
};
//mostrar4("pepe", "jimenez", 23);
//mostrar4("pepe", "jimenez");
//mostrar5("luis", "jimenez", 23);
//mostrar5("luis", "jimenez");
//Funciones rest
var fundionRes = function (postre) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    console.log("El postre es " + postre + " y tienes estas frutas: " + frutas);
};
fundionRes('pastel', 'manzana', 'uvas', 'pera');
