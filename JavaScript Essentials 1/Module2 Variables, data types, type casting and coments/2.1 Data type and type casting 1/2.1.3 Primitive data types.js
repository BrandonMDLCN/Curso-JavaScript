/*
In JavaScript, there are six primitive (or simple) data types: Boolean, Number, BigInt, String, Symbol, and undefined.

Boolean, Number, BigInt, String, Symbol, and undefined.

Additionally, the primitive "null" value is also treated as a separate type.
Let's try to take a closer look at primitives.
*/


/*-----------------------------------------------*/
/*                    Boolean                 */
/*-----------------------------------------------*/
/*
The Boolean is a logical data type.
It can only take one of two values: true or false.

Booleans are also used as what is commonly referred to as a flag, 
a variable that signals something that can be either present or absent, enabled or disabled, etc.

booleans should have clear and informative names.
boolean flag names are prefixed with "is", to show the intent of checking this for true/ false values.
*/
let  isDataValid  =  true;
let  isStringTooLong  =  false;
let  isGameOver  =  false;
continueLoop  =  true;
   
console.log(false);  //  ->  false
console.log(typeof  false);  //  ->  boolean
console.log(isDataValid);  //  ->  true
console.log(typeof  isDataValid);  //  ->  boolean


/*-----------------------------------------------*/
/*                  Number                      */
/*-----------------------------------------------*/
/*
The Number is a numeric data type.
It can be any whole number, including negative numbers. 
Numbers in JavaScript can represent both integer (whole number) and floating point (decimal) values.
There are no upper limits on how large an integer can be represented by a Number.
However, there is an upper limit on the size of a Number when it represents a decimal value. This limit is determined by the precision and range

This is the main numeric type in JavaScript that represents both real numbers (e.g. fractions) and integers.

the integer values should be limited in JavaScript to the range from -(253 – 1) to (253 – 1).

Numbers allow for all typical arithmetic operations, like addition, subtraction, multiplication, and division.
*/
const  year  =  1991;
let  delayInSeconds  =  0.00016;
let  area  =  (16  *  3.14);
let  halfArea  =  area  /  2;
   
console.log(year);  //  ->  1991;
console.log(typeof  year);  //  ->  number;

/*
Numbers in JavaScript are usually presented in decimal form, which we are used to in everyday life.
However, if a literal describing a number is preceded by an appropriate prefix, 
we can present it in hexadecimal (0x…), octal (0o...) or binary (0b...) form.

We can also write numbers in exponential form, so for example, 
instead of 9000, we can write 9e3, and instead of 0.00123, we can write 123e-5. 
*/
let  a  =  10;  //  decimal  -  default  
let  b  =  0x10;  //  hexadecimal  
let  c  =  0o10;  //  octal  
let  d  =  0b10;  //  binary  
   
console.log(a);  //  ->  10  
console.log(b);  //  ->  16  
console.log(c);  //  ->  8  
console.log(d);  //  ->  2  
   
let  x  =  9e3;
let  y  =  123e-5;
console.log(x);  //  ->  9000
console.log(y);  //  ->  0.00123

/*
In addition to regular numbers in JavaScript, we use three additional special values, which are: Infinity, -Infinity and NaN (not a number). 
The first two do not require any additional explanations – they are exactly what we know from mathematics.

The last one, NaN, is not so much a numerical value as a notification that some arithmetic action (or mathematical function) 
could not be performed because the argument is either not a number, or cannot be converted to a number.
*/
let  e  =  1  /  0;
let  f  =  -Infinity;
   
console.log(e);  //  ->  Infinity
console.log(f);  //  ->  -Infinity
console.log(typeof  e);  //  ->  number
console.log(typeof  f);  //  ->  number
   
let  s  =  "it's  definitely  not  a  number";
let  n  =  s  *  10;
console.log(n);  //  ->  NaN
console.log(typeof  n);  //  ->  number


/*-----------------------------------------------*/
/*                  BigInt                  */
/*-----------------------------------------------*/
/*
The BigInt data type is used to represent large numbers.
The BigInt type is not used too often. It allows us to write integers of virtually any length.

For almost any normal numerical operations, the Number type is enough, but from time to time we need a type that can handle much bigger integers.

We can use mathematical operations on BigInts in the same way as on Numbers, but there is a difference when dividing. 
As the BigInt is an integer type, the division result will always be rounded down to the nearest whole number.

BigInt literals are numbers with the ...n suffix.
*/
let  big  =  1234567890000000000000n;
let  big2  =  1n;
   
console.log(big);  //  ->  1234567890000000000000n
console.log(typeof  big);  //  ->  bigint
   
console.log(big2);  //  ->  1n
console.log(7n  /  4n);  //  ->  1n

//You cannot use other types in arithmetic operations on BigInts, that is, 
//you cannot add a BigInt and a Number to each other (this will generate an error).

let  big3  =  1000n  +  20;  
//  ->  Uncaught  TypeError:  Cannot  mix  BigInt  and  other  types,  use  explicit  conversions
/*
The BigInt does not have its own equivalent of Infinity or NaN values.
In the case of the Number type, such values appear when dividing by 0 (Infinity result) 
or trying to perform an arithmetic action on a value that is not a number (NaN result). 
In the case of the BigInt type, such actions will generate an error.
*/
let  big4  =  1000n  /  0n;  //  ->  Uncaught  RangeError:  Division  by  zero


/*-----------------------------------------------*/
/*                  String                  */
/*-----------------------------------------------*/
/*
The String data type is used to represent textual data.
Strings are sequences of Unicode characters.
A string can contain one or more characters, including letters, digits, and special characters.

To create a new string, you need to enclose some or all of the characters within quotes.
There are two ways to do this: using single quotes (' ') or double quotes (" ").
If your string contains both kinds of quote marks, you must use another set of quotes around it.

The String type represents a sequence of characters forming a piece of text.
Common operations on texts include concatenation, extraction of the substring, and checking the length of the string.

Strings, like other primitives, are immutable, so when we want to change even one letter in a string, in reality, we create a new string.
*/
let  country  =  "Malawi";
let  continent  =  'Africa';
   
console.log(country);  //  ->  Malawi
console.log(typeof  country);  //  ->  string
console.log(continent);  //  ->  Africa
console.log(typeof  continent);  //  ->  string
/*
If you use double quotes to mark a string, you can place single quotes inside the string, and they will be treated as ordinary characters. 
This will also work in the opposite situation
*/
let  message1  =  "The  vessel  'Mars'  called  at  the  port.";
let  message2  =  'Cyclone  "Cilida"  to  pass  close  to  Mauritius.';
   
console.log(message1);  //  ->  The  vessel  'Mars'  called  at  the  port.
console.log(message2);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.

/*
If you want to put a single or double quote inside the string, you can also use the escape character – backslash.
A quote mark preceded by the \ (backslash) character will be interpreted as ordinary characters that are part of our string, 
not parts of a literal construction.
*/
let  message3  =  'The  vessel  \'Mars\'  called  at  the  port.';
let  message4  =  "Cyclone  \"Cilida\"  to  pass  close  to  Mauritius.";
   
console.log(message3);  //  ->  The  vessel  'Mars'  called  at  the  port.
console.log(message4);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.
   
let  path  =  "C:\\Windows";
console.log(path);  //  ->  C:\Windows

/*
Trying to perform arithmetic operations on String type values, such as subtraction, multiplication, or division, will usually end in an error. 
More precisely, the NaN value will be returned as a result of the action.

the arithmetic operators -, *, or \, the JavaScript interpreter tries to interpret the given values as numbers, or convert them into numbers.

So if the character strings consists of digits, the automatic conversion will be successful 
and we will get the result of the arithmetic action as a Number type value.

If the character string cannot be interpreted as a number (and converted) we will get the NaN result.
*/
let  pat  =  "C:\\Windows"  -  "Windows";
console.log(pat);  //  ->  NaN
   
let  test  =  "100"  -  "10";
console.log(test);  //  ->  90
console.log(typeof  test);  //  ->  number

/*
A very convenient mechanism that was introduced to JavaScript in 2015 is string interpolation.
It allows you to treat a character string as a template, in which you can place values in selected places, such as those taken from variables.
Such a literal is created using backticks (or grave accents) instead of quotation marks. 
The places where values are inserted are marked with curly brackets preceded by a $ sign.

Un mecanismo muy práctico que se introdujo en JavaScript en 2015 es la interpolación de cadenas. 
Permite tratar una cadena de caracteres como una plantilla, en la que se pueden colocar valores en lugares seleccionados, 
como los tomados de variables. 
Un literal de este tipo se crea utilizando tildes (o acentos graves) en lugar de comillas. 
Los lugares donde se insertan los valores se marcan con llaves precedidas del signo $.
*/
let  countr  =  "Malawi";
let  continen  =  "Africa";

let  sentence  =  `  ${countr}  is  located  in  ${continen}.`;
console.log(sentence);  //  ->  Malawi  is  located  in  Africa.

/*
Unfortunately, they require two new concepts: methods (and indirectly, objects) and autoboxing.

A method is a special kind of function that belongs to an object.
Objects are complex data types, which can consist of many values (stored in properties) and methods.

If you want to call the method of an object, you write the name of the method after a dot.

All data of primitive types such as Number, BigInt, Boolean, or String have corresponding objects to which they can be converted.
Each of these objects will have methods designed for a specific data type.

we come to another concept, that is, autoboxing.

/*------------Autoboxing.------------*/
/*
If a dot appears after a literal representing a primitive type, or after a variable containing this type of data
the JavaScript interpreter tries to treat this value as an object and not a primitive.
For this purpose, it converts the primitive to the corresponding object on the fly, which has the appropriate methods (i.e. it performs autoboxing).
*/
let  river  =  "Mekong";
let  character  =  river.charAt(2);
console.log(character);  //  ->  k

/*
In the variable river, we store the primitive of a String type.
In the next line, we refer to this variable, writing a dot after its name and the name of one of the methods – charAt (a method of the String class object).

Although the primitive has no methods that can be called, 
the interpreter temporarily converts this value to a suitable object that already has such methods.
One of these methods is charAt, which we now call.

Es decir que no puedes utilizar los metodos sin antes convertir  el valor primitivo a un objeto.

After the operation is completed, the interpreter removes the temporary object. So from our point of view, 
it looks like we just called a method on a given primitive type.

Commonly used string methods and properties (i.e. named values related to the object) are:

length: property, returns the number of characters in a string;

charAt(index): method, returns the character at the "index" position in the string (indexes start from 0);

slice(beginIndex, [optional] endIndex): method, returns a new string that is created from the characters between beginIndex (included)
and endIndex (excluded); if endIndex is omitted, then the new string is from beginIndex to the end of the string;

split(separator, [optional] limit): method, splits the string into substrings whenever a separator is found in that string, 
and returns an array of those substrings (we will say a few words about arrays in a moment), 
while an optional limit limits the number of substrings added to the list.
*/
let  str  =  "java  script  language";
   
console.log(str.length);  //  ->  20
console.log('test'.length);  //  ->  4
   
console.log(str.charAt(0));  //  ->  'j'
console.log('abc'.charAt(1));  //  ->  'b'
   
console.log(str.slice(0,  4));  //  ->  'java'
console.log('test'.slice(1,  3));  //  ->  'es'
   
console.log(str.split('  '));  //  ->  ['java',  'script',  'language']
console.log('192.168.1.1'.split('.'));    //  ->  ['192',  '168',  '1',  '1']


/*-----------------------------------------------*/
/*                   Undefined                   */
/*-----------------------------------------------*/
/*
The undefined type has only one value: undefined.
t’s the default value that all variables have after a declaration if no value is assigned to them.

You can also assign the value undefined to any variable, but in general, this should be avoided, 
because if we need to mark a variable as not holding any meaningful value, we should use null.
*/
let  declaredVar;
console.log(typeof  declaredVar);  //  ->  undefined
   
declaredVar  =  5;
console.log(typeof  declaredVar);  //  ->  number
   
declaredVar  =  undefined;
console.log(typeof  declaredVar);  //  ->  undefined
   
//The  undefined  value  can  also  be  returned  by  the  typeof  operator  when  a  non-existent  variable  is  used  as  an  argument.
   
Console.log(typeof  notDeclaredVar);  //  ->  undefined
console.log(notDeclaredVar);  //  ->  Uncaught  ReferenceError:  notDeclared  is  not  defined


/*-----------------------------------------------*/
/*                     Symbol                    */
/*-----------------------------------------------*/
/*
It’s a new primitive type that was added to JavaScript in 2015.
It doesn't have any literal value, and can only be created using a special constructor function.

Symbols are a form of identifier that are guaranteed to be unique.
Symbols are an advanced topic, and to understand their power and usefulness, 
we’ll need to cover a lot of other topics first, so for now, just remember that the Symbol type exists.
/*


/*-----------------------------------------------*/
/*                      Null                     */
/*-----------------------------------------------*/
/*
The null value is quite specific.
The value itself is primitive, while the type to which it belongs is not a primitive type, such as Number or undefined.
This is a separate category, associated with complex types, such as objects.
The null value is used to indicate that the variable does not contain anything, 
and most often it is a variable that is intended to contain values of complex types.

In a nutshell, we can assume that the undefined value is assigned to uninitialized variables automatically, 
but if we want to explicitly indicate that the variable does not contain anything, we assign it a null value.

One important caveat for null is that when checked with the typeof operator, it will return "object", a surprising result.
This is a part of a much more complicated object system, but for now, you just need to know that typeof null is equal to "object".
*/
let  someResource;
console.log(someResource);  //  ->  undefined
console.log(typeof  someResource);  //  ->  undefined
   
someResource  =  null;
console.log(someResource);  //  ->  null
console.log(typeof  someResource);  //  ->  object
