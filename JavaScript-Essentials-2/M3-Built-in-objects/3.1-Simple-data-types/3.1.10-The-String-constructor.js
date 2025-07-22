/*--------------------- 3.1.10 The String constructor ---------------------*/

/* 
Let's go back to the String constructor.

Similar to the Boolean and Number, it is used, among others, during autoboxing (i.e. when trying to treat the string primitive as an object).

We can also use it explicitly to create a new object (again, this is not recommended, remember why?) and to convert other primitives to string.

We’ll start by discussing the constructor with the only prototype property it has.

This is the length property and, as you can guess, it tells us about the number of characters in the string stored in the object.
*/

let namee = "Bob";
console.log(namee.length); // -> 3
console.log("Alice".length ); // -> 5
console.log("".length ); // -> 0

/*
The concept of this property is so simple that it hardly needs any further explanation.

There are, however, two things to note. 
First of all, in many programming languages, the length of a string is obtained using a function, not a property, 
    so people who have already learned a bit of programming are often mistaken here. 

The second problem is not strictly about the length property, but about a certain logical error.

For example, it is often tested whether the length of a string is different from zero to display it.

However, it would be advisable to first check whether the variable we are testing contains a string or any other value before trying to refer to the length field.

This is what we do in the following example, using the logical OR operator (&& characters).
*/

let strings = [undefined, "", "ab", "cd ef", 4, null];
for(let i=0; i< strings.length; i++) {
    strings[i] && strings[i].length && console.log(strings[i]);
}

/*
We have placed six elements in the strings array, of which only three are strings, and of those three, only two are longer than zero.

So only 'ab' and 'cd ef' will be displayed.

The console.log(strings[i]) command will be executed under two conditions:

the specific element in the array is not equal to null or undefined (strings[i] command),
the element there has a length property, which is different from zero (strings[i].length command).
By the way, in the example we also used the length property of the strings array.

So we see some repetition in the naming schemes in JavaScript, which should make it easier for us to remember them.
*/

/*--------------------- 3.1.11 String as an array of characters ---------------------*/

/* 
As long as we are at the arrays, the string can be treated as a character array.

Since it is an array, we should theoretically be able to refer to individual characters by means of an index (position) and square brackets.

And indeed we can.

The same effect can be achieved with the charAt prototype method.

Take a look at the example below:
*/

let title = "Alien 10";
console.log(title[0]); // -> A
console.log(title.charAt(0)); // -> A

/*
Using square brackets, we have indicated the first letter (index 0) of the string stored in the title variable.

We repeat the same thing using the charAt method.
*/

/*--------------------- 3.1.12 Case conversion ---------------------*/

/* 
Two often-used methods are toLowerCase and toUpperCase.

It is easy to guess what we are using them for.

In this example we will use them to observe a certain phenomenon.

Take a look at the example below:
*/

let variable = "string";
variable.toUpperCase();
console.log(variable)
let upperVariable = variable.toUpperCase();
console.log(upperVariable)

/*
We store a string in the title variable and then try to refer to it as if it were an object by calling the toUpperCase method.

We already know that the JavaScript engine will automatically convert the string to the appropriate object and the called method will return a string converted into capital letters.

Of course, calling the method does not affect the contents of the title variable, as it is treated only as a source of data from which a new string will be returned.

The same happens when you explicitly create an object using the String constructor and call the toLowerCase method on it.

The method will return a lowercase string, but the contents of the object (the original string) will not change.


  Note   The prototype methods of the String constructor do not modify the original string but return a modified copy of it. 
  The same is true of many of the Array's constructor methods. 
  If you are not 100% sure whether a method modifies the contents of an object or returns a modified copy, consult the documentation.

*/

/*--------------------- 3.1.13 Splitting the string ---------------------*/

/* 
One method that may come in handy is split, by means of which the string can be split into fragments (substrings), which will be returned as an array.

As an argument, we give the string which is to be treated as a separator.

This method does not affect the original string.

Take a look at the example below:
*/

let ipAddressStr = "127.0.0.1"
let ipParts = ipAddressStr.split("."); // -> ["127", "0", "0", "1"]
console.log(ipParts[0]); // -> 127

/*
In the example, we split the IP address, stored in the form of a string, into four parts.

When calling the split method, we pass a string containing the dot as an argument, thus indicating how these parts are separated from each other.

The parts are stored in the ipParts array.
*/

/*--------------------- 3.1.14 Replacing substrings ---------------------*/

/* 
Let’s look at the next useful method, replaceAll, which allows you to replace a selected string of characters with another one we have provided.

Again, we do not modify the original string, but treat it as a source.

Using the split method and the new replaceAll method, we will demonstrate method chaining.
*/

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.";
let words = text.toLowerCase().replaceAll('.','').replaceAll(',','').split(' ');
console.log(words.length); // -> 30

/*
In the example, we put a few sentences from the timeless Lorem ipsum in the text variable.

By calling toLowerCase, we change all capital letters into lower case. However, the result is not stored in any variable or displayed on the screen.

After calling toLowerCase, a dot appears immediately, and the next method replaceAll is called.

This means that the result obtained from toLowerCase will be processed by replaceAll, and so on.

We could therefore present this one line of code in the following form:
*/

let a = text.toLowerCase();
let b = a.replaceAll('.','');
let c = b.replaceAll(',','');
let word = c.split(' ');

/*
You will probably agree that such a notation is unnecessarily extensive and inelegant. 
You should note that the variable text and the intermediate results returned by toLowerCase or replaceAll are strings.

Treating them as objects (i.e. the ability to call String constructor methods) is possible thanks to autoboxing.


  Note   Method chaining (or cascading) is calling one method after another in one line of code. The methods are called in order from left to right. 
  Each subsequent method is executed on the result of the previous method. The methods do not have to be of one object type.

However, let’s go back to the replaceAll and split methods.

The first call of replaceAll searches for a string consisting of a single dot and turns it into an empty string, that is, we simply remove all dots from the input string.

The second call of replaceAll removes the commas in the same way.

The result is treated by the split method. We pass a string consisting of one space to it as an argument.

This argument is interpreted as a separator. The string resulting from the last replaceAll will be split into sections separated by spaces.

The split method will return an array that will include these single words. At the end, we check the length of the received array.

It turns out that it is 30 – this is the number of words that contain the fragment "Lorem ipsum".

A similar method, replace, differs from replaceAll in that it changes not all, but only the first match.
*/

/*--------------------- 3.1.15 Searching for substrings ---------------------*/

/* 
Some of the most useful methods of the String constructor are includes, indexOf, and lastIndexOf.

They allow you to check if there is a certain substring inside of the string.

The include method only returns information about whether such a substring (given as an argument of the method call) has been found.

The indexOf method, if successful, will return the position of the first occurrence of the selected substring (it can occur many times).

As you can guess, lastIndexOf will return the position of the last matched substring.

Remember that we treat a string as an array, so the first character has the position 0 (array indexing starts with 0).

The indexOf and lastIndexOf methods will return a value of -1 if they don't find the specified substring.

Take a look at the example below:
*/

let texto = "One, two, three, one, two, three.";
console.log(texto.includes("two")); // -> true
console.log(texto.includes("four")); // -> false
console.log(texto.indexOf("two")); // -> 5
console.log(texto.indexOf("four")); // -> -1
console.log(texto.lastIndexOf("two")); // -> 22

/*
This example shouldn’t require any further explanation.
*/

