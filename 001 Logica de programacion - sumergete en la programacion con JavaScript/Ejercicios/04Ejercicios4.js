// 1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log('Bienvenido');

// 2. Crea una variable llamada "nombre" y asignale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre = 'Elmer';
console.log(`Hola, ${nombre}`);
// console.log('Hola, ' + nombre);

// 3. Crea una variable llamada "nombre" y asignale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
alert(`¡Hola ${nombre}!`);

// 4. Utiliza prompt y haz la siguiente pregunta: ¿Cual es el lenguaje de programacion que mas te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let preguntaLenguaje = prompt('Cual es tu lenguaje de programacion favorito?')
console.log(preguntaLenguaje);

// 5. Crea una variable llamada "valor1" y otra llamada "valor2", asignandoles valores numericos de tu eleccion. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
console.log('Suma');
let valor1 = 4;
let valor2 = 2;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);

// 6. Crea una variable llamada "valorr1" y otra llamada "valorr2", asignandoles valores numericos de tu eleccion. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
console.log('resta');
let valorr1 = 17;
let valorr2 = 4;
let resultadoo = valorr1 - valorr2;
console.log(`La resta de ${valorr1} y ${valorr2} es igual a ${resultadoo}.`);


// 7 Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
let edad = parseInt(prompt('Ingrese su edad:'));
if (edad >= 18) {
    console.log('Es Mayor de edad');
} else {
    console.log('Es menor de edad');
}

// 8. Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let numero = parseInt(prompt('Ingrese un numero: '));

if (numero > 0) {
    alert(`${numero} es positivo`);
} else if (numero < 0) {
    alert(`${numero} es negativo`);
} else {
    alert(`${numero} es cero`);
}

// 9. Utiliza un bucle while para mostrar los numeros del 1 al 10 en la consola.
let contador = 1;
while(contador <= 10) {
    console.log(contador);
    contador ++;
}

// 10. Crea una variable "nota" y asignale un valor numerico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
let nota = parseInt(6);
if (nota >= 7) {
    console.log('aprobado')
} else {
    console.log('reprobado');
}

// 11. Utiliza Math.random para generar cualquier numero aleatorio y muestra ese numero en la consola.
let numRandom = Math.random();
console.log(numRandom);

// 12. Utiliza Math.random para generar un numero entero entre 1 y 10 y muestra ese numero en la consola.
let numRandom1y10 = Math.floor(Math.random()* 10 + 1);
console.log(numRandom1y10);

// 13. Utiliza Math.random para generar un numero entero entre 1 y 1000 y muestra ese numero en la consola.
let numRandom1y1000 = Math.floor(Math.random()* 1000 + 1);
console.log(numRandom1y1000);