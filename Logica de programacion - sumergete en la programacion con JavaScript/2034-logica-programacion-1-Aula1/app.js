let numeroSecreto = Math.floor(Math.random()*10+1);
let numeroUsuario =0;
let intentos = 1;
// let palabraVeces = 'vez';

let maximosIntentos = 3; //como buena practica darle una var a intento para poderlo modifcar a gusto y facil

//console.log(numeroSecreto);

while (numeroUsuario!=numeroSecreto) {
    numeroUsuario = parseInt(prompt ('Ingrese el numero entre 1 y 10')); //parseInt para converterlo a tipo dato numerico entero
 
    //console.log(numeroUsuario);
    console.log(typeof(numeroUsuario));

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
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos, el numero era ${numeroSecreto}`);
            break; // rompe el bucle
        }
        
    }

}
