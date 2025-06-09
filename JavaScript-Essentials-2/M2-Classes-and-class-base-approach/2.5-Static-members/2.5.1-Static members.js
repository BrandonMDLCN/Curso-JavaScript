/*--------------------- 2.5.1 Static members ---------------------*/

/* 
In classes, in addition to the regular methods and properties (called prototype ones), we can also define static methods and properties.

These are fields that will not appear in the created object – they will be associated only with the class.

It may seem a little illogical, and it's hard to find a justification for the existence of such static fields at the moment, so let's try to take a closer look at them.

Remember our almostEmptyClass class?

Besides the constructor, we defined the sayHi method inside it.


Let's add the sayHello method, this time static. The declaration inside the class body should be preceded by the static keyword.

Look at the code below:
*/

class AlmostEmptyClass {
    constructor(sth) {
        console.log(sth);
    };
    sayHi() {
        console.log("Hi!")
    };
    static sayHello() {
        console.log("Hello!")
    };
};
let almostEmptyObject = new AlmostEmptyClass(120); // 120
almostEmptyObject.sayHi(); // -> Hi!
almostEmptyObject.sayHello(); // error
AlmostEmptyClass.sayHello(); // -> Hello!

/*
As we predicted, the static method does not appear in the newly created almostEmptyObject. Instead, it is available directly in the AlmostEmptyClass class.

Declaring and using static methods is very simple.

However, it will not be so easy to find an answer to the question of why to use such a mechanism, and at the moment, it may seem absolutely useless or even pointless to you.

Nothing could be further from the truth. It happens quite often that we have to create tool methods that will operate on several objects of a given type (that is, instances of one class).

A simple example can be a method checking whether or not the objects are equal.

The decision whether the objects will be considered to be the same or different will belong to someone who will write an appropriate comparison method.

Such a method is logically not related to a single object (or instance) but to the type of this object.

Therefore, it should not be placed inside the object.

It is connected with the class, so it is an ideal candidate for the role of the static method.

Let's go back to our example with the Vehicle class.

Let's say we want to be able to test if two objects of this class do not describe the same vehicle by chance.

For this purpose, we will not perform a deep-comparison of all fields (you should remember this term from the chapter on objects).

It is enough to compare their identifiers, i.e. id properties.

Let's add a new, static method: isSameId.

Note that making comparisons with this method will only make sense for objects that are instances of the Vehicle class, and it is not a universal method for all objects.
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
    static isSameId(v1, v2) {
        console.log(v1.id === v2.id);
    };
};
let vehicle1 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
let vehicle2 = new Vehicle({longitude: 0, latitude: 0, id: "AL1024"});
let vehicle3 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1026"});
Vehicle.isSameId(vehicle1, vehicle2); // -> true
Vehicle.isSameId(vehicle1, vehicle3); // -> false

/*
The new static method, associated with the Vehicle class, allows us to compare objects that are instances of this class.

The way of referring to the static method, for example in our case Vehicle.isSameId suggests one more thing: we use dot notation, so the classes in JavaScript are also ... objects.

According to the principle quoted at the beginning of the previous chapter, in JavaScript everything, except primitives, is an object.

We will not think about it too much at this point, but let's just pay attention to one consequence of this fact.

The static method (or also property) can be defined not only in the body of the class using the static keyword.

We might as well do it after class declaration, e.g. this way:
*/

Vehicle.isSameId =  function(v1, v2) {
    return v1.id === v2.id;
};