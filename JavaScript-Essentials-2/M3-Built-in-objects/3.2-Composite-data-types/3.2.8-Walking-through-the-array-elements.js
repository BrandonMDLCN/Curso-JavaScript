/*--------------------- 3.2.8 Walking through the array elements ---------------------*/

/* 
One of the most frequently used methods of the Array constructor is forEach, which allows us to go through all elements of the array.

This is an elegant alternative to the ordinary for loop, which we used for this purpose before.

Let's take a look at an example that uses the for loop:
*/

let array13 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
for(let index=0; index< array13.length; index++) {
    console.log(`${index} : ${array13[index]}`); // -> 0 : cat -> 1 : 90 -> 2 : 80 -> 3 : 10 -> 4 : 20 -> 5 : 30 -> 6 : 100 -> 7 : 50 -> 8 : dog
}

/*
The construction is very simple.

We set the index variable to 0 and increase it by 1 in each iteration until the index is equal to the length of the array.

In each iteration, we display the index and the corresponding array element.

Is there an even easier way to do this? It turns out that yes, there is.

However, we’re going to simplify it gradually, initially complicating the code even more.

We’ll create the toConsole function, which will take three parameters: item, index, and array. This is the format imposed by the forEach method.

The name of the function is given to the forEach method to be called. What happens then?
*/

function toConsole(item, index, array) {
    console.log(`${index} : ${item}`);
}
array13.forEach(toConsole); // -> 0 : cat -> 1 : 90 -> 2 : 80 -> 3 : 10 -> 4 : 20 -> 5 : 30 -> 6 : 100 -> 7 : 50 -> 8 : dog

/*
The forEach method goes through all elements of the array stored in our object (in this example, array13).

For each element, it calls a function that has been passed to it as an argument (toConsole).

Each call to this function will receive different item and index arguments.

The array argument will be the same every time – it is just our whole array (in practice it is rarely used).

Let's try to simplify our example:
*/

array1.forEach(function (item, index) {
    console.log(`${index} : ${item}`);
});

/*
What has changed?

We have abandoned the explicit declaration of our toConsole function and used an anonymous function instead 
(the differences between anonymous and named functions were discussed in the first part of the course).

This function does not have a name, so we cannot refer to it from another place in the code.

We don't mind, however, because the function will only be used by the forEach method.

So we have given not the name of the function to the method, but the whole anonymous function.

By the way, we removed the array from our function's parameter list, which we weren’t using anyway.

Let's go a step further by changing our ordinary function into an array function:
*/

array1.forEach( (item, index) => {
    console.log(`${index} : ${item}`);
});

/*
As you can see, the function body (that is, what is inside the function) has not changed.

The arrow functions allow us to simplify the notation even further by removing the parentheses around the function body 
(in the function body only one command is executed and the block is not needed).
*/

array1.forEach( (item, index) => console.log(`${index} : ${item}`));

/*
That is what we wanted.

Compare this piece of code with the construction written with the for loop, and you’ll see that now it looks much simpler and more elegant.

Get used to this type of construction.

First of all, many array methods work on a similar principle, and secondly, in real applications, you will rarely see the for or while loops.
*/

/*--------------------- 3.2.9 The every and some methods ---------------------*/

/* 
A similar technique is used, among others, in two consecutive methods: every and some.

The first one, every, checks whether all the elements of the array meet a certain condition we have given.

The second method, some, is successful if at least one of the elements meets the condition. 
The methods return true in the case of success, or false in the case of failure.

Both take as an argument a function that will allow the testing of a single element.

Both some and every pass through the array, calling the given function for individual elements (every for all, some until an element satisfies our condition).
*/

let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let anyNumberPresent = array1.some( (item) => {
    if(typeof item === "number") {
        return true;
    } else {
        return false;
    }
}); // -> true

/*
This time we use the anonymous arrow function, passing it as an argument to the some method. 
The function in the example only takes the parameter item, although, like in forEach, we can use the parameters index and array if necessary. 
Our function checks if the item is a number primitive.

If so, it returns true, and if not, it returns false. Here, of course, we can use any logic, and we decide how our testing function works, what is true and what is false. 
In the case of the some method, it is sufficient that the function for one element returns true. Then the some method also returns true.

In the case of the every method, the function must return true for all tested array elements. Only then does every return true.

In our example, the result of the array1.some call is returned to the anyNumberPresent variable.

Our function code is a bit redundant, so let's simplify it.

The operator typeof returns true or false, so the whole conditional if instruction is actually unnecessary.
*/

anyNumberPresent = array1.some( (item) => {
    return (typeof item === "number");
}); // -> true

/*
There is only one instruction in the function block, so we can remove the brackets that enclose it.

Note that in arrow functions, where we do not use curly brackets to mark the function block, the return keyword also disappears.

The arrow function automatically returns the result of such a single instruction.

As there is only one parameter item passed to the function, we can also omit the parentheses surrounding the parameter.
*/

anyNumberPresent = array1.some( item => typeof item === "number"); // -> true

/*
We have prepared a similar example for the every method.

This time we want to check if all the elements in the array are numbers greater than zero.
*/


let array2 = [90, 80, 10, 20, 30, 100, 50];
let allPositive = array2.every(item => item > 0); // -> true


/*--------------------- 3.2.10 Filtering ---------------------*/

/* 
The use of another method, the filter, is very similar.

Just like the every method, it calls a test function we have written for each element of the array.

In this function, we decide whether a single element has passed the test (we return true) or not (we return false).

The filter method copies all elements that have passed our test and returns them as a new array.

That is, it actually filters the original array, using the single element test function.

Let's stress that again – the filter method creates and returns a new array (it does not modify the original one).

Look at the code below:
*/

let array12 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
console.log(array12.length); // -> 9
let number = array12.filter(item => typeof item === "number"); // -> [90, 80, 10, 20, 30, 100, 50]
console.log(number.length); // -> 7
console.log(array12.length); // -> 9

/*
In the example, the numbers variable gets those elements from the array12 that are number primitives.

In the testing function, we use only the item parameter, although just like in every, some, or forEach we can also use other ones: index and array.
*/

/*--------------------- 3.2.11 Mapping elements ---------------------*/

/* 
Another interesting method is map.

Like filter, it returns a new array of the same size as the original one.

The new array is created by performing the action we invented on each element of the original array.

In the example, this action is trivial, and the new element is obtained by multiplying the original element by itself.

However, the logic of such an action can be much more complex, and it depends only on us and our needs.

Note that in the example, we first use the filter method to copy only the elements that are numbers from array1.

It’s only in the next step that we call the map method, using method chaining.

Look at the code below:
*/

let array14 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let squarePower = array14.filter(item => typeof item === "number").map(item => item*item); // -> [8100, 6400, 100, 400, 900, 10000, 2500]

/*
New elements have been added to the squarePower array.

The function passed to the map method takes the item, index, and array arguments, although in our example we have limited ourselves to using the item argument.
*/

/*--------------------- 3.2.12 Sorting ---------------------*/

/* 
A very useful method is sort, which, as you rightly think, sorts the array elements. This time, we’re operating on the original array, and we’re not making a copy of it.

When we call the sort method, the order changes, and is visible in the array.

In what order are the elements of the array sorted? It depends only on us.

The sort method accepts, like the previously discussed methods, the function we have created.

It will be a function that compares the two elements of the array and decides which element should be the preceding one, and which element should be the next in order.

The function takes two parameters: first and second, which correspond to the two elements being compared.

If we think that the first element should precede the second, we return a negative value (for example -1). 
If the first should be moved after the second, we return a positive value.

Returning 0 means that we think the elements are equal (in terms of sort order). 
The sort method repeatedly (and implicitly) calls a comparison function for different elements until the array is sorted.

Look at the code below:
*/

let array15 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let numberss = array15.filter(item => typeof item === "number"); // -> [90, 80, 10, 20, 30, 100, 50]
console.log(numberss[0]); // 90
numberss.sort((first, second) => {
    if( first < second) {
        return -1
    } else if(first == second) {
        return 0;
    } else {
        return 1;
    }
}); // -> [10, 20, 30, 50, 80, 90, 100]
console.log(numberss[0]);

/*
In the example, we filter the elements of the array15 array, placing only those which are numbers in the numbers array.

In the next step, we sort the elements using the sort method. The sorting function we’re using contains extremely simple logic.

It compares adjacent numbers and sets the ascending order (smaller elements will precede larger ones).

Sorting is done directly on the elements of the numbers array. Of course, in this case too, we can simplify our code a bit.
*/

numberss.sort((first, second) =>  first - second); // -> [10, 20, 30, 50, 80, 90, 100]

/*
Try to analyze this revised code yourself.

The result will be the same as the previous, more elaborate example.

Note that the comparison function does not have to return exactly the values -1 and 1.

The sort method will treat any negative or positive number returned by this function in the same way.
*/
