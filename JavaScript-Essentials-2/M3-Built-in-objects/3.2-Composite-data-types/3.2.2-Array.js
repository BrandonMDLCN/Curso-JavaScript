/*--------------------- 3.2.1 Composite data types ---------------------*/

/* 
When we talk about composite data types, we mean structures for storing many values of different types in different forms.

These structures differ in the way values are identified, accessed, or organized.

They are practically always dynamic, that is, they allow both the values stored in them and the size of the structure to change.


Let’s take a look at several selected composite types available in JavaScript.
*/

/*--------------------- 3.2.2 Array ---------------------*/

/* 
The Array constructor is used to create arrays, ordered collections of elements.

An array is a composite data structure, which can contain many elements of different types, and its size and contents can change.

We gain access to particular elements by knowing their successive number in the array (i.e. their index).


The basic concept of arrays and their use should be familiar to you from the first part of the course.
*/

/*--------------------- 3.2.3 Creating an array ---------------------*/

/* 
We can create new arrays in many ways. Until now, we have used the literals technique, using square brackets in the declaration.

When we create an array in this way, we refer to the Array constructor implicitly, although nothing stands in the way of us calling it explicitly.

Let’s check this out - look at the code below:
*/

let array1 = []; // -> []
let array2 = [2, 4, "six"]; // -> [2, 4, "six"]
let array3 = new Array(); // -> []
let array4 = new Array(2); // -> [undefined, undefined]
let array5 = new Array(2, 4, "six"); // -> [2, 4, six]
let array6 = new Array("2"); // -> ["2"]
console.log(`array2 : ${typeof array2} : ${array2 instanceof Array} : ${array2.length}`); // -> array2 : object : true : 3
console.log(`array5 : ${typeof array5} : ${array5 instanceof Array} : ${array5.length}`); // -> array5 : object : true : 3

/*
As you can see, we use both techniques successfully to create new arrays.

Let’s take a closer look at the constructor itself.

If we don’t give any argument to the constructor, an empty array will be created (containing zero elements).

Passing exactly one argument, which is a positive number, will create an array of the length this one argument.

All elements in the array will be undefined.

If you specify more arguments, or a single argument that is not a number, the constructor will create an array of the given arguments.

Regardless of whether we have created the array using square brackets, or explicitly using a constructor, 
we access the individual elements by specifying the element number in square brackets after the array name.

Remember that the elements of an array are indexed from 0.

If we give an index outside the scope of the array, we get an undefined value.

Let's continue with the previous example.

Look at the code below:
*/

console.log(array2[0]); // -> 2
console.log(array5[2]); // -> "six"
console.log(array5[5]); // -> undefined

/*
The only useful prototype property of the Array constructor is length, with which we can check how many elements our array contains.

We will not find anything particularly interesting here.

However, the set of prototype methods is very extensive. We will choose from them some of the most useful ones.

If you want to take a look at the rest of them, you can find a description on the MDN5 website.

5The Array object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

