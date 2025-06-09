/*--------------------- 2.0.1 Classes ---------------------*/
/*
So far, we have learned several methods for creating objects in JavaScript. All of them represented the classless model.

We also said that there is one more important method that was introduced to JavaScript quite late (the ECMAScript 6 standard). 
It’s about classes – it’s a kind of object template.

But why another method for creating objects? There are two main reasons for this.

The first is inheritance. You probably remember the prototypes we used to inherit methods and properties from a selected object.

And even if you don't remember exactly how they worked (which wouldn't be strange), you will certainly recall that it wasn't the easiest technique.

It is not very intuitive, especially at first, and to understand it well you have to spend a lot of time practicing it.

In the case of classes, inheritance, at least from the notation in the code, is incomparably simpler.


The second reason, probably even more important, for which the JavaScript class was introduced is even more trivial.

Classes are used in the vast majority of object-oriented languages. 
So it's easier to switch to object-oriented programming in JavaScript when you know, for example, Java, C#, or Python, because they also use classes. 
The advantage of JavaScript is that we can use classes, but we don't have to.


Of course, the class models used in different languages are quite different, and in JavaScript the differences are particularly noticeable.

We'll say a few more words about it, 
but we can already tell you that JavaScript doesn't allow you to directly define properties in the body of the class (only methods are defined) 
and you can't create private fields (invisible outside the object and created on the basis of the class).

Although both of these techniques have been recently introduced to JavaScript, they are treated as experimental, 
and it cannot be assumed that all browsers will support them.

What is a class?

As we said in the previous chapter, it is a template that we can use to create a particular type of object.

Using the class and the new keyword, we can create as many objects of a given type as we need.

Inside this template, we specify the methods that will appear in the object and its properties.

An important component of a class is the constructor, which is a function invoked when creating an object based on the class. 
The constructor is used to initiate a new object. For example, we can set the initial values of the object's properties in it.

As you probably remember, in JavaScript there is a method for creating objects using constructors – unfortunately, 
under the same name there are two different things (at least at the level of language syntax).

So if the term constructor appears in the text, 
pay attention to whether it is a class constructor or a constructor function used directly to create an object.

It is also said that the object is of a certain type, with the class name being used as a type designation.

For example, if we created a dog object from the Animal class, this object would be of the Animal type. 
And of course, the dog would be an instance of the Animal class.
*/