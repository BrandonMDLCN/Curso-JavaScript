/*--------------------- 1.2.1 Basic way to create objects ---------------------*/
/*
As you’ve probably heard more than once, JavaScript is an extremely flexible language.

The syntax of the language allows us, in many cases, to achieve the same goal in different ways. It is no different with objects. 
There are several equivalent ways to create them, each with their own advantages and disadvantages. 
The simplest and most common is the use of literal notation – that is, 
the declaration presented earlier using curly brackets (another name for this is initializer notation).

In the example below, we create an empty object (without properties) and place it in the contact variable.
*/

let contact = {};

/*
We can modify an object created in this way by, among other things, adding new properties.

In our example, we add a property with the tel key. 
Note that the property is indicated by writing its name after the object name, where the names are separated by a dot. This is called dot notation.
*/

contact.tel = "207-662-5412";
console.log(contact);
console.log(contact.tel);

/*
Nothing stands in the way of declaring and initiating properties immediately when creating an object. 
This time the object will have two properties: phone and email. In the literal notation, the following properties are separated from each other by commas. 
A colon is used to separate a property name (a key) from a value.
*/

let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};
console.log(contact);
console.log(contact.tel);

/*
The key is a string. When creating an object, the key can be enclosed in quotation marks, 
although this is not necessary (JavaScript automatically interprets it as a string). 
However, this can be useful when you want to create a key consisting of several words. For example, the following construction will be wrong:

let contact = {
    first name: "Ronald"
};

and we need to change it to:
*/

let contact = {
    "first name": "Ronald"
};

/*
However, giving keys names consisting of many separate words is not the best idea.

If you need a multi-word name, it’s better to use, for example, the Camel case notation, and write firstName instead of "first name". 
The notation will be both more readable to the user and less burdensome on the computer. 
With multi-word keys, it will also be a problem to refer to the property of an existing object – dot notation does not allow it.

We’ll soon talk about solving this problem with the bracket notation.

By the way, have you noticed that the console.log used in this chapter is also an example of "dot notation"? 
It would appear that the console is an object and the log is its property. And so it is.
*/

console.log(typeof console);    // -> object
console.log(typeof console.log);    // -> function

/*
The result of the first command should not be surprising – we’ve already agreed that consoles are objects.

However, the log property type may come as a little bit of a surprise. On the one hand, it's obvious; 
after all, we use this construction as a function. This means, however, that the object property does not have to be of the number, Boolean, or string type. 
It could as easily be an array, an object, or a ... function.
*/



/*--------------------- 1.2.2 Deleting objects ---------------------*/
/*
During the operation of our application, we’ll probably create many objects.

Each new object takes up memory, so there is a potential risk of overflow.

Luckily, there’s no need to overturn this problem (at least at the stage of learning where we are now).

The JavaScript engine uses a Garbage Collector, which decides for us whether the objects are still needed, and possibly removes them.


The JavaScript language doesn’t even provide for the possibility of explicitly deleting objects.
*/