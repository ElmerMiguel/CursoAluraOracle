# Logica de programacion - explorar funciones y listas

## **1. INTERACTUANDO CON HTML**

**Curso: Lógica de programación: explorar funciones y listas**

**Clase: Interactuando con HTML**

- **Objetivo:** Profesionalizar el juego del número secreto usando HTML, arreglos y funciones.
- **Contenido:**
  - Se utilizará el proyecto del juego secreto del curso anterior.
  - Se implementarán mejores prácticas de mercado.
  - Se aprenderán conceptos como arreglos y funciones.

<br>

### Proyecto inicial

**Conectando HTML y JavaScript con el DOM**

- **DOM (Document Object Model):** Representación del HTML que JavaScript puede usar para acceder y manipular elementos de la página web.

- **Incluir JavaScript en HTML:**
  
  - Usar la etiqueta `<script>` con el atributo `src` para indicar la ruta del archivo JavaScript.

- **Seleccionar elementos con `querySelector`:**
  
  - `document.querySelector('selector')`: Selecciona el primer elemento que coincida con el selector.
  - Ejemplo: `document.querySelector('h1')` selecciona el primer elemento `<h1>`.

- **Modificar el contenido de un elemento:**
  
  - `elemento.innerHTML = 'nuevo contenido'`: Cambia el contenido HTML del elemento.

- **Ejemplo:**
  
  ```js
  // Selecciona el elemento h1
  let titulo = document.querySelector('h1');
  
  // Cambia el contenido del h1
  titulo.innerHTML = 'Nuevo título';
  ```

**Recordatorio:**

- El DOM es un puente entre JavaScript y HTML.
- `querySelector` permite seleccionar elementos específicos del HTML.
- `innerHTML` permite modificar el contenido HTML de un elemento.

**El DOM (Document Object Model):**

- **¿Qué es?** El DOM es una representación del HTML de tu página web en forma de árbol. Cada elemento HTML (como `<p>`, `<h1>`, `<button>`, etc.) se convierte en un "nodo" en este árbol.
- **¿Para qué sirve?** El DOM permite a JavaScript acceder y manipular los elementos HTML de tu página web. Puedes cambiar su contenido, estilo, posición, etc.
- **Ejemplo:** Imagina que tienes un párrafo con el texto "Hola mundo". El DOM te permite:
  - **Leer el texto:** Obtener el texto "Hola mundo" del párrafo.
  - **Cambiar el texto:** Reemplazar "Hola mundo" por "¡Hola a todos!".
  - **Agregar texto:** Agregar más texto al párrafo, como " desde JavaScript".
  - **Cambiar el estilo:** Cambiar el color del texto, el tamaño de la fuente, etc.

**`querySelector`:**

- **¿Qué es?** Es un método de JavaScript que te permite seleccionar un elemento HTML específico dentro del DOM.
- **¿Cómo funciona?** Le pasas a `querySelector` un "selector" que describe el elemento que quieres encontrar. Los selectores son similares a los que se usan en CSS.
- **Ejemplo:**
  - `document.querySelector('h1')`: Selecciona el primer elemento `<h1>` de la página.
  - `document.querySelector('.mi-clase')`: Selecciona el primer elemento con la clase "mi-clase".
  - `document.querySelector('#mi-id')`: Selecciona el elemento con el ID "mi-id".

**`innerHTML`:**

- **¿Qué es?** Es una propiedad de un elemento HTML que te permite acceder al contenido HTML dentro de ese elemento.
- **¿Cómo funciona?** Puedes leer el contenido HTML actual de un elemento o cambiarlo por un nuevo contenido.
- **Ejemplo:**
  - `const parrafo = document.querySelector('p');`
  - `const contenidoActual = parrafo.innerHTML;` // Obtiene el contenido HTML actual del párrafo.
  - `parrafo.innerHTML = 'Nuevo contenido';` // Cambia el contenido HTML del párrafo.

**En resumen:**

- El DOM es una representación del HTML que permite a JavaScript interactuar con la página web.
- `querySelector` te ayuda a encontrar elementos específicos dentro del DOM.
- `innerHTML` te permite leer y modificar el contenido HTML de un elemento.

<br>

### Evento a un click y primera funcion

**Interactuando con HTML: Eventos y funciones**

- **Botones:** Elementos interactivos que permiten a los usuarios enviar acciones al sistema.
- **Eventos:** Acciones que ocurren en respuesta a la interacción del usuario, como hacer clic en un botón.
- **JavaScript y eventos:** JavaScript puede gestionar eventos, como el clic en un botón, usando la propiedad `onclick` en la etiqueta HTML.
- **Funciones:** Bloques de código que realizan una tarea específica, puede retornar o no un valor.
- **Declaración de funciones:** Se usa la palabra reservada `function` para declarar una función.
- **Llamada a funciones:** Se llama a una función desde el HTML usando su nombre.

**Ejemplo:**

```html
<button onclick="intentoDeUsuario()">Intentar</button>
```

```js
function intentoDeUsuario() {
  // Código que se ejecuta cuando se hace clic en el botón
  alert("Clic desde el botón");
}
```

**Recordar:**

- Las funciones se declaran usando la palabra reservada `function`.
- Las funciones se llaman desde el HTML usando su nombre.
- La propiedad `onclick` en la etiqueta HTML se usa para ejecutar código JavaScript cuando se hace clic en un botón.
- Todo evento en js empieza con el prefijo "on" -> en o cuando

<br>

 **HTML, CSS y JavaScript: las bases del desarrollo web**

- **HTML (HyperText Markup Language):** Es el lenguaje de marcado que estructura el contenido de una página web. Es como el esqueleto, organizando elementos como títulos, párrafos, imágenes y enlaces.
- **CSS (Cascading Style Sheets):** Es un lenguaje de estilos que se encarga de la presentación y estilización de los elementos de una página web. Controla colores, fuentes, diseños y otros aspectos visuales, dando estilo al contenido.
- **JavaScript:** Es el único lenguaje de programación de los tres. Agrega interactividad y dinamismo a las páginas web, permitiendo crear animaciones, validaciones de formularios y actualizaciones de contenido en tiempo real.

**Por tanto:**

- **HTML:** Estructura el contenido.
- **CSS:** Define el estilo y el diseño.
- **JavaScript:** Agrega funcionalidades dinámicas.

<br>

## **2. Funciones**

### Funciones para asignar texto a elementos HTML

- **Objetivo:** Optimizar el código y hacerlo más reutilizable.
- **Creación de la función:**
  - `asignarTextoElemento(elemento, texto)`: Recibe dos parámetros: el elemento HTML y el texto a asignar.
  - Dentro de la función:
    - Se utiliza `document.querySelector(elemento)` para seleccionar el elemento HTML, no va a haber una etiqueta fija, no va a haber un texto fijo.
    - Se asigna el texto al elemento usando `elementoHTML.innerHTML = texto`.
- **Llamada a la función:**
  - `asignarTextoElemento('h1', 'Juego del número secreto')`: Se pasa el elemento HTML y el texto como parámetros.
- **Beneficios:**
  - Código más limpio y organizado.
  - Mayor eficiencia al reutilizar la función.
  - Facilita el mantenimiento del código. 
  - Al usar parametro el comportamiento de la funcion se va a modificar de acuerdo a lo que reciba.

**Ejemplo:**

```js
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', '1 a 100');
```

<br>

### Generar numero aleatorio

**Función `GenerarNumeroSecreto()`**

- Genera un número aleatorio entre 1 y 10.

- Utiliza la librería `Math` de JavaScript:
  
  - `Math.random()`: Genera un número aleatorio entre 0 y 1 (excluyendo el 1).
  - `Math.floor()`: Redondea un número hacia abajo.

- Código:

```javascript
function GenerarNumeroSecreto() {
  let numeroSecreto = Math.floor(Math.random() * 10) + 1;
  return numeroSecreto;
}
```

**Alcance de las variables**

- **Alcance global:** Las variables declaradas fuera de una función están disponibles en todo el programa.
- **Alcance de bloque:** Las variables declaradas dentro de una función solo están disponibles dentro de esa función.

**`console.log`**

- Muestra el valor de una variable en la consola del navegador.
- Se utiliza para depurar el código y verificar que las funciones están funcionando correctamente.

**Ejemplo:**

```javascript
let numeroSecreto = GenerarNumeroSecreto();
console.log(numeroSecreto);
```

<br>

### Capturar el valor del input:

- **`getElementById`:** Esta función de JavaScript nos permite obtener un elemento HTML por su ID.
- **`document.getElementById("id_del_elemento")`:** Usamos esta sintaxis para acceder al elemento con el ID especificado.
- **`value`:** Para obtener el valor del input, usamos la propiedad `value` del elemento.

**Convertir el valor del input a número:**

- **`parseInt`:** Esta función convierte un string a un número entero.
- **`parseInt(valor_del_input)`:** Usamos esta sintaxis para convertir el valor del input a un número.

**Comparación con el número secreto:**

- **`===`:** El operador de comparación triple igual verifica si dos valores son iguales en valor y en tipo de datos.
- **`valor_del_input === numero_secreto`:** Usamos esta sintaxis para comparar el valor del input con el número secreto.

**Ejemplo:**

```javascript
// Obtener el valor del input
let valorUsuario = document.getElementById("numeroUsuario").value;

// Convertir el valor a número
let numeroUsuario = parseInt(valorUsuario);

// Comparar con el número secreto
if (numeroUsuario === numeroSecreto) {
  // El usuario acertó
} else {
  // El usuario no acertó
}
```

<br>

### **Capturar el valor del input:**

- **`getElementById`:** Esta función de JavaScript nos permite obtener un elemento HTML por su ID.
- **`document.getElementById("id_del_elemento")`:** Usamos esta sintaxis para acceder al elemento con el ID especificado.
- **`value`:** Para obtener el valor del input, usamos la propiedad `value` del elemento.

**Convertir el valor del input a número:**

- **`parseInt`:** Esta función convierte un string a un número entero.
- **`parseInt(valor_del_input)`:** Usamos esta sintaxis para convertir el valor del input a un número.

**Comparación con el número secreto:**

- **`===`:** El operador de comparación triple igual verifica si dos valores son iguales en valor y en tipo de datos.
- **`valor_del_input === numero_secreto`:** Usamos esta sintaxis para comparar el valor del input con el número secreto.

**Ejemplo:**



```javascript
// Obtener el valor del input
let valorUsuario = document.getElementById("numeroUsuario").value;

// Convertir el valor a número
let numeroUsuario = parseInt(valorUsuario);

// Comparar con el número secreto
if (numeroUsuario === numeroSecreto) {
  // El usuario acertó
} else {
  // El usuario no acertó
}
```
