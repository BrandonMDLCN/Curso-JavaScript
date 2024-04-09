/*
2.2.1 Complex data types

In JavaScript, complex data types include objects and arrays. Objects are collections of key-value pairs, 
while arrays contain a collection of values that can be used to store multiple pieces of data.


#----------------- Object -----------------#

An object is a collection of key-value pairs, where each key-value pair consists of a key and a value.   The keys in an object must be unique; they must not
conflict with any other key in the same object. To avoid naming conflicts, you should use  
descriptive keys for your properties. For  example: "name", "age" instead of just "a".

In JavaScript, there are a few ways to create objects, but the easiest and fastest is to use the curly bracket literal.
*/
let  testOb  =  {};
console.log(typeof  testOb);  //  ->  object
 
/*
The object we create and store in the variable testObj is not particularly useful, because it’s … empty.
We have not defined any fields in it, i.e. any key–value pairs. 
Let's try it again, this time by defining an object containing two fields with keys nr and str.
*/
let  testObj  =  {
	nr:  600,
	str:  "text"
};

/*
Properties are separated by commas. A specific property (field) of an object can later be referred to with dot notation.
This notation requires the name of the object (a literal or the name of a variable containing the object) 
to be followed by a dot, followed by the field name (key) again.
*/
console.log(testObj.nr);  //  ->  600
console.log(testObj.str);  //  ->  text

/*
What do we need objects for? 
The simplest reason for using them may be the desire to store several values in one place, 
which are linked to each other for some reason.

Let's assume that we collect information about the users of our system.
Let's try to write an appropriate piece of code for two users, without using objects for now.
*/
let  name1  =  "Calvin";
let  surname1  =  "Hart";
let  age1  =  66;
let  email1  =  "CalvinMHart@teleworm.us";
   
let  name2  =  "Mateus";
let  surname2  =  "Pinto";
let  age2  =  21;
let  email2  =  "MateusPinto@dayrep.com";

/*
notice two disadvantages. First of all, for each user, you will have to make up separate names of variables for the last name, email, etc.
if there weren’t only two users, but say, a thousand? Then it would be at the least inconvenient.
we can arrange it with objects. 
The second problem is that already at the writing stage, we need to know the exact number of users that will be described in the system.

So let's improve our piece of code with objects:
*/
let  user1  =  {
    name:  "Calvin",
    surname:  "Hart",
    age:  66,
    email:  "CalvinMHart@teleworm.us"
};

let  user2  =  {
    name:  "Mateus",
    surname:  "Pinto",
    age:  21,
    email:  "MateusPinto@dayrep.com"
};

/*
We still need to give different names for variables that store information (in the form of objects)
about individual users, but this time the properties may have the same names.

This makes the code not only clearer and more consistent, but it also makes it easier to perform actions on the properties of different users.

The properties of an object, are made available with a dot and a key name.
We can both read and modify the value associated with a particular key.
We also do this using dot notation.

/*-------- INSERTAR CAMPOS A OBJETO --------*/

console.log(user1.name);  //  ->  Calvin
console.log(user2.name);  //  ->  Mateus
   
console.log(user1.age);  //  ->  66
user1.age  =  67;
console.log(user1.age);  //  ->  67
   
console.log(user2.phone);  //  ->  undefined
user2.phone  =  "904-399-7557";
console.log(user2.phone);  //  ->  904-399-7557

//If you can add new fields to an existing object, can you also delete them? Of course you can: the delete operator is used for this.
/*-------- ELIMINAR CAMPOS DE OBJETO --------*/
console.log(user2.phone);  //  ->  904-399-7557
delete  user2.phone;
console.log(user2.phone);  //  ->  undefined


/*
#----------------- Array -----------------#


is a complex data type that can be used to store a data collection.
the stored data (the values) can be of any type.
The difference between these structures is that in an array we only store values, without the associated names (i.e. the keys).

The number of the field where a particular value in the array is located is called an index or a position. The index starts from 0.

The easiest way to create arrays in JavaScript is to use square brackets (it’s an array literal).
This way, we can create both an empty array, into which the elements will be inserted later, 
and an array containing some initial elements (which will be separated by commas)

Referring to a particular array element, we use bracket notation – after the name of the array variable, 
we write a square parenthesis, in which we put the index of the element we are interested in.
*/
let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
console.log(days[0]);  //  ->  Sun
console.log(days[2]);  //  ->  Tue
console.log(days[5]);  //  ->  Fri
   
days[0]  =  "Sunday";
console.log(days[0]);  //  ->  Sunday
   
let  emptyArray  =  [];
console.log(emptyArray[0]);  //  ->  undefined


/*-------- INSERTAR CAMPOS A ARRAY --------*/
/*
The easiest way would be to assign a new value to a specific position using bracket notation.
For the interpreter, it doesn't matter if there is already something in this index or not. It just places a new value in there.
What's interesting is that we don't have to fill the array with elements one by one – you can leave empty spaces in it.
*/
let  animals  =  [];
console.log(animals[0]);  //  ->  undefined
   
animals[0]  =  "dog";
animals[2]  =  "cat";
   
console.log(animals[0]);  //  ->  dog
console.log(animals[1]);  //  ->  undefined
console.log(animals[2]);  //  ->  cat

/*
As we have already said, an array element can be of any type. 
What is interesting is the fact that we can also store arrays as elements of the array, 
and we can access the elements of this nested array using multiple square brackets.
*/
let  namese  =  [["Olivia",  "Emma",  "Mia",  "Sofia"],  ["William",  "James",  "Daniel"]];
console.log(namese[0]);  //  ->  ["Olivia",  "Emma",  "Mia",  "Sofia"]
console.log(namese[0][1]);  //  ->  Emma
console.log(namese[1][1]);  //  ->  James
   
let  femaleNames  =  namese[0];
console.log(femaleNamese[0]);  //  ->  Olivia
console.log(femaleNamese[2]);  //  ->  Mia



/*
#--------------------- 2.2.2 What can arrays be useful for in practice? ---------------------#

They are primarily a convenient way to store a collection of elements under one name. 
Additionally, it is very important that we can add new elements to an array while the program is running.

We mentioned several times that the array elements can be any data, including objects.
As a reminder, let's repeat the example in which we declare two object variables, user1 and user2, containing information about two system users:
*/
let  user3  =  {
    name:  "Calvin",
    surname:  "Hart",
    age:  66,
    email:  "CalvinMHart@teleworm.us"
};

let  user4  =  {
    name:  "Mateus",
    surname:  "Pinto",
    age:  21,
    email:  "MateusPinto@dayrep.com"
};

//Let's put information about these two users into the users array and try to display some information as part of the test:

let  users  =[  
    {
            name:  "Calvin",
            surname:  "Hart",
            age:  66,
            email:  "CalvinMHart@teleworm.us"
    },
    {
            name:  "Mateus",
            surname:  "Pinto",
            age:  21,
            email:  "MateusPinto@dayrep.com"
    }
];

console.log(users[0].name);  //  ->  Calvin
console.log(users[1].age);  //  ->  21

//Let's try to add a new user to the array. We will do it using the only way we know so far, which is by assigning a new element to a free index
users[2]  =  {
    name:  "Irene",
    surname:  "Purnell",
    age:  32,
    email:  "IreneHPurnell@rhyta.com"

}

console.log(users[0].name);  //  ->  Calvin
console.log(users[1].name);  //  ->  Mateus
console.log(users[2].name);  //  ->  Irene


//Now let's do a little experiment, and apply the typeof operator to the variable containing the array.
let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
console.log(typeof  days);  //  ->  object

/*

in JavaScript, everything except primitives is an object.
Arrays are also treated as a special kind of object.
The typeof operator does not distinguish between object types

If we would like to make sure that the variable contains an array, we can do it using the instanceof operator
*/
let  day  =  "Sunday";
   
console.log(typeof  days);  //  ->  object
console.log(typeof  day);  //  ->  string
   
console.log(days  instanceof  Array);  //  ->  true
console.log(day  instanceof  Array);  //  ->  false

//The instanceof operator is a two-argument operator, which requires the tested variable (or literal) and object class to be specified. 
//In our case, the class isArray. The operator returns true or false

/*
There are many very useful methods that help us to work with arrays, such as combining arrays, cutting out elements, sorting, or filtering.
We will only look at some of them now.

#----------------- Length -----------------#
The length property is used to get information about the length (the number of elements) of the array (including empty positions between existing elements).
*/
let  names    =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names.length);  //  ->  4
   
names[5]  =  "Amelia";
console.log(names.length);  //  ->  6
   
console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo",  "Samuel",  undefined,  "Amelia"]
console.log(names[3]);  //  ->  Samuel
console.log(names[4]);  //  ->  undefined
console.log(names[5]);  //  ->  Amelia

/*----------------- Length -----------------*/
/*
The indexOf method is used to search the array to locate a given value. 
If the value is found (the element is in the array), its index (position) will be returned. 
The method returns -1 if the element is not found.
If there is more than one element with the same value in the array, the index of the first element is returned.
*/
let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names.indexOf("Mateo"));  //  ->  2
console.log(names.indexOf("Victor"));  //  ->  -1

/*----------------- Push -----------------*/
/*
The push method places the element given as its argument at the end of the array. 
The length of the array is increased by 1, and the new element is inserted on the right (it has the largest index of all elements).
*/
let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names.length);  //  ->  4
   
names.push("Amelia");
console.log(names.length);  //  ->  5
console.log(names);  //  -  >  ["Olivia",  "Emma",  "Mateo", "Samuel",  "Amelia"]

/*----------------- Unshift -----------------*/
/*
The unshift method works similarly to push, the difference being that a new element is added to the beginning of the array.
The array length is increased by 1, all the old elements are moved to the right and the new element is placed in the empty space 
that has been created at the beginning of the array. 
The index of the new element is 0.
*/
let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
names.unshift("Amelia")
console.log(names.indexOf("Amelia"));  //  ->  0
console.log(names);  //  ->  (6) ['Victor', 'Amelia', 'Olivia', 'Emma', 'Mateo', 'Samuel']


/*----------------- Pop -----------------*/
/*
The pop method allows you to remove the last element from the array. 
As a result of its execution, the element with the largest index is returned, while at the same time it is removed from the original array. 
The length of the array is obviously reduced by 1.
*/
let  names=  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names.length);  //  ->  4
   
let  name  =  names.pop();
console.log(names.length);  //  ->  3
console.log(name);  //  ->  Samuel
console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo"]

/*----------------- Shift -----------------*/
/*
The shift method works similarly to pop, only this time we remove the element from the beginning of the array (with the index 0).
The removed element is returned by the method, all other elements are shifted to the left, completing the empty space. 
The length of the original array is reduced by 1.
*/
let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names.length);  //  ->  4
   
let  name  =  names.shift();
console.log(names.length);  //  ->  3
console.log(name);  //  ->  Olivia
console.log(names);  //  ->  ["Emma",  "Mateo",  "Samuel"]

/*----------------- Reverse -----------------*/
/*
The reverse method reverses the order of elements in the array. 
As a result of its calling, the first element of the original array will become the last, the second last but one, and so on.
*/
let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
   
names.reverse();
console.log(names);  //  ->  ["Samuel",  "Mateo",  "Emma", "Olivia"]

/*----------------- Slice -----------------*/
/*
The slice method allows you to create a new array from selected elements of the original array.
Calling the method does not affect the original array. The method takes either one or two integer values as arguments.
The basic combinations are:
one argument larger than zero – all elements from the index given as an argument to the end of the array are copied;
two arguments larger than zero – the element from the index specified as the first argument to the element specified as the second argument are copied;
two arguments, first positive, second negative – all elements from the specified index to the end of the array are copied, except for the specified number of the last elements (e.g. argument -3 means that we do not copy the last three elements)
one negative argument – the specified number of the last elements are copied to the end of the array (e.g. -2 means that you copy the last two elements).
*/
let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
   
let  n1  =  names.slice(2);
console.log(n1);  //  ->  ["Mateo",  "Samuel"]
   
let  n2  =  names.slice(1,3);
console.log(n2);  //  ->  ["Emma",  "Mateo"]
   
let  n3  =  names.slice(0,  -1);
console.log(n3);  //  ->  ["Olivia",  "Emma",  "Mateo"]
   
let  n4  =  names.slice(-1);
console.log(n4);  //  ->  ["Samuel"]
   
console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo", "Samuel"]

/*----------------- Concat -----------------*/
/*
The concat method creates a new array by attaching elements from the array given as an argument to the original array elements. 
The method changes neither the original array nor the array specified as an argument.
*/
let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
let  otherNames  =  ["William",  "Jane"];
let  allNames  =  names.concat(  otherNames);
   
console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo", "Samuel"]
console.log(otherNames);  //  ->  ["William",  "Jane"]
console.log(allNames);  //  ->  ["Olivia",  "Emma",  "Mateo", "Samuel",  "William",  "Jane"]
