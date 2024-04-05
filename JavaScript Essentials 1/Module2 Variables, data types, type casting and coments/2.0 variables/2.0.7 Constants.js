/*
The const keyword is used to declare containers similar to variables. Such containers are called constants. 
Constants can store values that do not change during the lifetime of a program, such as numbers or strings.

Once values have been entered into them during initialization, they can no longer be modified. 
the following declaration of the greeting constant is correct:
*/
const  greeting  =  "Hello!";

//But this next one definitely causes an error:
const  greeting;  //  ->  Uncaught  SyntaxError:  Missing  initializer  in  const  declaration
greeting  =  "Hello!";

//As we said, a change in the constant is impossible. This time the declaration is correct, 
//but we try to modify the value stored in the constant.
const  greeting  =  "Hello!";
greeting  =  "Hi!";  //  ->  Uncaught  TypeError:  Assignment  to  constant  variable.

//The main purpose of a constant is to eradicate the possibility of accidentally changing a value stored in it.
//allows the JavaScript engine to optimize the code, which may affect its performance.