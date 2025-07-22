/*--------------------- 3.2.20 Set ---------------------*/

/* 
The Set constructor is used to create a collection of unique elements.

Elements of the same value cannot appear in a collection of this type.

Any attempt to add an element that is already in the collection will be ignored.

We can treat the set collection as a bag, into which we put different, unique elements.

It is difficult to arrange anything in the bag, so therefore we are not interested in the order of these elements.

The Set constructor provides methods to check if there is a particular element in our bag and reviews all the elements one by one (i.e. taking them out of the bag).

Set differs from the array because the elements are not ordered, 
and they do not have an unambiguously defined position (this is a simplification, but it is completely acceptable from the point of view of using Set).

Additionally, the same elements could appear in the array in different positions.

Formally, each element of the set collection consists of a key and a value.

In practice, however, both of these attributes are exactly the same.

Therefore, it is easier to think of a set item as having only the value, without a key.

The stored values can be of any type, both simple and composite.
*/

/*--------------------- 3.2.21 The Set constructor ---------------------*/

/* 
The Set constructor can be called up without any arguments.

Then we can create an empty collection.

Over time, it will be possible to modify it by adding and removing elements from it.

The constructor can accept the array as an argument.

Its elements will be automatically added to the collection.

Look at an example below:
*/

let emptySet = new Set(); // -> {}
console.log(emptySet.size); // -> 0
let petsSets = new Set(["cat", "dog", "cat"]); // -> {"cat", "dog"}
console.log(petsSets.size); // -> 2


/*--------------------- 3.2.22 Checking the presence of the element ---------------------*/

/* 
To check the number of elements in the collection, we use the size property (its equivalent in the array is the length property).

The simplest method of Set constructor is has.

It allows you to check if an element with the value given as an argument is in the collection.

Look at the code below:
*/

let petsSet = new Set(["cat", "dog"]); // -> {"cat", "dog"}
console.log(petsSet.has("cat")); // -> true
console.log(petsSet.has("shark")); // -> false


/*--------------------- 3.2.23 Handling elements ---------------------*/

/* 
We will use:

the add,
the delete,
and clear
methods to operate on individual elements of the collection.

The purpose of these methods is easy to guess from their names.


Look at the code below:
*/

console.log(petsSet.size); // -> 2
petsSet.add("shark");
petsSet.add("hamster");
console.log(petsSet.size); // -> 4
console.log(petsSet.has("shark")); // -> true
petsSet.delete("dog"); // -> true
petsSet.delete("dog"); // -> false
console.log(petsSet.size); // -> 3
petsSet.clear();
console.log(petsSet.size); // -> 0


/*--------------------- 3.2.24 Walking through the set elements ---------------------*/

/* 
Aside from access to selected elements, it is possible to go through the whole collection element by element.

The Set constructor provides several methods for this purpose.

Let's start with forEach, which works almost identically to the corresponding Array constructor method of the same name.

We pass the function to be called for each element in the collection to the method.

Look at the code below:
*/

let petxsSet = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
petxsSet.forEach(value => console.log(value)); // -> cat -> dog -> hamster

/*
In our example, the function takes one parameter: value.

This is the value of the visited element.

In this example, we are only limited to displaying it, although you can put any logic in this place, according to what you need.

We said earlier that in a set collection, the keys and values of the item are the same.

This is perfectly visible in the forEach method.

Its proper syntax assumes that the function takes the value and key parameters and not, as in our example, only value.

According to the documentation, we could therefore write our example in the following form:
*/

petsSet.forEach((value, key) => console.log(`(${value}:${key})`)); // -> (cat:cat) -> (dog:dog) -> (hamster:hamster)

/*
It is clear that this is not the case, since both arguments are exactly the same.

Another way to go through the collection elements is to use the values method.

It is used more often than the forEach method, but it requires a new concept, the iterators.

An iterator is an object that stores information about visited collection elements.

It provides the next method, which allows us to move to the next collection element (we change the state of the iterator).

Calling next returns an object containing the value field, in which the visited item is located.

Apart from value there is another field, done, which will inform us if the current visited item is the last one in the collection.

Look at the code below:
*/

let petsSetss = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
let petsIteratoro = petsSetss.values();
console.log(petsIteratoro.next().value); // -> cat
console.log(petsIteratoro.next().value); // -> dog
console.log(petsIteratoro.next().value); // -> hamster

/*
In this example, we use the fact that we know the number of items in the collection and how many times we call the next method of our petsIterator iterator.

The same can also be done in a loop that makes its ending dependent on the value done of the returned object.

Look at the code below:
*/

let petsIterator = petsSet.values();
let result = petsIterator.next();
while (!result.done) {
    console.log(result.value); // -> cat -> dog -> hamster
 result = petsIterator.next();
}

/*
The Set constructor also provides the keys method, but its operation is identical to values (the keys and values in Set are the same).
*/

/*--------------------- 3.2.25 The spread operator in sets ---------------------*/

/* 
In sets, as in arrays, you can use a spread operator. 
Like arrays, it is used to split the collection into a single element, which will be used, for example, to create an array or pass it as function argument. 
In the following example, we will use the operator when converting a set collection to an array.

Look at the code below:
*/

let ppetsSet = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
console.log(ppetsSet instanceof Set); // -> true
let ppetsArray = [...ppetsSet]; // -> ["cat", "dog", "hamster"]
console.log(ppetsArray instanceof Array); // -> true

/*
More information about the Set constructor, its methods and how to use this type of collection can be found on the MDN website6.

6The Set object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
*/
