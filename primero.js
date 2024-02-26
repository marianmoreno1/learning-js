//0. Variables
// Las variables pueden guardar cualquier cosa (hasta funciones)  -> arrow function

let numero = 5;
const noCambia = 5; //no cambia una vez declarado
var numeroVar = 6; //manera antigua pero es igual que let
numero = 6;

//Acepta lo que sea, puedo guardar en numero un true, "5" una lista...
//1. Bucle if

let a = 5;
let b = "5";
if (a==b){
    console.log("Son iguales");
}

if (a===b){
    console.log("identicos");
}else{
    console.log("igual en contenido, no en forma");
}

//2. Bucle for

let lista = [5, 7, "hola", true];
//Forma 1
for (let i = 0; i<lista.length; i++ ){
    console.log(lista[i]);
}

//Forma 2
for (let elemento of lista){
    console.log(elemento);
} 


//3. Bucle while
while(a !== b){
    console.log("a es distinto");
    a="5";
};

//Excepción de JS
// poner 3 iguales !== te verifica que son distintos en forma y contenido
// Solo == 0 != mirara contenido

//4. OBJETOS
//Puedo meter uno dentro de otro
let persona = {
    nombre: "Jorge",
    edad:20,
    carrera: "Teleco",
    apellidos: {
        primero: "Lopez",
        segundo: "Moreno",
    }
};

//Acceder --> persona.nombre devuleve Jorge
//persona.apellidos devuelve lista de ambos
//persona.apellidos.primero devuelve lopez

//5. FUNCIONES
//Forma 1 : tradicional

function helloWorld(mensaje){
    console.log(mensaje);
};

//Forma 2 arrow function (es mejor)
// variable = (var1, var2)
let helloWorld2 = (mensaje, mensaje2) => {
    console.log(mensaje + mensaje2)
};

//6. Funciones que toman parametro otras funciones

let llamarFuncion = (funcion) => {
    const mensaje = "Hola Mundo"
    funcion(mensaje);
};

let imprimirMensaje = (mensaje) => {
    console.log(mensaje);
};

llamarFuncion(imprimirMensaje);
// LLamando: llamarFuncion(imprimirMensaje), lo que hace es imprimir Hola Mundo

//7. Misma manera pero con FUNCION ANONIMA (porque no le doy nombre, arumento es funcion)
//Haz una funcion que tome argumento mensaje pero no le des ningun nombre
// esto hace lo mismo que la linea anterior llamando
llamarFuncion ((mensaje) => {
    console.log(mensaje);
});

llamarFuncion(function(mensaje){
    console.log(mensaje);
});

//En ambos casos la funcion directamente dentro del argumento

//8. DOM: puente entre HTML Y JS --> permite interactuar con elementos de tu pagina web

let myDiv = document.getElementById("my-div");
console.log(myDiv);

let myClass = document.getElementsByClassName("div-group");
console.log(myClass);

let div = document.getElementsByTagName("div");
console.log(div);

let parrafo = document.getElementById("parrafo");
console.log(parrafo.innerHTML);
parrafo.innerHTML = "Me llamo Maria"; //Me modifica lo de dentro

//Me imprimira primero el lorem ipsum, pero en el navegador ahora se ve ME llamo maria
// y si lo imprimo despues tb

//9. EVENTOS
// Reaccionar a un botón por ejemplo

let botonPinchado = () => {
    console.log("Has pinchado");
};

//10. JQUERY: permite manipular el dom, mucho más sencilla
// lo cargo al final de la pagina

//$ es una funcion y funciona con selectores css
// Normal: div, p...
// class: .nombre-clase (con un PUNTO)
// iD: #nombre-id (con un HASHTAG)

let parrafo2 = $("#parrafo2");
console.log(parrafo2);

let divGroup = $(".div-group");
console.log(divGroup);

// TENER EN CUENTA QUE DEVUELVE LISTA CON LOS ELEMENTOS

//9.1 JQUERY CON EVENTO
//Con funciones , usar el innerHtml, poner .html:

let parrafo3 = $("#parrafo2");
console.log(parrafo3);
parrafo3.html("Me llamo Juan");

//9.2 JQUERY CON EVENTOS

$("#mi-boton2").on("click", (event) => {
    console.log("boton pinchado")
})


