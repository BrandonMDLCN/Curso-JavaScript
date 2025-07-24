/*--------------------- 4.2.2 Iterators ---------------------*/

/* 
An iterator is a specific object that is associated with an iterable object.

As we have already said, it can be treated as a pointer to a specific element of the iterable object.

The iterator, when created, initially does not point to any element. Only using the next method, which the iterator provides, sets it on the first of the elements.

Each subsequent call of the next method moves it to the next element.

The next method, apart from moving the iterator to the next element, returns an object that consists of two fields:

value, which contains the element of the iterable object that the iterator points to after calling next 
(e.g. after the first call to next, the first element of the collection)

done, which is set to false by default and changes its value to true when calling next, 
causes the iterator to move beyond the last element of the collection (in such a situation the value is undefined).
Such behavior of iterators is compliant with the Iterator protocol.

So when reversing the situation slightly, we can say that the objects implementing the Iterator protocol (by having the appropriate next method) are iterators.


Since iterators are related to iterable objects, let's first try to create our own iterable object from scratch.
*/

let almostIterableo = {
    data: [10, 30, 60, 20, 90]
}
for( let a of almostIterableo ) { // -> TypeError: almostIterable is not iterable
    console.log(a); 
}
let arr = [...almostIterableo]; // -> TypeError: almostIterable is not iterable

/*
As you can see, the first attempt fails. The almostIterable object contains data which is iterable, 
but we haven’t equipped it with any mechanism that would allow us to use the for ... of spread operator or an iterator.

Let's start by adding this last option – a method that allows us to create an iterator.

This method, tentatively named iterator, will create an object with the next method when called.

The next method will return an object containing the value and done fields, arbitrarily set to undefined and false.
*/

let almostIterable1 = {
    data: [10, 30, 60, 20, 90],
    iterator: function() {
        return {
            next: function() {
                return {
                    value: undefined,
                    done: false
                }
            }
        }
    }
}
it = almostIterable1.iterator(); // -> {next: ƒ}
it.next(); // -> {value: undefined, done: false}

/*
This time everything works, although as you can see the iterator is not related to the data in the data array – calling next does not return the first element.

Let's change this by adding some logic to both the iterator and next methods.

Look at the code below:
*/

let almostIterable = {
    data: [10, 30, 60, 20, 90],
    iterator: function() {
        let index = -1;
        let data = this.data;
        return {
            next: function() {
                index++;
                return {
                    value: data.length === index ? undefined : data[index],
                    done: data.length === index
                }
            }
        }
    }
}
let it = almostIterable.iterator();
console.log(it.next()); // -> {value: 10, done: false}
console.log(it.next()); // -> {value: 30, done: false}

/*
There are two new variables in the iterator method: index and date.

The first one indicates the current position of the created iterator; the second one is a reference to our iterable collection (in this case an array of numbers).

Both variables are used in the next method of the returned iterator and will remain available to it even after the iterator method ends (remember the closures).

Using the iterator method we create an iterator object named it, which we have successfully used to traverse the first two elements of the collection.

Let's further test the effectiveness of our solution when using the for ... of loop and the spread operator.

Look at the code below:
*/

for( let a of almostIterable ) { // -> TypeError: almostIterable is not iterable
console.log(a); 
}
console.log(...almostIterable);  // -> TypeError: almostIterable is not iterable
console.log([...almostIterable]);  // -> TypeError: almostIterable is not iterable

/*
Unfortunately, this time it fails.

But how is the interpreter supposed to know that in the almostIterable object, the method creating the iterator is called iterator?

In the previous example, we called the method explicitly, but this time it does not appear anywhere.

It turns out that both for ... of and the spread operator look for such a method, but it must have a slightly different name.

This name in JavaScript is generated using the Symbol.iterator construct.

Let's make this small correction and see what happens.

Because the new method name is not given as a string, this time we will use bracket notation instead of dot notation 
(both in the method definition and during the method call).

Look at the code below:
*/

for( let a of almostIterable ) { // -> TypeError: almostIterable is not iterable
console.log(a); 
}
console.log(...almostIterable);  // -> TypeError: almostIterable is not iterable
console.log([...almostIterable]);  // -> TypeError: almostIterable is not iterable

/*
We have managed to create our own iterable object, which allows us to create our own iterators.

A complete success! Although we must admit that the iterator code does not look the prettiest.

Is there anything we can do about it?

Of course – with a little help from generators.
*/