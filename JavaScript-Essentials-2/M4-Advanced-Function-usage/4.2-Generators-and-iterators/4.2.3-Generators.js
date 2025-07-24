/*--------------------- 4.2.3 Generators ---------------------*/

/* 
A generator is a special kind of function that can repeatedly interrupt its execution (by returning a certain value) 
and repeatedly resume its execution at the point where it was interrupted.

In generators, the yield operator is a key element.

It is equivalent to return, but it doesn't end the function; it just interrupts it, returning the given value.

To indicate in JavaScript that we are defining a generator and not a normal function, we must put an asterisk * after the function keyword.

When we run it, the generator function does not execute the code we wrote but creates a new iterator object (called Generator in this case).


Only the call to the next method of such a created iterator causes the execution of our code, but each time the execution stops after the yield operator.

Let's look at a simple example of a generator.

Take a look at the code below:
*/

function* testGenerator() {
    yield 10;
    yield 20;
    yield 30;
}
let geno = testGenerator();
console.log(geno.next()); // -> {value: 10, done: false}
console.log(geno.next()); // -> {value: 20, done: false}
console.log(geno.next()); // -> {value: 30, done: false}
console.log(geno.next()); // -> {value: undefined, done: true}

/*
As you can see, every call to next goes to the next yield keyword.

Let's see what happens when we try to do the same thing in a loop.

Look at the code here:
*/

function* testGenerator() {
    for (let i=10; i<=30; i+=10) {
        yield i;
    }
}
let gene = testGenerator();
console.log(gene.next()); // -> {value: 10, done: false}
console.log(gene.next()); // -> {value: 20, done: false}
console.log(gene.next()); // -> {value: 30, done: false}
console.log(gene.next()); // -> {value: undefined, done: true}

/*
The effect is exactly the same.

Let's try one more modification.

Look at the code below:
*/

function* testGenerator() {
    let data = [10, 20, 30];
    for (let element of data) {
        yield element;
    }
}
let gen = testGenerator();
console.log(gen.next()); // -> {value: 10, done: false}
console.log(gen.next()); // -> {value: 20, done: false}
console.log(gen.next()); // -> {value: 30, done: false}
console.log(gen.next()); // -> {value: undefined, done: true}

/*
This time, calls of the next method return successive values from the array.

That is, we are doing something we need to handle our iterable object from the previous examples.

print("Hello world!")

let's try to modify our iterable object using the generator function.

Look at the code below:
*/

let iterable = {
    data: [10, 30, 60, 20, 90],
    [Symbol.iterator]: function* () {
        for(element of this.data) {
            yield element;
        }
    }
}
let ito = iterable[Symbol.iterator]();
console.log(ito.next()); // -> {value: 10, done: false}
console.log(ito.next()); // -> {value: 30, done: false}
for( a of iterable ) {
    console.log(a); // -> 10  30  60  20  90
}
console.log(...iterable); // -> 10  30  60  20  90
console.log([...iterable]); // -> [10  30  60  20  90]

/*
You should be able to see now that it looks much simpler.

It’s worth noting that both the for ... of and the spread operator can be applied not only to iterable objects, but also to iterators.
*/

let it1 = iterable[Symbol.iterator]();
console.log([...it1]); // -> [10  30  60  20  90]
console.log([...it1]); // -> []
let it2 = iterable[Symbol.iterator]();
console.log([...it2]); // -> [10  30  60  20  90]

/*
You can see that passing the iterator to the end of the collection once, even when using the spread operator or for ... of, does not allow us to use this iterator again.

However, generators allow us to do much more.

First of all, as we have already shown, they can return consecutive values that are not elements of any real set.

This is what we did in the first example with a loop.

Let's create a simple generator that will return successive values of the factorial.
*/

let factorialGenerator = function* (range = Infinity) {
    let last = 1;
    for (let index = 1;index <= range; index++){
        last *= index;
        yield last;
    }
}
let factorialo = factorialGenerator(3);
console.log(factorialo.next()); // -> {value: 1, done: false}
console.log(factorialo.next()); // -> {value: 2, done: false}
console.log(factorialo.next()); // -> {value: 6, done: false}
console.log(factorialo.next()); // -> {value: undefined, done: true}

/*
Note that in the example we have created a generator function to which we pass the range parameter.

It defaults to Infinity and shows us how many consecutive values of the power can be maximally computed.

Using this as a base, we create an iterable object or, just for fun rather than any sensible reason, a class based on which we create the object.
*/

class Factorial {
    constructor(range = Infinity) {
        this.range = range;
    }
    [Symbol.iterator] = function* (){
        let last = 1;
        for(let index = 1; index <= this.range; index++){
            last *= index;
            yield last;
        }        
    }
}
let factorial = new Factorial(5);
console.log([...factorial]); // -> [1, 2, 6, 24, 120]
let it = factorial[Symbol.iterator]();
console.log(it.next().value); // -> 1
console.log(it.next().value); // -> 2
console.log(it.next().value); // -> 6

/*
The factorial object that we used the Factorial class to create is an iterable object that doesn’t have any real collection of data. 
All the elements are generated on the fly. This is a good solution because when we use an iterator, we don’t need to generate all the elements in advance.

They will be generated depending on the needs after calling the next method. 
In addition, we can create a collection with an infinite number of elements, which would be rather difficult if we used something like a regular array.

Generators are very often used without creating iterable objects in the form we showed earlier.

In many cases, the function itself is enough.

Thanks to this, we can create many iterators, which can be used both in a classic way (i.e. the next method) or, by using the spread operator, for ... of.

Take a look at yet another example of a generator, this time allowing us to create successive elements of the Fibonacci sequence.

Look at the code below:
*/

function* fibonacci(range = Infinity) {
    let lastButOne = 0, last = 1;
    yield lastButOne;
    yield last;
    for(let i=1; i<=range; i++) {
        let tmp = lastButOne + last;
        lastButOne = last;
        last = tmp;
        yield last;
    }
}
let fibIt1 = fibonacci(10);
console.log([...fibIt1]);
let fibIt2 = fibonacci();
console.log(fibIt2.next().value);
console.log(fibIt2.next().value);
console.log(fibIt2.next().value);
console.log(fibIt2.next().value);
let fibIt3 = fibonacci(5);
for( let f of fibIt3) {
    console.log(f);
}

/*
As you can see, we have successfully used the generator and iterators without explicitly creating an iterable object.

An interesting option is to use the yield* operator instead of yield.

This causes the execution of the action to be delegated to another iterable object.

The easiest way to explain this is to use the following example – take a look at the code:
*/

function* cities() {
        for(let city of ['London', 'Oslo', 'Berlin']) {
            yield city;
        }
}
function* test() {
    yield* cities();
    yield 'Amsterdam';
    yield* ['Madrid', 'Rome'];
}
console.log([...test()]); // -> ['London', 'Oslo', 'Berlin', 'Amsterdam', 'Madrid', 'Rome']

/*
Inside the test generator function we use yield* to refer to the cities generator.

The initial calls of the next iterator method (even implicit) are delegated to the cities generator.

Next we have a single yield call with the value 'Amsterdam'.

After that comes yield*, which delegates the next calls to the iterable object, which is the array ['Madrid, 'Rome'].

As a result, we go through all the elements, both indirectly and directly available in the generator.
*/