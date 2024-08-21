// document.querySelector('h1'); //selecciona h1 en html, lo toma como parametro

// lo mejor es manejarlo por varialbe

let titulo = document.querySelector('h1'); //es un objeto
titulo.innerHTML = 'Juego del numero secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';

// funcion que de onclick intentar en html
function intentoDeUsuario() {
    alert ('click desde la funcion, el boton');
}