/*--------------------- 3.2.15 Looking for an element ---------------------*/

/* 
The Array constructor also offers several methods to search for specific items in the array.

The methods includes, indexOf, and lastIndexOf take as their argument the value we are looking for in the array.

The include method returns true if the item is located (otherwise it returns false).

The indexOf method returns the index (that is, the position) of the first element found in the array with the value we are looking for, or -1 if we fail.

In case of this method, we start the search from the left side of the array (i.e. from the beginning).

The lastIndexOf method works similarly, the only difference being that the search starts from the right side (from the end of the array).

Let's look at an example below:
*/

let myPetss = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
console.log(myPetss.includes("shark")); // -> true 
console.log(myPetss.includes("unicorn")); // -> false
console.log(myPetss.indexOf("dog")); // -> 1
console.log(myPetss.lastIndexOf("dog")); // -> 6
console.log(myPetss.indexOf("unicorn")); // -> -1

/*
We also have slightly more advanced search methods at our disposal, i.e. find and findIndex.

Both methods take a testing function as a parameter (similarly to the some or every methods).

The find and findIndex methods go through successive array elements calling the test function.

Inside the function, we decide whether a visited element is the one we are looking for, returning true or false respectively.

The search ends after finding the first item for which a test function call is successful, or after reaching the last item.

The find method returns true if we find an item that meets our condition, and false if it does not.

The findIndex method will return the index of the found element if successful, or -1 if unsuccessful.

Let's look at an example below:
*/

let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
console.log(myPets.find(item => item.length > 3)); // -> hamster
console.log(myPets.find(item => item.includes("og"))); // -> dog
console.log(myPets.find(item => item.includes("fish"))); // -> undefined
console.log(myPets.findIndex(item => item.length > 3)); // -> 2
console.log(myPets.findIndex(item => item.includes("og"))); // -> 1
console.log(myPets.findIndex(item => item.includes("fish"))); // -> -1


/*--------------------- 3.2.16 Copying a selected part of the array ---------------------*/

/* 
We can also use the slice method, which we learned about when discussing the String constructor.

The method allows you to copy a selected part of the array.

It accepts one or two arguments.

The first argument determines the index from which we start copying.

If it is a negative value, the index is counted backwards from the end of the array.

The second argument is the index of the end of the copied fragment of the array (the element at this index will not be copied).

If the second argument is omitted, the slice method copies all elements from the starting index to the end of the array.

The method does not affect the original array, and it returns a copy of the selected part of the array.

Let's look at an example below:
*/

let myPetsss = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
let p1 = myPetsss.slice(3); // ->  ["canary", "shark", "cat", "dog"]
let p2 = myPetsss.slice(3, 5); // -> ["canary", "shark"]
let p3 = myPetsss.slice(-3); // -> ["shark", "cat", "dog"]
let p4 = myPetsss.slice(-3, -1); // -> ["shark", "cat"]
