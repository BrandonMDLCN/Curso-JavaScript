/*--------------------- 2.1.3 The instance of operator ---------------------*/

/* 
Let's go back to the concepts we introduced at the beginning of this chapter.

Among other things, the name instance appeared there. Do you remember what it was?

This is what we call an object created on the basis of a class (an object is an instance of that class). 
Looking at the last example, we can say that the almostEmptyObject is an instance of the AlmostEmptyClass class. 
Alternatively, we can say that almostEmptyObject is of an AlmostEmptyClass type.

In our simple example, this is apparent immediately. There is not much code, and in the same place, we declare a class and create an object.

But what to do if we want to know the type of object in a more complex code?

Such a code can contain thousands of lines, be split into many files, and can include libraries and pieces of code written not only by us. 
We can operate with many objects and often even when we know what classes we have, we may not be sure if a given object is an instance of a certain class.

We have previously encountered the typeof operator, which allows us to check the types of variables and values.

Let's check if it could be useful in this case too:
 */

console.log(typeof almostEmptyObject); // -> "object"

/* 
Unfortunately, it turns out, as we tested before, that typeof for almostEmptyObject will return "object".

This is true information, but rather not what we expected. 
We are looking for the class from which our object was created, and not just a confirmation that the object is an object.

So we need to use other means. So we need to use other means.

In every object (or maybe almost every object, and certainly in one that is created using the class or constructor function) we will find the field constructor.

At this stage of learning, we don’t have to analyze the contents of this field too thoroughly, we just need to know that we will find in it, 
among others, the name property. This property should contain the name of the class from which our object was created.

Let's check it out:

 */

console.log(almostEmptyObject.constructor.name); // -> "AlmostEmptyClass"

/* 
This time the effect is in line with our expectations. By the way, if an object is created using the constructor technique, 
constructor.name will indicate the name of the constructor function. 
Try to rewrite the AlmostEmptyClass class to the constructor function, e.g. AlmostEmpty.

Use this function to create an object and check the constructor.name field.

However, the instanceof operator is used more often in practice than constructor.name. It is not an alternative in the literal sense of the word. 
The instanceof operator does not return the name of the class whose object is an instance, but only tests whether the class and object are related.

It returns true or false, confirming or denying that the specified object is an instance of the specified class.

So in order to use this operator, we need to have an idea of which class we are looking for.

In most cases, this is absolutely sufficient.
 */

console.log(almostEmptyObject instanceof AlmostEmptyClass); // -> true
console.log(almostEmptyObject instanceof String); // -> false
let str = new String("test me");
console.log(str instanceof String); // -> true


/* 
Let's do one more experiment.

We have already checked that the instanceof operator works as expected for the almostEmptyObject, and confirmed that the object is an instance of AlmostEmptyClass.

Let's repeat the test, but this time instead of AlmostEmptyClass, let's use the generic Object class.
 */

console.log(almostEmptyObject instanceof Object); // -> true

/* 
The result may be slightly surprising and needs to be explained.

First of all, all objects created with the usage of classes inherit implicitly from the Object class. 
Imagine that we have the ABC class, which is openly inherited from the DEF class, and this in turn from the GHI class. 
The GHI class is written from scratch, but by default it inherits from the generic Object class.

So somewhere at the beginning of this chain is the Object class – the ABC class also inherits from it (the inheritance will be discussed in more detail later in this chapter).

The second issue to be clarified is the same instanceof behavior. It tests the whole inheritance chain of the specified class. 
If we create an abc object based on the ABC class, then all of them will be true:
 */

abc instanceof ABC; // -> true
abc instanceof DEF; // -> true
abc instanceof GHI; // -> true
abc instanceof Object; // -> true

/* 
So in the case of objects, the typeof operator will only return a confirmation that what we are examining is an object.

The instanceof operator will let us confirm (or deny) that the indicated object is an instance of a certain class.

However, when looking for a class name, we can use the constructor.name property of the object. 
*/