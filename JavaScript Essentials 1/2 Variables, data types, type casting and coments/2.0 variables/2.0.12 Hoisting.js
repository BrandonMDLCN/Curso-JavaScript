/*
The JavaScript interpreter scans the program before running it, looking for errors in its syntax, among other things.
It searches for all variable declarations and moves them to the beginning of the range in which they were declared

Eleva todas las variables al inicio del programa o donde fueron declaradas
(to the beginning of the program if they are global, to the beginning of the block if it is a local let declaration, 
or to the beginning of the function if it is a local var declaration).

All this happens, of course, in the interpreter memory, and the changes are not visible in the code.

Hoisting        //        Elevación
Miremos un ejemplo:
*/
var  height  =  180;
console.log(height);    //  ->  180
console.log(weight);    //  ->  Uncaught  ReferenceError:  weight  is  not  defined

/*
In the above example, we forgot to declare the variable weight. 
The result is obvious: we’re referring to a variable (that is, we’re trying to read its contents) which does not exist. 
Something like this must end in an error.

Let's make a small change:
*/
var  height  =  180;
console.log(height);    //  ->  180
console.log(weight);    //  ->  undefined
var  weight  =  70;
console.log(weight);    //  ->  70

/*
This time we declared our variable, but in a rather strange place.
Together with the declaration, we also performed initialization.
This time there are no errors.
Hoisting has worked, and the declaration has been moved by the interpreter to the beginning of the range (in this case the program).

However, the attempt to display the contents of the weight variable give two different results. Why?
Hoisting only concerns the declaration, not initialization.

Solamente eleva la declaración no la inicialización!!!!

Asi que la inicialización a 70 se queda en la linea donde previamente se habia declarado.
So the value 70, which we assign to the weight variable, remains on the line where the original declaration is.


Hoisting unfortunately works a little differently with the let and const declarations.
remember ALWAYS to declare variables before using them.
*/