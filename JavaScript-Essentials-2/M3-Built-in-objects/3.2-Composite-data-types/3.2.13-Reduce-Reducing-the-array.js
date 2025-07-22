/*--------------------- 3.2.13 Reducing the array ---------------------*/

/* 
The reduce method, which we are now going to address, can cause some problems when trying to understand it.

Its concept is very simple. The method goes through all the elements of the array starting from the left, and for each element it calls the function we have written.

So how is it different from forEach?

Well, it differs in which parameters it takes and what our function returns (called a reducing function).

Let's look at an example below:
*/

let numbers = [10, 20, 30, 50, 80, 90, 100]; // -> [10, 20, 30, 50, 80, 90, 100]
let sum = numbers.reduce((accumulator, item) => accumulator + item);
console.log(sum); // -> 380

/*
The reduce method will be called for the numbers array, which contains seven different numbers.

Pay attention to the reducing function and especially to its parameters: accumulator and item.

While the item parameter is quite obvious (this is another element of the array visited by reduce), the accumulator parameter is something new.

In this parameter the value returned by the previous call of the reducing function is passed.

Let's try to follow, step by step, what happens after running our code.

The reduce method starts going through the array from the left, skipping the first element, that is, 10 (more on why we skip it in a moment).

The first call of the reduction function in our example therefore concerns element 20.

The result of the previous reduction function call (the parameter accumulator) should also be passed.

Since this is the first call and we do not have such a previous result, the first element of the array is passed, namely 10.

The function also gets, as item, the element 20.

Our function sums up these two values and returns them.

Remember that in the arrow function, if we don’t use curly brackets enclosing the function block, 
the value of the executed operation is automatically returned (without the need to use the return keyword).

Then reduce moves to element 30.

A value of 30 (calculated on the previous call of the reduction function) is passed to the reduction function as accumulator, and as item our visited element 30 is passed.

The summation result (60) is returned by the function. The next element visited is 50.

The reduction function that is called for it receives the value 60 calculated in the previous step, and element 50, adds them up and returns them.

Calls are repeated until the last element of the array, and the reduce method returns the value of the last reducing function call, in our case the last summation.

The reducing function does not have to be limited to summing up or even to performing arithmetic operations.

We can put almost any logic into it.

However, summing up is so simple that it allows us to focus on understanding the operation of the reduce method itself and the chain of reduction function calls.

The reduce method may, in addition to its reducing function, accept another argument.

This is the initial value.

If we pass it, reduce does not omit the first element when going through the array.

The reduction function called for the first element will then receive an initial value as accumulator.

Further reduce behavior will be the same as in the example discussed above.

Note: The initial value (the number 1000 in the example below) is a parameter of the reduce method, not the reduction function.
*/

let anotherSum = numbers.reduce((accumulator, item) => accumulator + item, 1000);
console.log(anotherSum); // -> 1380

/*
Let’s look at another example of using reduce, this time demonstrating a slightly different logic of the reduction function.

We’ll use it to convert the array into an object with the keys that are elements of the array and the values that are indexes of those elements.
*/

let strangeObj = numbers.reduce((accumulator, item, index) => {
    accumulator[item] = index;
    return accumulator;
} , {});
console.log(strangeObj); // -> {10: 0, 20: 1, 30: 2, 50: 3, 80: 4, 90: 5, 100: 6}

/*
An empty object (literal notation – empty curly brackets) is given as an initial value to reduce.

Each time the reduce function is called, starting from the first element of the array, a new field is added to the object received from the previous call, 
and the modified object is returned.

Try to analyze this code a little more carefully and don’t worry if it seems a little confusing at first: 
the reduce method (and similar methods) have created problems for all programming learners.

This may be a bit archaic, but it would be good if you could trace all three examples of reduction shown on a sheet of paper with a pencil in your hand.

Write down each step, check what each reduction call gets, and what is returned in each step.
*/

/*--------------------- 3.2.14 Reversing the order of the elements ---------------------*/

/* 
Another Array method, reverse, is fortunately much easier to use.

This method allows you to reverse the order of the array elements, while it works in place (we modify the original array).

And that is all you need to know about it, because it doesn't even require any arguments.

Let's look at an example below:
*/

let numberss = [10, 20, 30, 50, 80, 90, 100]; // -> [10, 20, 30, 50, 80, 90, 100]
console.log(numberss[0]); // -> 10
numberss.reverse(); // -> [100, 90, 80, 50, 30, 20, 10]
console.log(numberss[0]); // -> 100
numberss.reverse(); // -> [10, 20, 30, 50, 80, 90, 100]
console.log(numberss[0]); // -> 10