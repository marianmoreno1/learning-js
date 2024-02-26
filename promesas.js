// let tradicional = 5;
// console.log(tradicional);

// let promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(8);
//     }, 5000);
// }).then((value) => {
//     console.log(value*tradicional);
// });

//resolve --> tomar un valor, llamando a resolve la promesa toma valor
//setTimeout, espera 5000ms (en este caso) y cuando termina ejecuta la funcion

//Esperar a que la promesa se resuelva: función then

//FUNCION ASINCRONA

// let esperarPromesa = async () => {
//     let promesa1 = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(3);
//             }, 1000);
//     });
//     console.log(promesa1);
// }

//APIS

let llamarAGithub = async () => {
    let peticion = await fetch("https://api.github.com/users/marianmoreno1", {
        method: "GET",
    });
    //console.log(peticion);

    if (peticion.status === 200) {
        let datos = await peticion.json();
        console.log(datos);
        console.log(datos.public_repos);
    }    
}
llamarAGithub();
//Quiero que me transformes el contenido de la peticion en un JSON
//pero pongo el AWAIT para que me lo pase una vez lo ha conseguido!!
