/*--------------------- 3.2.17 Deleting and replacing a selected part of the array ---------------------*/

/* 
A method with a similar name, splice, works for a change in place, and modifies the original array.

We can use it in two ways.

The first way allows us to remove selected elements from the array.

The elements to be removed are indicated either using one or two arguments.

The first argument is the index of the first element to be removed and the second argument is the number of elements to be removed.

The index can be a negative value (we then count it from the end of the array).

Skipping the second argument means that we want to delete all elements from the indicated starting index to the end of the array.

What is important is that the method returns the deleted elements (e.g. we can store them in a variable or, as in the example, display them).

Look at an example below:
*/

let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
let removedPets = myPets.splice(2, 3); 
console.log(myPets); // -> ["cat", "dog", "cat", "dog"]
console.log(removedPets); // -> ["hamster", "canary", "shark"]

/*
The splice method can also be used to insert new elements into the array.

It is for this purpose, we gave you the previous two arguments.

The first argument is the initial index, while the second is the number of elements to be deleted from the index.

This time both arguments must be provided.

If we don’t want to delete anything, then we give 0 as the second argument.

For any subsequent arguments, we give the values to be located in a specified place of the array.

Therefore, we can call splice to simultaneously remove several selected elements and insert new ones in their place, 
or we can add new ones from the indicated index without removing the existing ones.

Look at an example below:
*/

let myPetss = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
myPetss.splice(2, 0, "rabbit", "guinea pig");
console.log(myPetss); // -> ["cat", "dog", "rabbit", "guinea pig", "hamster", "canary", "shark", "cat", "dog"]
myPetss.splice(2,2,"perro","gato")
console.log(myPetss); // -> ["cat", "dog", "perro", "gato", "hamster", "canary", "shark", "cat", "dog"]

/*
In the example, we limit ourselves to inserting two new elements without removing any of the existing ones.
*/

/*--------------------- 3.2.18 The destructuring assignment ---------------------*/

/* 
We learned about the destructuring assignment when looking at objects.

In JavaScript, there is a version of this technique for arrays.

Let us look at the following piece of code:
*/

let myPetos = ["cat", "dog", "hamster", "canary"];
let peta1 = myPetos[0];
let peta3 = myPetos[2];
let peta4 = myPetos[3];
console.log(peta1); // -> cat
console.log(peta3); // -> hamster

/*
We have assigned selected elements from the myPets array to the variables pet1, pet2, and pet3. The same effect can be achieved by using a destructive assignment.
*/

let [peto1, , peto3, peto4] = myPets;
console.log(pet1); // -> cat
console.log(pet3); // -> hamster

/*
As you can see, this form of notation is a bit simpler, and it will be especially noticeable with a large number of substitutes. 
Newly declared variables are placed after the let keyword in square brackets and separated by commas.

They are assigned values from the next positions of the myPets array.

If we don't want to copy any of the array items, we can mark it by leaving a blank field separated by commas.

But what happens if an element in the array is not found in the given position?
*/

let myPetsss = ["cat", "dog"];
let [petx1, , petx3] = myPetsss;
console.log(petx1); // -> cat
console.log(petx3); // -> undefined

/*
As you can see, an undefined value will be substituted for such a variable (in our case petx3).

The destructuring assignment allows us to prepare default values, which will be used if there is no element in the array (otherwise the default value is ignored).
*/

let myPetxs = ["cat", "dog"];
let [pet1 = "fish", , pet3 = "fish"] = myPetxs;
console.log(pet1); // -> cat
console.log(pet3); // -> fish
console.log(myPetxs) // -> [ 'cat', 'dog' ]


/*--------------------- 3.2.19 The spread operator in arrays ---------------------*/

/* 
An equally useful technique is the use of the spread operator (i.e. three dots).

It allows the spread of the array into individual elements where a list of elements or arguments is expected.

The simplest example is to use elements of an existing array to create a new one.
*/

let array1 = [100, 200, 300];
let array2 = [1000, 2000];
let array3 = [10, 20, ...array1, 500, ...array2]; //-> [10, 20, 100, 200, 300, 500, 1000, 2000]

/*
The operator can also be used to spread the array over the elements while passing them on as arguments of the function.
*/

let testFn = (a, b, c, d) => a + b + c + d;
let array = [10, 20, 30, 40];
console.lof(testFn(...array)); // -> 100


