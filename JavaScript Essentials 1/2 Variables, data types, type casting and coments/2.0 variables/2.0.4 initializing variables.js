let height = 180;
let anotherHeight = height;
let weight;
console.log(height); // -> 180
console.log(anotherHeight); // -> 180
weight = 70;
console.log(weight); // -> 70

//If you specify a variable name in console.log, the interpreter recognizes it and displays its value. 
//If you put the same name in quotation marks, it will be treated as plain text, and displayed as such.
console.log(height); // -> 180
console.log("height"); // -> height

h = 180;
console.log(h);
// Para arriba
// se puede utilizar una variable sin declararlo previamente como es en el caso de "h"
// esto puede lidear a ambiguedades y errores potenciales

"use strict";
height = 180; // -> Uncaught ReferenceError: height is not defined
console.log(height);
// Para arriba
//At the beginning of our code, we’ve added "use strict";. This statement has radically changed the behavior of the interpreter.
// Si pones "use strict"; al principio del archivo cambiara el modo del interpretador
// no nos dejara avanzar sin declarar previamente

//We use it when we want to force the interpreter to behave according to modern JavaScript standards.
// para estandares acutuales siempre se tiene que usar esa sentencia al inicio ""use strict";".


/* ------------------------------------------------------------------------------ */
/*                       2.0.6 Changing variable values                          */
/* ---------------------------------------------------------------------------- */

//Changes are made by assigning a new value to the variable, which overwrites the previous one.
let steps = 100;
console.log(steps); // -> 100
steps = 120; // -> 120
console.log(steps);
steps = steps + 200;
console.log(steps); // -> 320

//Variables in the JavaScript language are untyped (or, to be more precise, they are weakly and dynamically typed).
// las variables son dinamicas pueden ser cualquier valor en este lenguaje
let greeting = "Hello!";
let counter = 100;

console.log(greeting); // -> Hello!
greeting = 1;
console.log(greeting); // -> 1

greeting = true;
console.log(greeting); // -> true
//Se puede cambiar el valor  de una variable por otro tipo de dato
//JavaScript allows us to easily replace the greeting variable with a value whose type is different from the one originally stored there.
//JavaScript goes one step further and not only allows us to change the types of values kept in a variable, but it also performs their implicit conversion if necessary

//Let's restore the original value of the greeting variable and then add the value of the counter variable to it.
greeting = "Hello!";
greeting = greeting + counter;
console.log(greeting); // -> Hello!100
//The interpreter will check the type of value stored in the greeting variable and convert the value 
//from the counter variable to the same type before performing an addition operation.

//Pero si intentamos asignarle un tipo de dato distinto a la original generará un error
try {
    greeting = [5, 7];
} catch (e) {
    console.error("Oops!", e); // Oops! TypeError: Assignment to read only property 'greeting' of object '#<Object>'
    console.error("An error occurred: ", e);
}

//Para evitarlo podemos hacer lo siguiente
if (typeof greeting === 'string'){
    greeting = [greeting, "World!"].join(' ');
    console.log(greeting); //-> Hello World!
} else {
    console.log(`The variable is not of type string`);
}

//También se pueden crear nuevas variables con el mismo nombre que existentes pero en diferentes scopes o contextos
//También se pueden utilizar operadores para realizar cálculos y asignarles los resultados a las variables
counter += 50; //Es equivalente a counter = counter + 50
console.log(counter); //->  150

/* -------------------------------------------------------------------------- */
/*                             Operador de incremento                                          */
/* -------------------------------------------------------------------------- */
counter++; //Es equivalente a counter = counter + 1
console.log(counter); //->    151

++counter; //Es equivalente a counter = counter + 1; counter = counter + 1
           //En este caso devuelve el valor antes del incremento
console.log(counter); //->        152

/* -------------------------------------------------------------------------- */