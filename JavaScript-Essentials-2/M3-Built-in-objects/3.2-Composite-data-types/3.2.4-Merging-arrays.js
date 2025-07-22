/*--------------------- 3.2.4 Merging arrays ---------------------*/

/* 
Our survey will start with the concat method.

It is used to combine two arrays into one. None of the original arrays is modified.

The method creates a new array consisting of the array elements stored in the object and the attached array elements given as a call argument.

Most Array constructor methods return modified copies of the array, with only a few operating directly on the array in the object.

In the description of each method, we will clearly indicate whether we are operating on the copy or the original.

Look at the code below:
*/

let array1 = [10, 20, 30];
let array2 = ["cat", "dog"];
let array3 = array1.concat(array2); // -> [10, 20, 30, "cat", "dog"];
console.log(array1.length); // -> 3
console.log(array2.length); // -> 2
console.log(array3.length); // -> 5
console.log(array3[0]); // -> 10
console.log(array3[3]); // -> "cat"

/*
As you can see, the method returns a new combined array, which we can, for example, store in a variable.
*/

/*--------------------- 3.2.5 Adding and removing items – push and unshift ---------------------*/

/* 
We can add new elements to an existing array.

This is done using the push (adding elements at the end of the array) and unshift (adding elements to the beginning of the array) methods.

Both methods accept any number of arguments that are interpreted as new elements.

Both methods modify an existing array (i.e. they work in place).

Look at the code below:
*/


let array11 = [10, 20, 30]; // -> [10, 20, 30]
array11.push(100); // -> [10, 20, 30, 100]
array11.push(50, "dog"); // -> [10, 20, 30, 100, 50, "dog"]
array11.unshift("cat", 90, 80); // -> ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"]


/*--------------------- 3.2.6 Adding and removing items – pop and shift ---------------------*/

/* 
We also have the pop and shift methods.

They are called without arguments, and each of them removes one element from the array (pop from the end of the array, shift from the beginning).

Both methods return the removed element, which we can, for example, store in a variable or, as in this particular example, display on the console.

Look at the code below:
*/


console.log(array11.length); // -> 9
console.log(array11.shift()); // -> cat
console.log(array11.length); // -> 8
console.log(array11.pop()); // -> dog
console.log(array11.length); // -> 7


/*--------------------- 3.2.7 Adding and removing items without using methods ---------------------*/

/* 
We can also add a new element without using methods by simply referring to a non-existent array index.

Space in the array between the last existing element and the newly inserted element will be filled with undefined elements if necessary.

We can also delete the selected element using the delete command you know from the objects (this is not the Array constructor method!).

The place left after the deleted element will contain undefined.

Look at the code below:
*/


let array12 = [10, 20, 30]; // -> [10, 20, 30]
array12[3] = 100; // -> [10, 20, 30, 100]
array12[5] = 1000; // -> [10, 20, 30, 100, undefined, 1000]
delete array12[1]; // -> [10, undefined, 30, 100, undefined, 1000]
console.log(array12[1]); // -> undefined


