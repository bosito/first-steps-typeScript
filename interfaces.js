var caminar = function (persona) {
    console.log("la persona " + persona.nombre + " esta caminando");
};
var pesoMedio = function (persona) {
    var mediaPeso = persona.peso / persona.altura;
    if (persona.nombre) {
        return persona.nombre + " tiene una media de peso de: " + mediaPeso;
    }
    else {
        return "No se quien eres pero tienes una media de peso de: " + mediaPeso;
    }
};
var personaTest2 = { nombre: 'pepe', apellido: 'jimenez' };
//la propiedad es de readonly y no cambia su valor ya definido
personaTest2.apellido = "wolas";
var generalUno = function (nombre, apellido, edad) {
    console.log(nombre + " con el apellido " + apellido + " y la edad de " + edad);
};
generalUno("pepe", 'jime', 23);
