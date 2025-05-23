/*--------------------- 1.1.2 Array as a complex type ---------------------*/
/*
Complex types, such as arrays or objects, are data collections – an ordered set of different values can be placed in one variable. 
In the case of an array, individual values placed in a single variable are called elements, 
and are referred to by a number specifying their position in the collection (i.e. an index).

In JavaScript, indexes start at 0, so the first element will have an index of 0, the second an index of 1, and so on. 
As a reminder, arrays are most easily created using square brackets (although this is not the only way to create them).
*/

let a = [10, 20, "en to tre", true, 50];
a[4] = a[4] * 2;
console.log(a[0]);    // -> 10
console.log(a[2]);    // -> en to tre
console.log(a[4]);    // -> 100

/*
In the example, we created a five-element array, modified its last element, and referred to a few elements (displaying their values).

We’ll return to arrays and their more advanced applications in the following chapters.
*/



/*--------------------- 1.1.3 An object as a different type of array ---------------------*/
/*
From a formal point of view, an object can be treated as a special kind of array.

In computer science, arrays of this type are called association arrays (or, in the theory of data structures, they are called maps).

How do they differ from ordinary arrays? We don’t refer to the individual elements of an object by means of indexes, 
which define their position in the collection, but by means of keys (i.e. we "associate" an element with a key).

A key is simply a label (a name), which is unique within an object and unambiguously defines the selected element.

In objects, we call their component elements properties. Each property will consist of a key (or label) and a value.

The idea of objects comes from observing the surrounding reality. Practically everything in our environment, whether material (e.g. a car) 
or abstract (e.g. a contact in an address book) is a collection of certain components.

We can name these elements, or properties, and assign them specific values. Properties define a given object.

As we’ll see later in the course, JavaScript allows you to create objects in many different ways. The easiest way is to use curly brackets.
*/

let sampleObject = {
    id: 10, 
    delay: 20,
    name: "en to tre",
    isPresent: true,
    delay: 50
};
sampleObject.delay = sampleObject.delay * 2;
console.log(sampleObject.id);    // -> 10
console.log(sampleObject.name);    // -> en to tre
console.log(sampleObject.delay);    // -> 100

/*
In the example, we have created a sampleObject containing five properties, 
modified the contents of the delay property and referred to the id, name, and delay properties (displaying their values).

In the further part of the course, we’ll alternatively use the equivalent terms key and property name, as well as property and object field.
*/