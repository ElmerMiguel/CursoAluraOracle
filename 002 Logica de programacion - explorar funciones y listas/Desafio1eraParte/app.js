let titulo1 = document.querySelector('h1');
titulo1.innerHTML = 'Hora del desafio';

function mostrarEnConsolaClock(){
    console.log('El boton fue clicado');
}

function clickBtnPromt() {
    let ciudad = prompt ('Dame el nombre de una ciudad de Guatemala');
    alert (`Estuve en la ciudad de ${ ciudad} y me acorde de ti`);
}

function btnAlerta() {
    alert('Yo amo JavaScript ❤️')
}

function Suma() {
    let num1 = parseInt(prompt ('Digite el primer numero:'));
    let num2 = parseInt(prompt ('Digite el segundo numero:'));

    let suma;

    suma = num1 + num2;

    alert (`La suma de ${ num1} y ${ num2} es: ${suma}`)
}