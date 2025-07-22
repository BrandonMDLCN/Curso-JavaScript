/*--------------------- 3.2.33 Object ---------------------*/

/* 
The Object constructor, as well as the objects themselves, has already appeared several times in the course, and in fact we devoted the entire first chapter to them.

However, let’s look at them again, from a slightly different perspective, treating them as a composite data structure.

Arrays, maps, or sets are composite structures whose main task is to allow you to store your data collection.

Each of these structures has different features and is suitable for different tasks. The elements of an array can be repeated.

As they only have values, we identify them by their position (index) and therefore their order is important.

A set is a data collection without indexes, in which a certain order is maintained, but it does not affect the operation of the set.

Elements in a set have only a value (although formally in JavaScript they also have keys identical to values).

The last of these structures (i.e. the map) similar to the set has elements whose order is not important.

Map elements always consist of a key:value pair, both attributes of which can be of any type.

The keys in the map must be unique, and they cannot be repeated.
*/

/*--------------------- 3.2.34 Creating an object ---------------------*/

/* 
You may have noticed a similarity between the map and the object.

In fact, very often objects are used in JavaScript to store data instead of maps (both are also collections of key:value pairs).

Values can be of any type here although some restrictions are imposed on keys (we talked about this in the first chapter of the course).

Let's remind ourselves of some facts about objects, looking at them only as structures designed to store data, just like maps.

We must therefore be able to create such a structure, dynamically modify its content, that is adding, removing, 
and modifying elements according to the nomenclature used in objects – properties – and go through them.

First, let's create an object using literals (we're implicitly referencing the Object constructor at this point).

Let's treat an object as a collection of elements with certain keys and values.
*/

let anotherPetsObj = {"snakes": 1,"cats": 3,"dogs": 2};


/*--------------------- 3.2.35 Handling elements ---------------------*/

/* 
Adding and modifying elements is done with the use of dot notation or bracket notation and a key (i.e. property name).

We use the delete command to delete an element.

Look at the code below:
*/

console.log(anotherPetsObj.snakes); // -> 1
anotherPetsObj.snakes = 2;
console.log(anotherPetsObj.snakes); // -> 2
delete anotherPetsObj.snakes;
console.log(anotherPetsObj.snakes); // -> undefined
anotherPetsObj.snakes = 0;
console.log(anotherPetsObj.snakes); // 0


/*--------------------- 3.2.36 Walking through elements ---------------------*/

/* 
To move through the elements stored in the object, we can use, among others, static method keys, values, and entries of the constructor Object.

This time we do not use iterators. All these methods return arrays containing keys, values, and key-value pairs respectively.

We can go through each of the arrays using the forEach method, for example:
*/

let anotherPetsObja = {"snakes": 1,"cats": 3,"dogs": 2};
Object.keys(anotherPetsObja).forEach(key=>console.log(key)); // -> snakes -> cats -> dogs
Object.values(anotherPetsObja).forEach(key=>console.log(key)); // -> 1 -> 3 -> 2
Object.entries(anotherPetsObja).forEach(key=>console.log(key)); // -> ["snakes", 1] -> ["cats", 3] -> ["dogs", 2]

/* 
The for ... of loop, which works for arrays, maps, and sets doesn't work for objects, but we have a for ... in construct instead.
*/

let anotherPetsObjo = {"snakes": 1,"cats": 3,"dogs": 2};
for (let key in anotherPetsObjo) {
    console.log(key); // -> snakes -> cats -> dogs
    console.log(anotherPetsObjo[key]); // -> 1 -> 3 -> 2
}


/*--------------------- 3.2.37 The spread operator for objects ---------------------*/

/* 
We can also use spread operator for objects, but it works a bit differently than for arrays or maps.

You can use it only for passing the properties of one object to another object (we looked at this in the objects section).

Look at the code below:
*/

let petsObj = {"cats": 1, "dogs": 3, "hamsters": 2};
let newPetsObj = {...petsObj, "sharks": 1}; // -> {cats: 1, dogs: 3, hamsters: 2, sharks: 1}

/*
The storage of data in objects is so practical that there is a special technique for processing them into text form, allowing for their transport in the network.

This format is known as JSON, and we will go through this in more detail in the next section.
*/