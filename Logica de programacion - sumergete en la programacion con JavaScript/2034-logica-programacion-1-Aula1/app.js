let numeroSecreto = 4;
let numeroUsuario =0;
let intentos = 1;
let palabraVeces = 'vez';

while (numeroUsuario!=numeroSecreto) {
    numeroUsuario = prompt ('Ingrese el numero entre 1 y 10');

    //alert ("Hola mundo"); //alerta, imprimir

    //prompt("Ingrese un numero: "); //espacio de pregunta
    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero es: ${numeroSecreto}. lo hiciste en ${intentos} ${palabraVeces}` );
    } else {
        if(numeroUsuario > numeroSecreto) {
            alert('EL numero secreto es menor');
        } else {
            alert('el numero es mayor');
        }
        intentos=intentos+1;
        palabraVeces = 'veces';
        
    }

}
