/*--------------------- 1.9.4 new Object() ---------------------*/
/*
Since Object is the constructor of a generic object, can we use it to create a new object?

Of course we can.

This way we will create an empty object (without our properties, but with properties supported by Object).
*/

let emptyObject = new Object();
console.log(emptyObject.constructor.name); // -> Object

// The effect of using new Object() will be the same as {}.

let anotherEmptyObject = {};
console.log(anotherEmptyObject.constructor.name); // -> Object

/* 
In both cases, there is an inherited constructor property.

This means that the objects contain what has been added from the constructor Object.
*/



/*--------------------- 1.9.5 Object.create ---------------------*/
/*
Another interesting technique for creating an object is by using the Object.create method.

It allows you to create a new object based on an existing object (which will be used as a prototype of our new object). The base object is given as an argument for calling the method.

Since we haven't dealt with prototypes yet, we’ll look at the method to create an object without a prototype (we’ll give null as an argument).
*/

let reallyEmptyObject = Object.create(null);
console.log(typeof reallyEmptyObject.constructor); // -> undefined

/* 
Note that this time undefined appears on the console.

This means that there is no property called constructor in reallyEmptyObject.

This time we create a really empty object. However, treat this only as an exercise.

Unless you are 100% sure why you need an object that is not based on the generic Object constructor, 
create it in the normal way (factory, constructor, object literals, classes).
*/



/*--------------------- 1.9.6 Class ---------------------*/
/*
There is another, very important method for creating objects.

It’s through the use of classes.

This is the basic way to manage objects in most programming languages.

In the case of JavaScript, it was added in one of the following language editions (ECMA6).

However, it is a subject that is so extensive that we will dedicate the whole next chapter of our course to it.
*/