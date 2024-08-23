// document.querySelector('h1'); //selecciona h1 en html, lo toma como parametro

// lo mejor es manejarlo por varialbe

//let parrafo = document.querySelector('p'); -> lo usamos en el parametro
// parrafo.innerHTML = 'Indica un numero del 1 al 10'; -> lo usamos para parametro

let numeroSecreto = generarNumeroSecreto();



function asignarTextoElemento(elemento, texto) { //funcion recibe parametros
    let elemetoHTML = document.querySelector(elemento); //es un objeto --- usar los parametros como si fueran variables
    elemetoHTML.innerHTML = texto; // usar parametro como si fuera variable
    return;
}

// funcion que de onclick verificarIntento en html
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); //obtener el valor por id
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));

    console.log(numeroUsuario);
    console.log(typeof(numeroUsuario));

    console.log(numeroUsuario === numeroSecreto); //compara si son iguales y retorna true o false
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1; // solo reotrnar y no crear variable asi lo retorna de una vez
    
}

asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p','Indica un numero del 1 al 10');