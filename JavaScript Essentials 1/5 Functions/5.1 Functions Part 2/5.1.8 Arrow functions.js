/*--------------------- 5.1.8 Arrow functions ---------------------*/
/*
An arrow function is a shorter form of a function expression. 
An arrow function expression is composed of: parentheses containing zero to multiple parameters 
(if exactly one parameter is present, the parentheses can be omitted); 
an arrow that looks like this "=>"; and the body of the function, 
which can be surrounded by curly brackets if the body is longer. 

If an arrow function has only one statement and returns its value, we can omit the return keyword, 
as it will be implicitly added.

For example, the function add, which we already know:
*/
let add = function(a, b) {
    return a + b;
}
console.log(add(10, 20)); // -> 30

//can be written as follows:
let adda = (a, b) => {
    return a + b;
}
console.log(adda(10, 20)); // -> 30

//or simplified even more (the function has only one statement, whose value returns):
let addo = (a, b) => a + b;
console.log(addo(10, 20)); // -> 30

/*
If the arrow function takes exactly one parameter, the parentheses may be omitted. 
Let's go back to the examples with the recursive factorial function, which takes exactly one parameter, n. 
In the previous example, we declared it using the function statement:
*/
function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(5)); // -> 120

/*
Note that this time, the parameter is not given in parentheses 
(again,– if the arrow function takes exactly one parameter, the parentheses can be omitted). 
Since the function returns the result of exactly one statement, 
the return keyword can also be omitted.

The arrow expression is mainly used for short functions, often anonymous, 
which can be presented as even more compact in this form.

One typical example of using arrow functions is the forEach method, available in Array type data. 
We have learned several ways of passing through array elements, using different types of loops. 
The forEach method is another, and frankly speaking, currently the most used one. 
This method takes as an argument ... a function.

This function will be called each time for each element of the array. We can create any function for this purpose. 
There is one condition, which is that it must have at least one parameter, 
which will be treated as a visited element of the array 
(the syntax of this function may be a bit more complex, but we will explain it in the next part of the course). 
Let's look at a simple example:
*/
let names = ['Alice', 'Eve', 'John'];
function showName(element) {
     console.log(element);
}
names.forEach(showName); // -> Alice, Eve, John

/*
The showName function has been passed as a call argument to the forEach method of the names array. 
Therefore, showName will be called three times, for each element of the names array, 
and in each call its parameter will be equal to the successive name, i.e. in turn: Alice, Eve and John. 
The only thing showName has to do is to display the received element (name).

The same effect can be achieved by passing an anonymous arrow function to the forEach method. 
We do not even store it in a variable, 
because we assume that we will use it only here and will not refer to it again.
*/
