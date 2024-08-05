let numeroSecreto = 4;
let numeroUsuario =0;
let intentos = 1;
// let palabraVeces = 'vez';

let maximosIntentos = 5; //como buena practica darle una var a intento para poderlo modifcar a gusto y facil

while (numeroUsuario!=numeroSecreto) {
    numeroUsuario = prompt ('Ingrese el numero entre 1 y 10');
 
    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero es: ${numeroSecreto}. lo hiciste en ${intentos} ${intentos ==1 ? 'vez' : 'veces'}` ); // usamos ternario para mostrar si es vez o veces
    } else {
        if(numeroUsuario > numeroSecreto) {
            alert('EL numero secreto es menor');
        } else {
            alert('el numero es mayor');
        }
        // incrementamos el contador cuando no acierta
        // intentos=intentos+1;
        // intentos += 1;
        intentos ++;

        // palabraVeces = 'veces';

        if(intentos > maximosIntentos) { //uso de la var de maximoIntentos que rompe el while
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break; // rompe el bucle
        }
        
    }

}
