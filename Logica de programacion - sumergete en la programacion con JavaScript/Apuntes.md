# Logica de progra con JS

<br>

## **1. INICIANDO CON JS**

<br>

### variables

Un proyecto web basico se basa en estas 3 partes

- app.js -> es donde va todo de js
- style.css -> donde van los estilos
- index.html -> el esqueleto de la pagina

<br>

- img -> es la carpeta donde van imagenes, etc

<br>

*Los diferentes archivos que componen un proyecto web: ***index.html***, ***style.css*** y ***app.js***. 
El archivo ***app.js*** es donde se trabajará la lógica de programación en JavaScript.*

<br>

Para un hola mundo o mensaje en JS se usa alert, y se puede usar ' o " , y se puede poner ; o no, pero se recomienda hacerlo, por buenas practicas. 

    alert("Hola mundo");

un head en html son los metadatos, y en el body es donde va todos los datos del html
dentro de esto podemos importar el js o tambien del principio, tiene ventajas de cada modo.

para importar el js en el html se hace con

    <script src="app.js"></script>

donde src es el origen del js

<br>

**promt**

nos sirve para entrada de dato, espacio de rellenar

    prompt("Cual es el numero?"); //espacio de entrada

<br>

**JavaScript tiene tres tipos de declaraciones de variables.**

- **var** : Declara una variable, opcionalmente la inicia a un valor.

- **let** : Declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor.

- **const** : Declara un nombre de constante de solo lectura y ámbito de bloque.

<br>

En este curso unicamente usaremos **let**

<br>

- --

### Condición if

    console.log(numeroUsuario); 

lo usamos para mostrar los datos por consola, seria como un print, pero para js.

- ---

## **2. CONDICIONALES Y CONCATENACION**

### Comentarios y else

Los comentarios se hacen con *//*

*else* es para la condicion no se cumple

<br>

### Template Strings

Las plantillas de cadena, mejor conocidas como **template strings,**son una forma más fácil de crear:

- Cadenas con variables dentro (interpolación).
- Generar cadenas multilínea.
- Ejecutar expresiones, funciones y etiquetados.

Las template strings se escriben entre comillas invertidas `` , y permiten incluir variables dentro de la cadena de texto usando la sintaxis   

    ${variable}`.   

Esto permite concatenar el texto "Acertaste, el número es:" con el valor de la variable numeroUsuario para mostrar un mensaje más informativo al usuario.
Además, se menciona que dentro de las llaves ${} se puede colocar código JavaScript más complejo, no solo variables.

<br>

### Live server

Es una exension para visualizar en tiempo real nuestra web. Funciona sin una alerta abierta.

<br>

- ---

## **3. LOOPS Y TENTATIVAS**

### While

Los "while" en JavaScript. Estos bucles nos permiten repetir un bloque de código mientras una condición sea verdadera.

<br>

### Contador de intentos.

para realizar un contador, podemos declarar primero la variable, luego ir incrementado su valor en cada iteracion, en este caso, como: 

    intentos=intentos+1;

Saber cómo trabajar con bucles de repetición, como el 'while', es esencial en la programación. Los bucles permiten automatizar tareas repetitivas y manejar grandes cantidades de datos de manera eficiente.

Sin embargo, es importante utilizarlos con precaución para evitar bucles infinitos (cuando la condición nunca se vuelve falsa, lo que puede bloquear el programa).

Siempre se recomienda tener una lógica que eventualmente haga que la condición se vuelva falsa para que el bucle termine correctamente.

<br>

### Operadores logicos.

- **AND (&&)**

El operador AND, representado por el símbolo "&&", se utiliza para combinar dos condiciones y evaluar si ambas son verdaderas. Si ambas condiciones son verdaderas, el resultado será... verdadero. De lo contrario, lógicamente será falso. Por ejemplo:

```js
let edad = 25;
let tieneLicencia = true;

// si la edad es mayor de 18 y tiene una licencia...
if (edad > 18 && tieneLicencia) {
  console.log("Puede conducir!");
} else {
  console.log("No puede conducir!");
}
```

- **OR( | | )**

El operador OR, representado por los símbolos "||", se utiliza para verificar si al menos una de las condiciones es verdadera. Si una de las condiciones es verdadera, el resultado será verdadero. Si ambas son falsas, el resultado será falso. Aquí tienes un ejemplo: let tieneManzana = false; let tieneBanana = true;

```js
// si tiene manzana o tiene banama…
if (tieneManzana|| tieneBanana) {
  console.log("Tienes frutas!");
} else {
  console.log("No tienes frutas.");
}
```

- **Otros tipos de operadores lógicos**

| **Operador** | **Nombre**    | **Ejemplo** | **Resultado**                       |
|:------------:|:-------------:|:-----------:| ----------------------------------- |
| ==           | Igual         | A == B      | Verdadero si A es igual a B         |
| !=           | Diferente     | A != B      | Verdadero si A no es igual a B      |
| <            | Menor que     | A < B       | Verdadero si A es menor que B       |
| >            | Mayor que     | A > B       | Verdadero si A es mayor que B       |
| <=           | Menor o Igual | A <= B      | Verdadero si A es menor o igual a B |
| >=           | Mayor o igual | A >=B       | Verdadero si A es mayor o igual a B |

**Operadores Logicos**

| **Operador** | **Nombre** | **Ejemplo**         | **Resultado**                                  |
|:------------:|:----------:|:-------------------:| ---------------------------------------------- |
| &&           | Y / AND    | (A > B) && (B == C) | Verdadero si A es mayor que B y B es igual a C |
| ll           | O / OR     | (A > B) ll (B == C) | Verdadero si A es mayor que B o B es igual a C |
| !            | NEGACION   | !(A ==B)            | Verdadero si A NO es igual a B                 |

<br>

- ---

## **4. BUENAS PRACTICAS DE PROGRAMACION**

### Break

Break nos permite salir de un bucle while de forma forzada, incluso si la condición del bucle aún no se ha cumplido.  Un ejemplo pordria ser: 

```js
if(intentos > 3) { 
    alert('Llegaste al numero maximo de intentos');
    break; // rompe el bucle
    }
```

### Operadores ternarios

**Buenas prácticas en programación (JavaScript)**

- **Variables en lugar de valores literales:**
  
  - Define variables para valores que pueden cambiar, como el número máximo de intentos.
  - Ejemplo: `maximosIntentos = 3;`

- **Template strings:**
  
  - Usa comillas invertidas ( `` ) para incluir variables y código JavaScript dentro de cadenas de texto.
  
  - Ejemplo:   
    
    ```js
    console.log(Llegaste al número máximo de ${maximosIntentos} intentos);
    ```

- **Incrementar contadores:**
  
  - Usa `intentos++` para incrementar un contador en 1.
  - Es más conciso que `intentos += 1` e  `intentos = intentos + 1` .

- **Operador ternario:**
  
  - Simplifica condiciones con una sintaxis abreviada.
  
  - Sintaxis: `condición ? valorSiVerdadero : valorSiFalso`
  
  - Ejemplo: 
    
    ```js
    console.log(Intentos: ${intentos > 1 ? "veces" : "vez"});
    ```

### Math.random()

**Generación de números aleatorios en JavaScript**

- **`Math.random()`:** Genera un número decimal aleatorio entre 0 (incluido) y 1 (excluido).
- **Para obtener un número aleatorio entre 1 y 10:**
  - Multiplica `Math.random()` por 10.
  - Usa `Math.floor()` para obtener el número entero más cercano hacia abajo.
  - Suma 1 al resultado.

**Ejemplo:**

```js
Math.floor(Math.random() * 10) + 1;
```

**Explicación:**

1. `Math.random() * 10`: Genera un número decimal aleatorio entre 0 y 9.999999.
2. `Math.floor(...)`: Convierte el número decimal a un entero, redondeando hacia abajo.
3. `... + 1`: Suma 1 al resultado para obtener un número entre 1 y 10.

### Math.random() en nuestro codigo

**Buenas prácticas en programación: `Math.random()` en nuestro código**

- **Generar números aleatorios:**
  
  - Usar `Math.random()` para generar un número aleatorio entre 0 y 1.
  - Usar `Math.floor()` para redondear el número aleatorio al entero más cercano.
  - Ejemplo: `Math.floor(Math.random() * 10) + 1` genera un número aleatorio entre 1 y 10.

- **Tipos de datos:**
  
  - `prompt()` devuelve una cadena de texto (*string*).
  - Usar `parseInt()` para convertir una cadena de texto a un número entero.
  - Ejemplo: `parseInt(prompt("Escribe un número: "))` convierte la entrada del usuario a un número entero.

- **Comparación de tipos de datos:**
  
  - Usar el operador `===` para comparar valores y tipos de datos.
  - Tener cuidado con los tipos de datos al comparar o realizar operaciones matemáticas.
