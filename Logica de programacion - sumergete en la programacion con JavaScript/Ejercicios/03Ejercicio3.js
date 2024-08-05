/*
1. Crea un contador que comience en 1 y vaya hasta 10 
usando un bucle 'while'. Muestra cada número.

--------------

let contador = 1;

while(contador <=10) {
    //alert(contador);
    console.log(contador);
    contador++;
}
*/

/*
2. Crea un contador que comience en 10 y vaya hasta 0 
usando un bucle 'while'. Muestra cada número.
-------------

let contador = 10;

while(contador >=0) {
    console.log(contador);
    contador--;
}
*/


/*
3.Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 
hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/

let numero = prompt("Ingrese un numero");
let contador=0;

while(contador <= numero){ // se ejecutara mientras el contador sea menor o igual a numero y cuando ya no se cumpla se detendra
    alert(contador)
    console.log(contador);
    contador ++;
}

/*  
let numero = (prompt("Ingrese un numero"));
let contador = 0;

while(contador <= numero) {
    console.log(contador);
    contador++;
}
*/
