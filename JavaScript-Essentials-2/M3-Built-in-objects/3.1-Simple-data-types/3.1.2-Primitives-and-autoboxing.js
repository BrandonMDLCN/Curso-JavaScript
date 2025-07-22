/*--------------------- 3.1.2 Primitives and autoboxing ---------------------*/

/* 
We have already talked many times about primitives, that is, non-objective data types.

There are a total of seven, but at the moment only three of them are important to us:

boolean,
number,
and string.
Since they are not objects, they have no methods or properties.

The data of each of these types placed in the variables are pure values, stored in the appropriate format in the memory.

However, for each of the primitive data types there is a special constructor in JavaScript (which you can treat as a class), respectively: Boolean, Number, and String.

These are standard built-in objects. The connection between these primitives and their corresponding constructors is relatively simple, but a few words of explanation wouldn’t hurt.


Firstly, why do we need such constructors? In fact, we need them just for convenience.

The use of objects and related dot notation is very intuitive and makes the notation of certain operations simple and logical.


Let’s look at an example:
*/

let strObj = new String("Do bats eat cats?");
console.log(typeof(strObj)); //-> object
console.log(strObj.length); // -> 17
let wordss = strObj.split(" ");
console.log(words[0]); // -> Do

/*
In this example, we create the strObj using the String constructor.

We pass a very important question to the constructor, asked by a girl a long time ago: "Do bats eat cats?".

Our object has many useful properties and methods.

Among other things, we can check how many letters this question has – we refer to the length property for this purpose.

Using the split method, we divide our inscription into single words separated by spaces.

We store the result (single words) in the words array, all this using the properties and methods of our object.

The writing is simple and legible, easy to remember. So why use primitives when using objects in their place is so simple and pleasant?

Unfortunately, apart from their undeniable advantages, objects have one serious disadvantage.

They occupy incomparably more memory space than primitives.

So we come to the next question: if objects are convenient, yet primitives save memory, which ones should we use?

It turns out that the answer is: both of them. And what is even stranger: at the same time.

Let’s look at another example:
*/

let str = "Do bats eat cats?";
console.log(typeof(str)); //-> string
console.log(str.length); // -> 17
let words = str.split(" ");
console.log(words[0]); // -> Do

/*
This time we directly assign the string "Do bats eat cats?" to the str variable.

This variable contains a primitive rather than an object, which we check with typeof.

And now a small surprise – despite the fact that our variable does not contain an object, we successfully refer to the length and split fields, which we know from the String object.

How can this happen?

The JavaScript engine is responsible for this.

When using dot notation, we indicate that we will want to use some method or property of a primitive 
(which does not have any property nor any property of its methods) and the engine converts it in flight to the corresponding object.

The temporary object is kept in the memory only until the operation is completed, after which the JavaScript engine releases it.

Such an operation obviously has an impact on the engine's performance, but the memory we save in this way is worth it. This behavior of the JavaScript engine is called autoboxing.


  Note   Use primitives. Do not explicitly create objects using Boolean, Number, or String constructors. 
  Of course, it is possible to create such objects, as we have shown in the previous example, but it is not recommended. 
  You can rely on the JavaScript engine to recognize when you want to treat a primitive as an object and enable you to do so by performing the appropriate conversion on the fly.
*/