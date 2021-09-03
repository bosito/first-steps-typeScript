interface Persona {

    nombre?:string
    altura:number
    peso:number

    readonly apellido:string

}

const caminar = (persona:Persona) => {
    console.log(`la persona ${persona.nombre} esta caminando`);
    
};

const pesoMedio = (persona:Persona) :string => {

    const mediaPeso:number = persona.peso / persona.altura

    if (persona.nombre) {
        return `${persona.nombre} tiene una media de peso de: ${mediaPeso}`
    } else {
        return `No se quien eres pero tienes una media de peso de: ${mediaPeso}`
    }

}

const personaTest2 = {nombre: 'pepe', apellido: 'jimenez' };

//la propiedad es de readonly y no cambia su valor ya definido
personaTest2.apellido = "wolas"

//console.log(personaTest2);


//const personaTest = {altura: 2, peso: 120  }

//console.log(pesoMedio(personaTest));


//const newPersona = { nombre: "Jose Luis" };

//caminar(newPersona)

/**
 * interfaces para funciones 
 */

interface General {
    (nombre:string, apellido:string, edad:number):void
}

const generalUno:General = (nombre:string, apellido:string, edad:number):void => {
    console.log(`${nombre} con el apellido ${apellido} y la edad de ${edad}`)
    
};

generalUno("pepe", 'jime', 23)