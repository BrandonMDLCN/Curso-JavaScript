/*--------------------- 2.1.1 Class declaration ---------------------*/
/*
To help you define your first class, we will come up with a simple scenario, which we will gradually modify while working through this chapter.

Let’s say we have a small transport company with different vehicles. 
To start with, we are only interested in locating these vehicles. 
Each of them will have its own identifier (which we will arbitrarily give by a string of characters). 
Each vehicle will also be in a certain state (“free”, “busy”, “unavailable”). 
Its geographical position will be determined by the longitude and latitude properties. 
Additionally, the time of the last position update will be stored.

Before we move on to class declarations, 
we will try to write down our scenario using a previously learned method based on constructors (or more precisely, the constructor functions).

Look at the code below:
*/
let Vehiclee = function(id, latitude, longitude){
    
    this.setPosition = function(latitude, longitude) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    this.id = id;
    this.status = "unavailable";
    this.time = Date.now();
    this.latitude = latitude;    
    this.longitude = longitude;
};
let vehicle11 = new Vehiclee("AL1024", 59.358615, 17.947589);
vehicle11.setPosition(59.367647, 18.213451);
console.log(vehicle11);

/* 
We have defined the Vehicle function, which will be used as a constructor. As a reminder, 
every call of this function preceded by the keyword new will create a new object. 
And what will be in this object depends on the contents of our constructor function and the arguments provided to it. 
According to our scenario, we have defined the following properties: id, status, time, latitude and longitude, and the setPosition method.

Note the use of the Date.now method when initiating the time property. It returns the current time. 
The time format is quite specific: the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC (the UNIX epoch). 
With the help of other Date methods, we can convert this format to something more readable, but at the moment, there is no need to do so.

We will return to Date and other the interesting predefined classes in JavaScript in the next chapter.

Let's give our script a little tidy up.

First of all, the same code is repeated in two places, that is, in the setPosition method and ... can you indicate where?

You're right, when initiating a position with the data provided when creating the object.

This is a redundancy, and we can already get rid of it using the setPosition method at the object initiation stage.

Look at the code below:
*/
let Vehicleee = function(id, latitude, longitude){
    this.setPosition = function(latitude, longitude) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    this.id = id;
    this.status = "unavailable";
    this.setPosition(latitude, longitude);
};

/* 
Can you see the difference?

We can improve one more thing: the way the arguments are passed on to the constructor and to the setPosition method.

What we're going to present in a moment is not only about constructors and is not directly related to objects, 
but in our opinion it's a pretty good place to get to know the new technique.

Everything that we have written so far is as correct as possible.

However, passing a few arguments, especially of a similar type, can sometimes lead to some ambiguities, mistakes, and as a result, errors.

The position, which we describe with latitude and longitude, is a perfect example of this.

When passing the arguments to the constructor when creating an object, we must remember that latitude is given before longitude.

Usually there will be no problem with that, because in most GIS (Geographic Information System) applications this coordinate order is used, 
and finally we will remember it.

Sometimes, however, especially when specifying the position at sea, the reverse order is used, giving first longitude, then latitude.

If someone has to deal with such a notation, they can make a mistake by reflex, giving arguments in the wrong order.

We can help ourselves by creating an object on the fly from all arguments, 
which we will pass to the function (in this case to the constructor) as a single argument.

What does this change? Each field of such an object must have a name, and the order of the fields is irrelevant 
(by the way, this was the basic difference between an array and an object that we mentioned at the beginning of the previous chapter).

The easiest way to show it is to modify our example.

Look at the code below:
*/

let Vehiclea = function(initialData){
    let {id, latitude, longitude} = initialData;
    this.setPosition = function(latitude, longitude) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    this.id = id;
    this.status = "unavailable"; 
    this.setPosition(latitude, longitude);
};
let vehicle1a = new Vehiclea({id: "AL1024", latitude: 59.367647, longitude: 18.213451});
let vehicle2a = new Vehiclea({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});

/* 
When calling the constructor, we pass one argument – an object with the id, latitude, and longitude fields (whose order is arbitrary).

The values will be recognized by their names, not by their order. 
The constructor accepts this object as the initialData parameter and decomposes it into individual fields. The following line:
*/

let {ido, latitudeo, longitudeo} = initialData;

/* 
can look pretty weird, and certainly needs an additional explanation. This is called a destructuring assignment.

This mechanism, used in both objects and tables, will be discussed in more detail in the next chapter. In our example, it works as follows:

the local variables id, latitude, and longitude are declared;
the properties with the same names are found in the initialData object;
the values of these properties are assigned to the local variables that have just been created.
So this line is actually nothing but:
*/

let id = initialData.id;
let latitude = initialData.latitude;
let longitude = initialData.longitude;

/* 
The use of initialData is a bit redundant, 
and exactly the same effect can be achieved by using a destructive assignment directly in the function parameter (here in the constructor).

Let’s improve it.

We will use the same technique in the setPosition method and finally we will add a new getPosition method.

Voila!

Look at the code below:
*/

let Vehicleo = function({id, latitude, longitude}){
    this.setPosition = function({latitude, longitude}) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    this.getPosition = function() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    };
    this.id = id;
    this.status = "unavailable";
    this.setPosition({latitude, longitude});
};
let vehicle12 = new Vehicleo({id: "AL1024", latitude: 59.367647, longitude: 18.213451});
let vehicle22 = new Vehicleo({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});

/* 
So we have a ready-made example of a constructor function, with which we have created two test objects.

So all we have to do is make it into a class.

We’re going to introduce a new keyword to JavaScript for the creation of classes, and to your great surprise, it is ... class.

The simplest form class declaration and use to create an object can look like this:
*/

class EmptyClass {};
let emptyObject = new EmptyClass;

/* 
Our EmptyClass class contains nothing, like the emptyObject created on its basis. 
Note that the class name starts with an uppr-case letter (it's just a practice, but you should definitely stick to it) 
and we create an object using the new operator. Both restrictions are identical to the technique of creating objects using constructors. 
Class definitions may include methods with which new objects will be equipped.

Additionally, each class should have a constructor, that is, a function that will be called when creating a new object on its basis. 
The constructor is not given a name, but in each class it is named the same way: constructor.

In our example, besides the constructor, we will add the example method sayHi.

Look at the code below:
*/

class AlmostEmptyClass {
    constructor(sth) {
        console.log(sth);
    };
    sayHi() {
        console.log("Hi!")
    };
};
let almostEmptyObject = new AlmostEmptyClass(120); // -> 120
almostEmptyObject.sayHi(); // -> Hi!
console.log(almostEmptyObject.constructor.name)

/* 
Actually, this is all you need to know to define a simple class (we’re not thinking yet about inheritance and similar problems).

It's worth highlighting just one cosmetic detail – make sure that the methods in the class are not separated by commas.

Be careful with that, because by the visual similarity of classes to the declaration of an object using literal notation (in both cases we use curly brackets) it is the most common cause of errors among beginner programmers using classes in JavaScript.

Let’s go back to the example with the vehicles we just prepared for you (look at the code below):
*/

class Vehicle {
    constructor({id, latitude, longitude}){
       this.setPosition = function({latitude, longitude}) {
           this.time = Date.now();
           this.longitude = longitude;
           this.latitude = latitude;
       };
       this.getPosition = function() {
           return {
               latitude: this.latitude,
               longitude: this.longitude
           };
       };
       this.id = id;
           this.status = "unavailable";
       this.setPosition({latitude, longitude});
       };
   };
   let vehicle1 = new Vehicle({id: "AL1024", latitude: 59.367647, longitude: 18.213451});
   let vehicle2 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});

/* 
In the example, we used the technique of constructors. Now we will write the same thing down using classes.

Having the previous example open in another window will allow you to observe the differences, which will turn out to be minor.


According to the pattern presented before, we declared a Vehicle class. At the moment, it contains only the constructor.

We copied to it the contents of the Vehicle function from the previous example.

Used in our class, this also has the same meaning as before. It indicates a specific object (an instance), created on the basis of this class.

Is it true that the changes are minor?


Then we created two objects, vehicle1 and vehicle2, of the Vehicle type (i.e. objects based on the Vehicle class).

These objects will, of course, have all their properties defined in the class constructor and methods declared in the body of the class.

Creating an object is no different from the one we learned when discussing the technique of constructors.

The example is correct, but not very elegant.

The methods getPosition and setPosition are unnecessarily declared inside the constructor.

The code will become more readable if we use what the class provides and change the place of their declaration.

Look at the code below:
*/

class Vehicle {
    constructor({id, latitude, longitude}){
        this.id = id;
        this.status = "unavailable";
        this.setPosition({latitude, longitude});
    };
    setPosition({latitude, longitude}) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    getPosition() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    };
};
let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
vehicle.setPosition({longitude: 18.193121, latitude: 59.378654});
console.log(vehicle.getPosition());

/* 
You'll agree it looks a little simpler now, won't you?

At first glance, you can see that an object created on the basis of this class will have the getPosition and setPosition methods.
*/