/*--------------------- 1.6.1 References ---------------------*/
/*
Let's do a little experiment. Do you remember why we use the const keyword in declarations?

Before running the examples, reload the console page. This way, we make sure that the identifiers we use for the consts are no longer occupied (e.g. by running the previous examples).


const x = 10;
x = 20;    // TypeError: Assignment to constant variable.

The value placed in x is treated as a constant and protected against changes. This can be expected to work similarly for objects.

const contact = {};
contact = { email: "RonaldSMurphy@freepost.org"}; // TypeError: Assignment to constant variable.

As expected, the same exception as in the previous example is discarded – we cannot change the value we declared as const.

But we’ll try something else.
*/

const contact = {};
contact.email = "RonaldSMurphy@freepost.org";
console.log(contact.email);

/*
It turns out that not only is no exception generated, but the object is extended with a new field to which the value is assigned.

This value can later be easily modified or deleted.
*/

contact.email = "rsmurphy@briazz.com";
console.log(contact.email);
delete contact.email;
console.log(contact.email);

/*--------------------- 1.6.2 The const object can be modified ---------------------*/
/*
Is this const behavior correct? It appears so, although it may require some additional explanation.

According to JavaScript documentation, "a constant cannot change through re-assignment" and "a constant cannot be re-declared".

This can be seen ideally in the case of simple types, such as the declaration and initialization of the constant x in our example. 
The value 10 that was placed there cannot be changed, period. You also cannot re-declare a variable or a constant with the same name x.

In the case of complex types (i.e. arrays and objects) variables and constants (the var, let, const keywords) do not contain the entire object. 
They only contain the object reference. For the sake of simplicity, we can imagine the reference as an address indicating where the object is really stored.

So, the const keyword protects only the reference, the address, from change. 
We cannot change the reference, e.g. by replacing the object (the new object has a different address). 
However, changes inside an object – adding a new property, changing a value, etc. do not affect the reference.

Let's try to understand it with an even simpler example.

Let's assume that we have a document with our residence written down in it. It’s only a reference – our house is not physically pushed into the document. 
If for some reason we cannot change this address (maybe we’ve messed something up?) then we have a situation with a const declaration.

References or addresses cannot be changed. 
However, it doesn’t affect what is happening inside the house – we can, for example, paint it, completely reorganize it, demolish all the walls and make one big space. 
The house is our object, whose properties we can modify freely.

We just can't change the references, that is, the const declaration, which is written in our mysterious document.

In the case of objects, const is designed to protect against a re-declaration or assignment of a new object.

There are, of course, methods to protect objects, or more precisely their properties, from changes.

These will be discussed in the chapter on property configuration.
*/