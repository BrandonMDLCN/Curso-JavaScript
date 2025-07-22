/*--------------------- 3.2.26 Map ---------------------*/

/* 
The next constructor we will discuss, Map, is also used to create a collection of elements.

In this case, each element of this collection consists of a different key:value pair.

This construction is similar to an ordinary object, where property names are keys, to which we assign values.

However, when it comes to data storage, the map is much more universal than the object, because it allows us to use any types as keys.

Values that are paired with keys can also be of any type.

The keys in the map are unique, trying to add a new element with the same key as the existing one will overwrite it.


As in Set, the order of the elements does not matter.

The difference is that we store key:value pairs in the map, while in the set we store values only.
*/

/*--------------------- 3.2.27 The Map constructor ---------------------*/

/* 
Let's start by creating maps.

We can provide the constructor with an array containing any number of elements.

The important thing is that each element of this array is also an array, a two-element array.

The key will be stored in the zero position of the first value.

If we do not provide any argument to the constructor, an empty map will be created.

Look at the code below:
*/

let emptyMap = new Map();
let petssMap = new Map([["cats", 1],[ "dogs", 2],[ "hamsters", 5]]);
console.log(emptyMap.size); // -> 0
console.log(petssMap.size); // -> 3

/*
In this example, we have created two maps, an empty emptyMap and a petsMap with three pairs: cats:1, dogs:2, and hamsters:5.

Let's say this is a list of our pets.

The keys here are the strings: "cats", "dogs", and "hamsters".

The associated values are 1, 2, and 5 respectively.

In the example, we also use the size property, which has the same purpose as the Set constructor.
*/

/*--------------------- 3.2.28 Checking the presence of the element ---------------------*/

/* 
Like the Set constructor, here we have the has method which allows us to check if there is an item with the given key in the collection 
(we look only at the key, and not at the value).

Look at the code below:
*/

let petsMapo = new Map([["cats", 1],[ "dogs", 2],[ "hamsters", 5]]);
console.log(petsMapo.has("dogs")); // -> true
console.log(petsMapo.has("sharks")); // -> false
console.log(petsMapo.has(1)); // -> false

/*
Thanks to the has method, we discover that in our collection we do have dogs, but we are missing sharks.
*/

/*--------------------- 3.2.29 Handling elements ---------------------*/

/* 
We manage our collection using the set, get, delete and, clear methods.

Their use is intuitive, so only a simple example is needed to understand them.

Look at the code below:
*/

let petsMap = new Map([["cats", 1],[ "dogs", 2],[ "hamsters", 5]]);
console.log(petsMap.get("hamsters")); // -> 5
petsMap.set("hamsters", 6);
console.log(petsMap.get("hamsters")); // -> 6
petsMap.delete("hamsters");
console.log(petsMap.get("hamsters")); // -> undefined
petsMap.clear();
console.log(petsMap.size); // -> 0


/*--------------------- 3.2.30 Walking through the map elements ---------------------*/

/* 
To go through the elements of the map, we will use the same methods we learned with the sets.

forEach

Let's start with the forEach method:
*/

let anotherPetsMap = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
anotherPetsMap.forEach((value, key) => console.log(`${key} : ${value}`)); // -> snakes : 1 -> cats : 3 -> dogs : 2

/*
values

The values method, which you already know from the Set constructor, is also available in maps, and requires the use of iterators here, too. 
From each element you visit, its value is taken (the key is ignored).
*/

let anotherPetsMapo = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
let petValuesIterator = anotherPetsMapo.values();
console.log(petValuesIterator.next().value); // -> 1
console.log(petValuesIterator.next().value); // -> 3
console.log(petValuesIterator.next().value); // -> 2

/*
keys

The keys method, which we mentioned when discussing the Set constructor, also returns an iterator.

We use it in the same way as the iterator returned by the values method, only this time its key is taken from each element, not its value.

Note that the key returned by calling the next iterator method is placed in a property called value.

This is because iterators are general purpose objects – value simply means something that has been returned to it from a certain collection.
*/

let anotherPetosMap = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
let petKeysIterator = anotherPetosMap.keys();
console.log(petKeysIterator.next().value); // -> snakes
console.log(petKeysIterator.next().value); // -> cats
console.log(petKeysIterator.next().value); // -> dogs

/*
entries

In addition to the values and keys methods, we have one more method: entries.

It works in the same way as the previous two, only this time the iterator returns the entire element, that is the key:value pair saved as a two-element array.
*/

let anotheroPetsMap = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
let petValuesIteratoro = anotheroPetsMap.values();
console.log(petValuesIteratoro.next().value); // -> 1
console.log(petValuesIteratoro.next().value); // -> 3
console.log(petValuesIteratoro.next().value); // -> 2

/*
As a reminder, we can use the iterator in the loop, checking if we still have any elements to go through.

Look at the code below:
*/

let petsIterator = anotheroPetsMap.entries();
let result = petsIterator.next();
while (!result.done) {
    console.log(result.value); // -> ["snakes", 1] -> "cats", 3] -> ["dogs", 2]
 result = petsIterator.next();
}

/*--------------------- 3.2.31 The for ... of loop ---------------------*/

/* 
For the purpose of going through the collections (i.e. arrays, sets, and maps) another simple mechanism was created in JavaScript – the for ... of loop.

It is universal for all collections and its use is so intuitive it does not require any explanation.

We analyze its functioning on the basis of the code presented here and compare the results for the array, then for set and map.

Look at the code below:
*/

let petsArray = ["cat", "dog", "hamster"];
for( let pet of petsArray) {
    console.log(pet); // -> cat -> dog -> hamster
};
let petsSet = new Set(["cat", "dog", "hamster"]);
for( let pet of petsSet) {
    console.log(pet); // -> cat -> dog -> hamster
};
let petsMapa = new Map([["cats", 1], ["dogs", 3], ["hamsters", 2]]);
for( let pet of petsMapa) {
    console.log(pet); // -> ["cats", 1] -> ["dogs", 3] -> ["hamsters", 2]
    console.log(pet[0]); // -> ctas -> dogs -> hamsters
}


/*--------------------- 3.2.32 The spread operator in maps ---------------------*/

/* 
The spread operator, as with sets and arrays, allows the map to be split into single elements.

In this example, we use it to convert the map into an array.

Look at the code below:
*/

let petsMapoo = new Map([["cats", 1], ["dogs", 3], ["hamsters", 2]]);
console.log(petsMapoo instanceof Map); // -> true
let petsArraya = [...petsMapoo]; // -> [["cats", 1], ["dogs", 3], ["hamsters", 2]]
console.log(petsArraya instanceof Array); // -> true

/*
For more information about the Map constructor, please visit the MDN website7.

7The Map object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
*/