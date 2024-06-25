let numeroSecreto = 4;
let numeroUsuario = prompt ('Ingrese el numero entre 1 y 10');

//alert ("Hola mundo"); //alerta, imprimir

//prompt("Ingrese un numero: "); //espacio de pregunta
console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste, el numero es: ${numeroSecreto}` );
} else {
    alert('No arcertaste el numero');
}
