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