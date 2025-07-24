/*--------------------- 4.2.1 Generators and iterators ---------------------*/

/* 
The concept of iterators and generators was imported from functional languages and is now implemented in many general-purpose languages.

In JavaScript, both iterators and generators appeared with ECMAScript 2015 (also known as ECMAScript 6 or ES6).

To begin with, it may be helpful to introduce the concept of iterable objects.

These are usually collections of data through which we can "iterate" (i.e. pass through successive elements).

There are several built-in iterable objects in JavaScript, such as Array, Map and Set.

To pass iterable objects we can use:

the for ... of statement;

the spread operator (three dots)

iterators (which we will discuss shortly)
Suppose we declare an object of type Set that will contain two numeric elements, then add two more elements to it.
*/

let s = new Set([1, 30]);
s.add(500);
s.add(50);

/*
Object s is a typical iterable object. It contains four elements that can be accessed using the techniques we just mentioned. First, we use the for ... of statement:
*/

for(let e of s) {
    console.log(e); // -> 1  30   500   50
}

/*
Using the spread operator, we can transform an iterable object into an array:
*/

console.log([...s]); // -> [1, 30, 500, 50]

/*
or split it into individual arguments passed to the function:
*/

console.log(...s); // -> 1  30  500   50

/*
We can also create an iterator, which is an object that is something like a pointer to a particular item in the collection, and use it to pass through our object s.
*/

let it = s[Symbol.iterator]();
console.log(it.next().value); // -> 1
console.log(it.next().value); // -> 30
console.log(it.next().value); // -> 500
console.log(it.next()); // -> {done: false, value: 50}

/*
While the for ... of statement or the spread operator are already known to you, the iterator used in the last example is certainly something new.

Let’s devote some more of our time to it.
*/