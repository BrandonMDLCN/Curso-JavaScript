/*--------------------- 3.1.4 Number ---------------------*/

/* 
The Number constructor is associated with the number primitive and represents floating-point numbers (in double-precision 64-bit binary format).

Before we move on to discuss this constructor, let's recall some facts about the number primitive (these were discussed in the first, basic part of the course).

A few words about JavaScript numbers
The floating-point format allows you to store integers and real numbers 
(in many programming, languages you distinguish between these types of numbers, while in JavaScript they are simply numbers).

This format often results in stored values being approximate.

The range of values is limited (i.e. you cannot store numbers outside the limit range).

For integers, by default, the smallest value is -(253 – 1) and the largest (253 – 1).

In fact, it is possible to write down numbers outside this range, but the calculations made on them are so imprecise that they are unlikely to be done.

If for some reason we needed to store larger values (e.g. implementing a cryptographic algorithm operating on large prime numbers), we have a BigInt type on hand.

In real life applications, however, it’s used so rarely that we’ll skip it here.

When giving the numerical values, we normally operate with the decimal system, which we are used to in everyday life.

However, by preceding the numerical value with 0x, 0o or 0b, we can tell the JavaScript engine to treat the number as hexadecimal, octal, or binary.

It is also possible to write a number in exponential form, so for example, instead of 9000 we can write 9e3, and instead of 0.00123 we can write 123e-5.

You’re probably already familiar with these terms, such as decimal, hexadecimal, or exponential representation.

Let’s look at an example:
*/

let a = 10; // decimal - default
let b = 0x10;   // hexadecimal
let c = 0o10; // octal
let d = 0b10; // binary
console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> 8
console.log(d); // -> 2
let x = 0.3;
let y = 0.6;
console.log(x + y); // -> 0.8999999999999999
console.log((x + y).toFixed(1));    // -> 0.9
console.log(x / 0);      // -> Infinity
console.log(x / "abc");  // -> NaN

/*
The first part of the code is a few lines showing how we write numbers in formats other than decimal.

Note that when retrieving a value, you always get it in the decimal format. A slightly more interesting piece of code concerns approximations in stored real values.

The variables x and y, although they look straightforward to us (decimal representations), are stored in the memory as binary floating-point numbers.

This format, while it’s convenient for a computer, makes some values impossible to store without small approximations. 
The effect of this is visible after adding both variables together. 
In such a situation, one of the methods of the Number object, toFixed (we’ll go through it in more detail in a moment) can help us.

It allows us to round the result to a certain number of decimal places. 

At the end of the example, 
there are two other values associated with the number type: 
Infinity and NaN (not a number). The first one can be generated as a result of arithmetic operations that will cause the number range to be exceeded.

The second value informs us that although the result of a certain operation should be a numerical value, 
it is not possible to determine the correct output value due to incorrect input data.
*/

/*--------------------- 3.1.5 The Number constructors ---------------------*/

/* 
After this short digression, let us return to the main topic, the standard built-in Number object.

It is a constructor that can be used implicitly during autoboxing, in an attempt to treat the primitive number as an object.

We can also use it to explicitly create an object using the new operator, 
although like in the case of Boolean (and other constructors corresponding to primitives) this is not recommended.

If a constructor call is not preceded by the new operator, it will only be used to convert the given argument to a number (the value returned will be the primitive).

For a complete list of methods and properties of the Number constructor, including descriptions and examples, see the MDN2.

Just like in Boolean, we also have the toString and valueOf methods.

Their operations are similar, and there is only one small difference: 
the toString method can accept an argument – a number that specifies in which format the value stored in the object is to be returned. 
For example, the argument 16 will cause the returned string to be a hexadecimal representation (the argument 8 is an octal representation, etc.). 
If we don’t provide any argument, the default decimal representation is returned.

2Number - a primitive wrapper object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

Let’s look at some simple examples:
*/

let nrStr1 = (11).toString();
let nrStr2 = (11).toString(16);
console.log(`nrStr1 : ${typeof nrStr1} : ${nrStr1}`); // -> nrStr1 : string : 11
console.log(`nrStr2 : ${typeof nrStr2} : ${nrStr2}`); // -> nrStr1 : string : b

/*
In the first line of the code, we treat the number 11 as an object, trying to call the toString method.

We put the number in parentheses, otherwise JavaScript would treat the dot of the dot notation as the beginning of the fractional part.

This is an example of autoboxing.

The JavaScript engine converts a number on the fly to a corresponding Number type object, and then calls the toString method.

Since we haven’t provided an argument to the called method, the string with the default representation of our number (decimal) is returned.

The second line does the same, only this time toString receives the argument 16, meaning that it should return the hexadecimal representation of our number 11, that is, b.

In the next example, we explicitly declare several objects using the Number constructor. Remember: this example is strictly didactic (we should not use Number in this way).
*/

let numberObj1 = new Number;            // -> 0
let numberObj2 = new Number(100);       // -> 100
let numberObj3 = new Number("200");     // -> 200
let numberObj4 = new Number("abcd");    // -> NaN
let numberObj5 = new Number(9e10000);   // -> Infinity
console.log(`numberObj1 : ${typeof numberObj1} : ${ numberObj1.valueOf()}`); // -> numberObj1 : object : 0

/*
Pay attention to what values are stored in different objects depending on the argument given to the constructor. In the example, only the value of the numberObj1 object is displayed.

Try to do the same for the other four objects.

The next example demonstrates the use of the Number constructor without the new operator, that is, using it only to convert the argument to a primitive number.


let nr = Number("100");
console.log(`nr : ${typeof nr} : ${ nr}`); // -> nr : number : 100

Try to repeat the conversion in the same way for the arguments from the previous example, that is: "200", "abcd" and 9e10000.
*/

/*--------------------- 3.1.6 Converting numbers into different string formats ---------------------*/

/* 
The set of prototype methods of Number is not limited to valueOf and toString.

We still have, among others, the following:

toExponential(fractionDigits)
toFixed(digits)
toLocaleString([locales [, options])
The first of these methods returns a string representing a number in exponential form, with one digit before the comma, rounded to fractionDigits after the comma.

The argument may be omitted.


let a = 12345;
console.log(a.toExponential());   // -> 1.2345e+4
console.log(a.toExponential(1));  // -> 1.2e+4

The toFixed method returns a string representing a number rounded to digits decimal places.

Rounding is performed according to the generally accepted convention, i.e. from 5 upwards to below 5 downwards.

Remember, however, that numbers are stored in an imprecise format, which can sometimes lead to surprising results.

let nr1 = 10.55;
console.log(nr1.toFixed(1)); // -> 10.6
console.log(nr1.toFixed(0)); // -> 11
console.log(nr1.toFixed(3)); // -> 10.550
let nr2 = 2.55;
console.log(nr2.toFixed(1)); // -> 2.5
console.log(nr2.toFixed(20)); // -> 2.54999999999999982236
console.log(((nr2 * 10).toFixed(0) / 10)); // -> 2.6

In the first case, the rounding off of the number stored in variable nr1 is carried out as we expect. 
The result of the second rounding is due to the imprecise representation of the number 2.55 in the memory.

An interesting method is toLocaleString.

Similar to toString, it returns a string representing a number stored in a Number object, but this time the string will be formatted according to the convention of the selected language.

What is the point of using this method? Depending on the region we are in and the language we use, the numbers are presented in different ways.

This is not just about different digits.

A typical example is the separation of fractional digits – in some regions a dot is used for this, in others a comma.

In the JavaScript code we use a dot for this purpose but, for example, 
when converting a number into a string that we want to display on our site, we may want to present it according to local rules.

If we do not provide the locales argument, the language set in your operating system configuration will be used in the conversion.

In addition to the locales argument, you can provide additional options to modify the format.


let nr = 123456.789;
console.log(nr.toLocaleString("en-GB")); //-> 123,456.789
console.log(nr.toLocaleString("fr-FR")); //-> 123·456,789
console.log(nr.toLocaleString("de-DE")); //-> 123.456,789
console.log(nr.toLocaleString("ar-EG")); //-> ١٢٣٬٤٥٦٫٧٨٩
console.log(nr.toLocaleString("es-ES");
    style: "currency",
    currency: "EUR"
})); //-> 123.456,79 €
console.log(nr.toLocaleString());

In the example, the operation of the toLocaleString method is tested with the value 123456.789 and presented in the following formats: 
"en-GB" (British English), 
"fr-FR" (French Standard), 
"de-DE" (German Standard), 
"ar-EG" (Egyptian Arabic) and 
"es-ES" (Castilian Spanish). 
In the last line we called the method without arguments, so the format of the displayed number will depend on the local configuration of your operating system.
*/

/*--------------------- 3.1.7 Static properties and methods of the Number constructor ---------------------*/

/* 
The Number constructor is not only equipped with prototype methods, but it also provides us with several properties and static methods.

Among the more important properties, we find MAX_VALUE, MIN_VALUE, MAX_SAFE_INTEGER and MIN_SAFE_INTEGER.
*/

Console.log(Number.MAX_VALUE); // -> 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // -> 5e-324
console.log(Number.MAX_SAFE_INTEGER); // -> 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -> -9007199254740991

/*
The MAX_VALUE property is the maximum value that can be stored using the number type.

However, you should treat this value more as a curiosity, as all values above MAX_SAFE_INTEGER are saved with increasing approximation errors.

The safe range is limited from below by MIN_SAFE_INTEGER.

The MIN_VALUE value is the smallest positive fractional value that can be saved with the number type.

Static methods allow us to check, among other things, whether a value is an integer, whether it is a finite number, whether it is within the safe range of integers, and so on.
*/

let numbers = [2e100, 200000, 1.5, Infinity];
for(let i=0; index< numbers.length; index++) {
    console.log(`is ${numbers[i]} Integer: ${Number.isInteger(numbers[i])}`);
    console.log(`is ${numbers[i]} safe Integer: ${Number.isSafeInteger(numbers[i])}`);
    console.log(`is ${numbers[i]} finite number: ${Number.isFinite(numbers[i])}`);
}

/*
In the example, we have created a numbers array in which we have placed the values 2e100, 200000, 1.5, and Infinity.

In the for loop, we go through the array, testing each of the values using the static isInteger, isSafeInteger, and isFinit methods. The result should look like this:


is 2e+100 Integer: true
is 2e+100 safe Integer: false
is 2e+100 finite number: true
is 200000 Integer: true
is 200000 safe Integer: true
is 200000 finite number: true
is 1.5 Integer: false
is 1.5 safe Integer: false
is 1.5 finite number: true
is Infinity Integer: false
is Infinity safe Integer: false
is Infinity finite number: false

Two further static methods, parseInt and parseFloat, can be useful when converting numerical values written up as strings.

Why use them if the Number constructor used without the new operator does the same?

Well, because they can forgive some mistakes in the string format.

They’ll work correctly if at least the initial fragment of the input string can be interpreted as a number (the rest of the string will be ignored).

The Number constructor will consider the same case to be an error and return the NaN value.
*/

console.log(Number.parseFloat("123.12.12")); // -> 123.12
console.log(Number("123.12.12")); // -> NaN
console.log(Number.parseInt("1204px")); // -> 1204
console.log(Number("1204px")); // -> NaN

/*
The JavaScript language was not invented for complex mathematical calculations.

Of course, it is possible to perform any arithmetic operations in it, and the Math object (more about which soon) provides many slightly more advanced mathematical functions.

However, there is no need to make life harder for yourself – in this area, JavaScript gives way to languages such as Python, which were created to solve scientific problems.

This should not worry us too much, however.

Tasks that are solved in the real world of JavaScript rarely require the use of serious mathematical instruments.

You will never feel the limitations of language in this matter, and the Number constructor will most often use it to convert data.
*/