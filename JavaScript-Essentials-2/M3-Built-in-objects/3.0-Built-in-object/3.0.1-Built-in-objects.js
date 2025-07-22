/*--------------------- 3.0.1 Built-in objects ---------------------*/
/* 
You’ve now learned to define and create your own objects using techniques such as literals, constructors, or classes.

The structure of these objects, that is, the properties and methods they contain, will obviously result from what you need at the moment.

However, we do not have to do everything ourselves. In JavaScript, many of the language's functionalities are provided in the form of ready-made, predefined objects.

If, for example, you want to do some math, you will reach for Math, and you will use JSON to convert an object to a form that can be sent through the network.


These are some of the standard built-in objects.

The term "built-in object" is a generally accepted term, used for example in the ECMAScript standard or in the MDN (Mozilla Developer Network) Web Docs documentation, 
which is probably the most complete help for web developers.

Many of these objects, like Math and JSON, are actually ordinary objects. 
We use them by giving the name of the object and the method or property that is specific to it, for example, JSON.stringify.

However, not all "built-in" objects are ordinary objects.

It’s just an overall term under which, in many cases, built-in classes or functions, such as Object or Date, are also hidden.

So shouldn't we call them "built-in classes"?

Not necessarily – as we said before, in JavaScript everything except primitives is an object, including classes and functions.

Therefore, a unified naming convention has been adopted for all elements (objects, classes, functions, constructors) built into the language.

However, before using one of the built-in objects, remember to check if it actually is an object, 
or if it’s maybe a class from which you will create an object of a specific type.

In this module, we will take a closer look at a few selected objects, which are probably the most commonly used in everyday JavaScript practice. 
At the same time, at this stage of learning, they are also the easiest to understand.

We’ve already encountered some of these objects (checking the current date is one example), and others will be introduced later in the course (such as Promise).

A complete list can be found on the pages of the MDN Web Docs1.

By the way, we highly recommend that you take a look at this website. Consider it a basic source of information about JavaScript, 
which will help you not only during this course, but also after it is finished.


What you have learned so far will help you to understand what the built-in objects make available to us, and how.

Using methods and properties, creating objects, checking their types and instances – all of this should not cause you the slightest problem. 
It will also be important to distinguish between static and prototype methods and properties (or in other words, methods and properties of instances).

We talked about the difference between such methods in the chapter on classes. It’s worth recalling here some basic facts about this topic. 
If there was a method in the class definition, it was normally a prototype method or an instance method. This method was available in a class-based object.

That is what classes are for, right?

However, if we preceded the declaration of the method with the keyword static, we indicated that it was to be treated as static, and we would not find it in the resulting object.

1Standard built-in objects
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

Let’s go back to the example from the previous module:

class AlmostEmptyClass { 
 
    constructor(sth) { 
        console.log(sth); 
    }; 
 
    sayHi() { 
        console.log("Hi!") 
    }; 
 
    static sayHello() { 
        console.log("Hello!") 
    }; 
 
}; 
 
let almostEmptyObject = new AlmostEmptyClass(120); // 120 
almostEmptyObject.sayHi(); // -> Hi! 
almostEmptyObject.sayHello(); // error
AlmostEmptyClass.sayHello(); // -> Hello!

We won’t go through the whole example again here – one glance should be enough for you to remember what it was all about.

If you still have any doubts, go back to the explanations in the previous chapter before moving on.

Why is the distinction between static and prototype fields so important to us?

Because most of the built-in objects we are discussing will use both.

Without understanding this difference, you will have a problem with both the documentation describing the selected objects and their correct use.

Let's take a look, for example, at the Number constructor, which is used to create objects that are wrappers for number primitives (we’ll discuss it further in this chapter).

let n = new Number(100.123);
let fixed = n.toFixed(2);
let test1 = Number.isInteger(100);
let test2 = n.isInteger(100); // -> n.isInteger is not a function

In our example, we create the object n, using the Number constructor (we pass 100.123 to it).

In the Number documentation, we’ll find information stating that it contains the toFixed method, 
which returns a string with our number using fixed-point notation (we specify the number of digits after the decimal point we are interested in).

It is a prototype method (or instance method).

So we use it by using the object created by the Number constructor.

Hence, in the second line of the example, n.toFixed(2) appears.

The method works on a particular object, and operates on its properties, in our case on the value 100.123.

In the same documentation, we can find information about another method, this time static: isInteger.

This method allows us to test if the number is an integer.

It is a static method, so it is connected not with the created object (instance) but with the constructor (or in other cases, with the class).

So the method does not work on the object.

It uses only the value passed as an argument of the call.

Let’s divide the objects discussed in this chapter into three groups. 
Our division is arbitrary, and does not stem directly from either the documentation or the way they are implemented. 
We are rather guided here by the usability of the objects, so don’t be surprised if you look at other materials about built-in objects and find a different classification.

The first group are objects representing simple data types:
- Boolean
- Number
- String
- Date

The second group includes objects representing composite data types:
- Array
- Set
- Map
- Object

The third group is made up of objects that are not related to data types, but that simplify our everyday work with JavaScript:
- JSON
- Math
- RegExp

As we have already pointed out, this is not a complete overview of the standard built-in objects.

We’ll only get to know a very basic set.

Each of the objects will be discussed from a strictly functional point of view, and this will not be an exhaustive analysis of all available methods and properties.

We’ll focus only on those methods and properties that are either the most useful in practical programming, or that are needed to understand other mechanisms.

If you’re interested in expanding your knowledge in this area, take a look at the MDN pages.
*/