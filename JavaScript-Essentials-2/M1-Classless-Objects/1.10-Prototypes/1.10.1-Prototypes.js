/*--------------------- 1.10.1 Prototypes ---------------------*/
/*
Objects can be found in most popular programming languages. We use them in Python, Java, C# or C++.

The vast majority of languages use a class approach, which basically means that before we create an object, 
we have to define a class (with methods and properties).

A class is treated as a kind of template, on which we create objects (instances). 
When assigning values to properties or calling methods, we’re already working on objects and not on classes.

One of the most important things that classes allow for is inheritance. Based on an existing class, 
we can create a new one, which will contain the properties and methods of the base class.

Originally, JavaScript did not use classes. In our examples, we’ve done very well so far using the classless model. 
But how do we implement inheritance without classes? In a slightly different form than that known as classes, 
we did it using prototypes, i.e. existing objects connected in an appropriate way to newly created objects. Hence the name – a prototype object model.

The ECMA6 standard introduced classes into JavaScript as an alternative to prototypes and constructors. 
Both of these approaches can now be applied equivalently.

Admittedly, the class approach is much simpler for people who are starting to learn programming or switching to JavaScript from another object-oriented language.

There are many JavaScript programmers who have only used classes, often without knowing about the existence of prototypes. 
So, we won’t devote too much space to prototypes in this course, instead looking at classes much more closely. 
However, when programming in JavaScript, you must at least be aware of the existence of prototype technology.

  Note   Nowadays, most often literal notation and classes are used to create objects in JavaScript. 
  The literal notation technique is suitable for creating objects that are not very complex, often created ad hoc, 
  in which we are not interested in using inheritance. Classes are used wherever we will repeatedly create similar objects, 
  often a little more complex, in which inheritance appears.
*/

print("Hello world!")

/*
Let's take a look at the objects created using literal notation. Let's create two objects, point and coloredPoint. 
The point object contains the coordinates of its position on the surface, while coloredPoint contains only color.
*/

let point = {x:0, y:0};
let coloredPoint = {color: "red"};

/*
We mentioned earlier that every new object in JavaScript is created by default from the generic Object constructor.

One of the properties that each object inherits is the __proto__ field. Let's see what happens when we use this field to connect our two objects.
*/

coloredPoint.__proto__ = point;

/*
Thus, the point object becomes a prototype of the coloredPoint object. By the way, point also has its prototype, 
which is an object created by default on the basis of the Object constructor. Hence we are talking about a chain of prototypes.

  Note   In normal programming, we absolutely do not use __proto__. Direct use of this field is considered obsolete, 
  withdrawn from the standards, slow. Here, we use it only to learn the basics of prototyping step by step.

Let's try to refer to the property of the coloredPoint object.
*/

console.log(Object.getOwnPropertyNames(coloredPoint));
console.log(coloredPoint.color);
console.log(coloredPoint.x);

/*
As expected, Object.getOwnPropertyNames shows us that the object has only the color property.

The fact that we have access to it is therefore obvious. However, we try, successfully, to read the x field. What happens then? 
JavaScript does not find a field named x in the coloredPoint object and looks for it in the prototype.

If it doesn't find it there, it looks for it in the prototype, and so on (hence the chain of prototypes).

Now let's try to change the value of the property we inherited from the prototype.
*/

coloredPoint.x = 100;   // new property
console.log(coloredPoint.x);
console.log(point.x);
console.log(Object.getOwnPropertyNames(coloredPoint));

/*
It turns out that when trying to write to such a property, JavaScript does not follow the chain of prototypes.

If it doesn’t find a property directly in the object, it creates it, and assigns a new value to it. This way, among other things, 
the properties of the prototype are protected (and the same prototype can be used by many different objects).

Now let's change the value of one of the properties of the point object, which is our prototype, to a test.
*/

point.y = 200;
console.log(coloredPoint.y);
console.log(point.y);

/*
The change is visible both at the level of the point object and the coloredPoint object, for which point is a prototype. 
Using the __proto__ property for prototypes is, as we wrote earlier, not recommended. To present alternatives, let’s use a slightly more elaborate scenario.
*/