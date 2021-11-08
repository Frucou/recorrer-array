"use strict";
/**
 * document.querySelectorAll  Para seleccionar los artículos
 * document.querySelector Para los botones
 * 
 * nodo.addEventListener
 * 
 * for(){
 * }
 * 
 * while(){
 * }
 * 
 * do{
 * }while();
 */

// Variables
// Capturo las etiquetas articles
const a1 = document.querySelectorAll(".a1");
const a2 = document.querySelectorAll(".a2");
const a3 = document.querySelectorAll(".a3");

let numbers = [1, 2, 3, 4];



// Funciones
const ordenarFor = (evento) => {
    evento.preventDefault(); // Esto evita la propagación del evento.
    // En este caso que el enlace vaya a su destino (href)

    // Capturar el nodo párrafo donde escribir el nombre
    // console.log(a1[1].firstElementChild.nextElementSibling) 
// esto captura/coge un elemento(p) hermano de h2 e hijo de article(a1)
    let p1 = a1[1].firstElementChild.nextElementSibling;
    let p2 = p1.nextElementSibling;

    p1.innerHTML = "<h6 style=\"color: red;font-weight: bold\">For: orden ascendente</h6>";
    for (let i = 0; i < numbers.length; i++) {
        p1.innerHTML += `<div>Posición ${i}: ${numbers[i]}</div>`;
    }

    p2.innerHTML = "<h6 style=\"color: red;font-weight: bold\">For: orden descendente</h6>";
    for (let i = numbers.length-1; i >= 0; i--) {
        p2.innerHTML +=`<div>Posición ${i}: ${numbers[i]}</div>`;
    }

}


const ordenarWhile = (e) => {
    e.preventDefault();

    // Captura de parrafos
    let p3 = a2[1].firstElementChild.nextElementSibling;
    let p4 = p3.nextElementSibling;

    p3.innerHTML = "<h6 style=\"color: red;font-weight: bold\">While: orden ascendente</h6>"
    let x = 0;
    while (x < numbers.length) {
        p3.innerHTML += `<div>Posición ${x}: ${numbers[x]}</div>`;
        x++; 
    }

    p4.innerHTML = "<h6 style=\"color: red;font-weight: bold\">While: orden descendente</h6>"
    x = numbers.length-1;
    while (x >= 0) {
        p4.innerHTML += `<div>Posición ${x}: ${numbers[x]}</div>`;
        x--; 
    }
}


const ordenarDoWhile = (f) => {
    f.preventDefault();
    
    // Captura de parrafos
    // let p5 = a3[1].firstElementChild.nextElementSibling;
    // let p6 = p5.nextElementSibling;

    // p5.innerHTML = "<h6 style=\"color: red;font-weight: bold\">While: orden ascendente</h6>"
    // let x = 0;
    // do {
    //     p5.innerHTML += `<div>Posición ${x}: ${numbers[x]}</div>`;
    //     x++; 
    // } while (x < numbers.length)

    // p6.innerHTML = "<h6 style=\"color: red;font-weight: bold\">While: orden descendente</h6>"
    // x = numbers.length-1;
    // do {
    //     p6.innerHTML += `<div>Posición ${x}: ${numbers[x]}</div>`;
    //     x--; 
    // } while (x >= 0)


    // E6 for of
    // for(let valor of numbers) {
    //     alert(valor)
    // }

    // Método forEach
    numbers.forEach(
        (valor, indice, array) => {
            console.log(`${valor}-${indice}-Array:[${array}]`);
        }
    );

}




// Escuchar botón, sin necesidad de guardar en variable
document.querySelector("#b1")
    .addEventListener(
        "click",
        ordenarFor
    );

document.querySelector("#b2")
    .addEventListener(
        "click",
        ordenarWhile
        );

document.querySelector("#b3")
    .addEventListener(
        "click",
        ordenarDoWhile
    );