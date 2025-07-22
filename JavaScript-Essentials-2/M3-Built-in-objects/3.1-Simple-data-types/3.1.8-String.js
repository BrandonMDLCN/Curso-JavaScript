/*--------------------- 3.1.8 String ---------------------*/

/* 
We have finally arrived at something really practical.

The String constructor, as we are talking about it, corresponds to the string primitive and allows for comfortable manipulation of character strings.

This object gives us a rich set of prototype methods, of which we will only discuss a certain part.

A complete list of methods and properties of the String constructor, together with descriptions and examples, can be found on the MDN page3.

3The String – object used to represent and manipulate a sequence of characters.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

/*--------------------- 3.1.9 What we already know about strings ---------------------*/

/* 
We discussed the string primitive in the first part of the course, but let us, in any case, refresh our memories.

In JavaScript, strings contain any characters enclosed in double quotes, single quotes or backticks (or grave accents).

These methods can be seen as alternatives to each other. The last one allows the use of placeholders inside the string.

Strings containing a placeholder will be called template literals. The placeholder allows you to dynamically insert the values of variables into the selected place of the string at runtime.
*/

let delay = 10;
let name = "Bob";
let order = 'pizza';
let info = `Hi ${name}, you have to wait about ${delay} minutes for your ${order}`;
console.log(info); // -> Hi Bob, you have to wait about 10 minutes for your pizza
console.log(typeof name); // -> string
console.log(typeof order); // -> string
console.log(typeof info); // -> string

/*
The example shows the use of double quotes, single quotes and backticks when creating strings, with template literals being used when declaring the info variable.

This declaration is the more convenient form of the anotherInfo variable declaration shown below:


let anotherInfo = "Hi " + name + ", you have to wait about " + delay + " minutes for your " + order;
If a character string is to contain one of the characters that are used to specify the string (", ' or `), an escape character, that is \ (backslash), may be used.

This will cause the character that follows it to be treated as part of the string, rather than as a control character (normally interpreted as the end of the string, for example).

You can also use an alternative character. For example, if you want a double quote to appear inside a string, you can use a single quote to specify the string.
*/

let warn22 = "Confirm ticket reservation for \"Alien 10\" movie.";
let warn1 = 'Confirm ticket reservation for "Alien 10" movie.';
let warn2 = "Confirm ticket reservation for 'Alien 10' movie.";
let warn3 = `warning: "Confirm ticket reservation for 'Alien""d"" 10' movie."`;
console.log(warn3)