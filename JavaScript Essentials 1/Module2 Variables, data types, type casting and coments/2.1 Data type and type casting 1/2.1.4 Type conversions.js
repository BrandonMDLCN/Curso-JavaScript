/*
Primitive construction functions
Using literals is not the only way to create variables of the given primitive types.

The second option is to make them using constructor functions.
These types of functions are mainly used in JavaScript for object-oriented programming, which is outside the scope of our course.
The following functions will return primitives of a given type: Boolean, Number, BigInt, and String.

Most of these functions can be called without any arguments. In such a situation:
    the function String will by default create and return an empty string – primitive "";
    the function Number will by default create and return the value 0;
    the function Boolean will by default create and return the value of false.

The function BigInt, unlike other constructor functions, requires you to pass some initial value to it. 
This can be an integer number that will be converted to a BigInt (see examples).
*/
const  strg  =  String();
const  num  =  Number();
const  bool  =  Boolean();
   
console.log(str);  //  ->
console.log(num);  //  ->  0
console.log(bool);  //  ->  false
   
const  big1  =  BigInt(42);
console.log(big1);  //  ->  42n
   
const  big2  =  BigInt();      //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt

//But creating default values is not impressive at all. We can accomplish these using literals. 
//So what do we use these functions for? Well, we use them in type conversions.


/*--------------------------------------*/
/*          2.1.5 Conversions           */
/*--------------------------------------*/
/*
It’s a pretty common situation to have a value of one type but to need a value of another type.
he simplest example is when we have a number, but we need to add it to some text. 
Conversions in JavaScript happen automatically in specific situations, but can also be used explicitly through functions like String() or Number().

Those functions also accept arguments in parentheses and (if possible) will convert them to a given type.
*/
const  nume  =  42;
   
const  strFromNum1  =  String(nume);
const  strFromNum2  =  String(8);
const  strFromBool  =  String(true);
const  numFromStr  =  Number("312");
const  boolFromNumber  =  Boolean(0);


/*-----------------------------------------------*/
/*          2.1.6 Conversion to String           */
/*-----------------------------------------------*/
/*
this can be done for all primitive types.
Note that in the example, we used the recently discussed technique of character string interpolation.
*/
let  str  =  "text";
let  strStr  =  String(str);
console.log(`${typeof  str}  :  ${str}`);  //  ->  string  :  text
console.log(`${typeof  strStr}  :  ${strStr}`);  //  ->  string  :  text
   
let  nr  =  42;
let  strNr  =  String(nr);
console.log(`${typeof  nr}  :  ${nr}`);  //  ->  number  :  42
console.log(`${typeof  strNr}  :  ${strNr}`);  //  ->  string  :  42
   
let  bl  =  true;
let  strBl  =  String(bl);
console.log(`${typeof  bl}  :  ${bl}`);  //  ->  boolean  :  true
console.log(`${typeof  strBl}  :  ${strBl}`);  //  ->  string  :  true
   
let  bnr  =  123n;
let  strBnr  =  String(bnr);
console.log(`${typeof  bnr}  :  ${bnr}`);  //  ->  bigint  :  123
console.log(`${typeof  strBnr}  :  ${strBnr}`);  //  ->  string  :  123
   
let  un  =  undefined;
let  strUn  =  String(un);
console.log(`${typeof  un}  :  ${un}`);  //  ->  undefined  :  undefined
console.log(`${typeof  strUn}  :  ${strUn}`);  //  ->  string  :  undefined
   
let  n  =  null;
let  strN  =  String(n);
console.log(`${typeof  n}  :  ${n}`);  //  ->  object  :  null
console.log(`${typeof  strN}  :  ${strN}`);  //  ->  string  :  null


/*-----------------------------------------------*/
/*          2.1.7 Conversion to Number           */
/*-----------------------------------------------*/
/*
It works as expected for strings that represent actual numbers, like "14", "-72.134", 
or strings that represent numbers in scientific notation, like "2e3", 
or special number values like "NaN" or "Infinity".

the string can also contain numbers in hexadecimal, octal, and binary format.
They must be preceded by 0x, 0o, or 0b respectively.

For any string that cannot be converted to a special value, NaN (not a number) is returned.
A BigInt can also be converted to a Number, but we need to remember that a BigInt can store much bigger values than a Number, 
so for large values, part of them can be truncated or end up being imprecise.

The Boolean true is converted to 1, and false to 0.
An attempt to convert an undefined value will result in NaN, while null will be converted to 0.
*/
console.log(Number(42));  //  ->  42
   
console.log(Number("11"));  //  ->  11
console.log(Number("0x11"));  //  ->  17
console.log(Number("0o11"));  //  ->  9
console.log(Number("0b11"));  //  ->  3
console.log(Number("12e3"));  //    ->  12000
console.log(Number("Infinity"));//  ->  Infinity
console.log(Number("text"));  //  ->  NaN
   
console.log(Number(14n));  //  ->  14
console.log(Number(123456789123456789123n));  //  -  >    123456789123
456800000
   
console.log(Number(true));  //  ->  1
console.log(Number(false));  //  ->  0
   
console.log(Number(undefined));  //    ->  NaN
   
console.log(Number(null));//  ->  0


/*------------------------------------------------*/
/*          2.1.8 Conversion to Boolean           */
/*------------------------------------------------*/
/*
Conversions to Boolean follow simple rules, as we can only have one of two values: true or false. 
The value false is always returned for:
    0,
    NaN,
    empty string,
    undefined,
    null
Any other value will result in true being returned.
*/
console.log(Boolean(true));  //  ->  true
   
console.log(Boolean(42));  //  ->  true
console.log(Boolean(0));  //  ->  false
console.log(Boolean(NaN));  //  ->  false
   
console.log(Boolean("text"));  //  ->  true
console.log(Boolean(""));  //  ->  false
   
console.log(Boolean(undefined));  //  ->  false
   
console.log(Boolean(null));  //  ->  false


/*-----------------------------------------------*/
/*          2.1.9 Conversion to BigInt           */
/*-----------------------------------------------*/
/*
In order for conversions to a BigInt to succeed, we require a Number or String representing a number as a value to be converted.
Values for conversion can be given in the default decimal form, as well as in hexadecimal, octal, or binary form.

This applies both to the situation where we give the Number and String literals as arguments (or variables containing data of those types).
We can also use exponential notation, but only for Number arguments.

Unlike other conversions, conversion to a BigInt will throw an error, and will stop the program when unable to convert a given value.
*/
console.log(BigInt(11));  //  ->  11n
console.log(BigInt(0x11));  //  ->  17n
console.log(BigInt(11e2));  //  ->  1100n
   
console.log(BigInt(true));  //  ->  1n
   
console.log(BigInt("11"));  //  ->  11n
console.log(BigInt("0x11"));  //  ->  17n
   
console.log(BigInt(null));  //  ->  Uncaught  TypeError:  Cannot  convert  null  to  a  BigInt
   
console.log(BigInt(undefined));  //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt
   
console.log(BigInt(NaN));  //  ->  Uncaught  RangeError:  The  number  NaN  cannot  be  converted  to  a  BigInt  because  it  is  not  an  integer


/*------------------------------------------------*/
/*          2.1.10 Implicit Conversions           */
/*------------------------------------------------*/
/*
Conversions can also happen automatically, and they happen all the time. 
This simple example will demonstrate it (we tested a similar example when discussing the String type):
*/
const  str1  =  42  +  "1";
console.log(str1);                //  ->  421
console.log(typeof  str1);  //  ->  string
   
const  str2  =  42  -  "1";
console.log(str2);                //  ->  41
console.log(typeof  str2);  //  ->  number

/*
when we try to perform an addition when one of the arguments is a string, 
JavaScript will convert the rest of the arguments to a string as well.
This is what is happening with str1 in the example. 

Subtraction with a string, however, doesn't make much sense, 
so in that case JavaScript converts everything to Numbers.
*/


//-------------- Ejemplos --------------//

let b1 = true + 100; // 
//let b2 = true + 100n; // -> error! 
let b3 = true + "100"; // 
//let n1 = 100 + 200n; // -> error! 
let n2 = 100 + true; 
let n3 = 100 + "200"; // 
//let bi1 = 100n + 200; // -> error! // 
//let bi2 = 100n + true // -> error! 
let bi3 = 100n + "200"; 
let s1 = "100" + 200; 
let s2 = "100" + 200n; 
let s3 = "100" + true; 
let s4 = "abc" + 200; 
let s5 = "abc" + 200n; 
let s6 = "abc" + true; 
console.log(`${b1} [${typeof b1}]`); // -> 101 [number] // 
//console.log(`${b2} [${typeof b2}]`); 
console.log(`${b3} [${typeof b3}]`); // -> true100 [string] // 
//console.log(`${n1} [${typeof n1}]`); 
console.log(`${n2} [${typeof n2}]`); // -> 101 [number] 
console.log(`${n3} [${typeof n3}]`); // -> 100200 [string] // 
//console.log(`${bi1} [${typeof bi1}]`); // 
//console.log(`${bi2} [${typeof bi2}]`); 
console.log(`${bi3} [${typeof bi3}]`); // -> 100200 [string] 
console.log(`${s1} [${typeof s1}]`); // -> 100200 [string] 
console.log(`${s2} [${typeof s2}]`); // -> 100200 [string] 
console.log(`${s3} [${typeof s3}]`); // -> 100true [string] 
console.log(`${s4} [${typeof s4}]`); // -> abc200 [string] 
console.log(`${s5} [${typeof s5}]`); // -> abc200 [string] 
console.log(`${s6} [${typeof s6}]`); // -> abctrue [string]

const str3 = 42 + +"1";
console.log(str3);  // -> 43