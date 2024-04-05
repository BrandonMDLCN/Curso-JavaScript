/*
En la mayoría de los lenguajes de programación, una variable debe declararse antes de su uso, y JavaScript no es una excepción.

# they must not start with a digit. 
There is a list of reserved words that cannot be used as variable names

# JavaScript interpreter distinguishes between lower-case and upper-case letters, also in variable names, so names such as test, Test, or TEST will be treated as different.
Es decir que es sensible a mayusculas y minusculas

-------Palabras que no se pueden usar como variables-------
abstract	arguments	await	boolean
break	byte	case	catch
char	class	const	continue
debugger	default	delete	do
double	else	enum	eval
export	extends	false	final
finally	float	for	function
goto	implements	if	import
in	instanceof	int	interface
let	long	native	new
null	package	private	protected
public	return	short	static
super	switch	synchronized	this
throw	throws	transient	true
try	typeof	var	void
volatile	while	with	yield

--------------------------------------------------------------
For the declarations, we use the keywords "var" or "let" for variables and "const" for constants.
*/
var height;
console.log(height); // -> undefined
console.log(weight); // -> Uncaught ReferenceError: weight is not defined

/*
The first line is the variable declaration (we can see the var keyword). 
This declaration means that the word height will be treated as the name of the container for certain values.
En la segunda linea se quiere imprimir pero como no tiene valor aparece como indefinido.
(the interpreter knows this variable, but it has no value yet – the value is undefined).
La tercera linea imprime "weight" pero marca error por que no esta declarado.


let y var no son lo mismo
The keyword var comes from the original JavaScript syntax, and the keyword let was introduced much later.
Therefore, you will find "var" more in older programs. Currently, it is highly recommended to use the word "let"

One of the basic differences in the use of "var" and "let" is that "let" prevents us from declaring another variable with the same name. 
Using "var" allows you to re-declare a variable, which can potentially lead to errors in the program execution.
*/
var height;
var height;
console.log(height); // -> undefined

/*
The example above demonstrates the possibility of re-declaring a variable using the keyword var.
it will not cause an error, but in more complex programs a redeclaration, especially by accident, may no longer be without consequences.

When declaring with let, the interpreter checks whether such a variable has already been declared, no matter if let or var is used in the previous declaration.
*/
let height;
let height; // -> Uncaught SyntaxError: Identifier 'height' has already been declared
console.log(height);

//So use let to declare variables, if only because you don't want to accidentally declare a variable again.