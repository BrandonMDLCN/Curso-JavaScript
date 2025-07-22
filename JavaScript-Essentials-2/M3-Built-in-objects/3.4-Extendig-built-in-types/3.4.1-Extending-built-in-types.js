/*--------------------- 3.4.1 Extending built-in types ---------------------*/

/* 
With built-in objects, even among the many methods they offer, we will not always find the one suitable for what we need.

Very often we will have to create new functionalities for specific tasks.

Let's imagine that while developing an application, we need to draw one element from a given array.

The Array constructor obviously does not have such a method, so let’s try to solve the problem ourselves.

To begin with, let's create a simple function which will return an element of the array, not a random one, but the one indicated by the index.

If we give an index outside the scope of the array, the function will return undefined.
*/

let getItemo = function(array, index) {
    let retVal;
    if(index > 0 && index < array.length) {
        retVal = array[index];
    }
    return retVal;
}
let arrayo = [10, 20, 80, 100];
console.log(getItemo(arrayo, 2)); // -> 80

/*
The function works as expected, although it contains some redundant code.

We can remove the if instruction by replacing it with a conditional operator:


let getItemo = function(array, index) {
    return (index > 0 < index < array.length) ? array[index] : undefined;
}


Doesn't our code look simpler now? But is it necessary to check whether the index is within the range of the array elements?

In our case, not necessarily, because referring to an element outside the array will return undefined anyway.

Let’s simplify the function even more:
*/

let getItem = function(array, index) {
    return array[index];
}

/*
Let’s now create a function that will solve our main problem, that is, it will return a random element, not an indicated one.

For this purpose we will use, among others, a piece of code to draw integers, which we have prepared ourselves while discussing the Math object.

Of course, we can also omit the already unnecessary index parameter.

Look at the code below:
*/

let getRandomItem = function (array) {
    return array[Math.floor(Math.random() * array.length)];
}
let array = [10, 20, 80, 100];
console.log(array.length);
console.log(getRandomItem(array)); // -> ?
console.log(getRandomItem(array)); // -> ?

/*
Everything works as it should.

However, we have created a function not permanently linked to the array.

Would it be possible to create the same functionality in the form of a method, extending the array object?

It turns out we can.

It is enough to make a slight improvement to the Array constructor, or more precisely, to its prototype.

It may sound dangerous, but in its execution it is trivial (we discussed this technique in the chapter on objects).

Let's try to change our function to the Array prototype method.

Look at the code below:
*/

Array.prototype.getRandomItem = function() {
    return this[Math.floor(Math.random() * this.length)];
}
console.log(array.getRandomItem()); // -> ?
console.log(array.getRandomItem()); // -> ?

/*
We have added a new method, getRandomItem, to the prototype field of the Array constructor.

It doesn’t accept any arguments, because the array on which we work is stored in the object.

We have access to this object from inside the method using this.

Therefore, we have succeeded and everything is working correctly!


The change in the Array constructor that we just made is, of course, only applicable to our application, and only until it is restarted.

In the same way, we can modify other constructors by adding the necessary methods.

This technique, with regard to built-in objects, has as many supporters as opponents.

Its main disadvantage is that JavaScript is constantly changing, and we can’t be sure that over time, 
the method we have introduced ourselves won’t appear in the modified constructor.
*/