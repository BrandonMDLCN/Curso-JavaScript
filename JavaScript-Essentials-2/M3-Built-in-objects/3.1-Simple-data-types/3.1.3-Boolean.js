/*--------------------- 3.1.3 Boolean ---------------------*/

/* 
We will start with one of the simplest built-in objects, the simplicity of which will allow us to organize a few facts related to the subject we’re discussing.

Boolean is a constructor, which is a function that allows you to create objects.

It corresponds to the boolean primitive.

Like all constructors associated with primitives in JavaScript, Boolean can be used in several ways.

First of all, it can be used without our knowledge during autoboxing, when the primitive logical value is converted on the fly to the corresponding object.

We can also explicitly use the constructor to create a new object using the new operator.

In this case, we should provide a boolean (logical) value as an argument to the constructor, which will be stored in the object 
- (if we don't provide an argument, the object will store false by default).

Boolean has no static properties and methods.

It also does not have prototype properties.

To be honest, we don’t find too many prototype methods here either.

There are only two of them: toString and valueOf.

The first one returns a logical value placed in an object in the form of a character string, while the second one will return the same value, 
but in the form of a primitive boolean (that is false or true).

Let's go to the example below:
*/

let boolObj1 = new Boolean;
let boolObj2 = new Boolean(true);
let str1 = boolObj1.toString();
let bool2 = boolObj2.valueOf();
console.log(`str1 : ${typeof str1} : ${str1}`); // -> str1 : string : false
console.log(`bool2 : ${typeof bool2} : ${ bool2}`); // -> bool2 : boolean : true

/*
Using the Boolean constructor and the new operator, we create two objects: boolObj1 and boolObj2.

When creating the first one, we don’t provide the argument to the constructor, so it will contain the default value false.

The second object contains the value true passed explicitly to the constructor.

Using the toString and valueOf methods, we retrieve the values placed in these objects (in the form of character strings and logical values respectively).

Of course, we can do a similar test using autoboxing.

The example may not be the smartest, but it is difficult to design something highly sensible with only two such simple methods.

So let's get carried away by the fantasy and assume that picking a value from a variable containing a boolean primitive using the valueOf method makes sense.

At the moment, we are only trying to demonstrate the mechanism itself.

Look at the code below:
*/

let bool1 = false;
let str11 = bool1.toString();
let bool22 = bool1.valueOf();
console.log(`str1 : ${typeof str11} : ${str11}`); // -> str1 : string : false
console.log(`bool2 : ${typeof bool22} : ${ bool22}`); // -> bool2 : boolean : false

/*
In the variable bool1 we have placed a primitive data type – the logical value false.

By trying to use the toString and valueOf methods, we force the JavaScript engine to temporarily convert this primitive to a Boolean class object.


There is another way to use the Boolean. We can call the constructor without the new operator.

What will we achieve in this way? The constructor function will not create a new object, but will only convert the submitted argument into a primitive logical value that it will return.

Look at the code below:
*/

let bool11 = Boolean(false);
let bool222 = Boolean(1);
let bool3 = Boolean("");
console.log(`bool1 : ${typeof bool11} : ${bool11}`); // -> bool1 : boolean : false
console.log(`bool2 : ${typeof bool222} : ${bool222}`); // -> bool2 : boolean : true
console.log(`bool3 : ${typeof bool3} : ${bool3}`); // -> bool3 : boolean : false

/*
In the example, we’ve successively converted the false, 1 and "" arguments to logical values. 
While the first case is rather obvious, the other two may require a word or two of clarification.

In JavaScript, the following values are treated as false: 
- false (which probably is not a surprise), 
- null, 
- undefined, 
- NaN (not a number), 
- "". (empty string), 
- 0 (the number zero), 
- -0 (the number negative zero), 
- 0n (BigInt zero), 
- -0n (negative BigInt zero).

All other values will be treated as true, hence the results obtained in the example.


As you can see, Boolean is an extremely simple case and, frankly speaking, apart from being used for conversion, it is of little use.

Of course, we are not talking about the usefulness of logical types as such, but about the explicit use of the Boolean constructor and its two methods.
*/