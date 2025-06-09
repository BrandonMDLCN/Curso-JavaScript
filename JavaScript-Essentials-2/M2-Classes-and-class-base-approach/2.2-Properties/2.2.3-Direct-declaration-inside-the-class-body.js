/*--------------------- 2.2.3 Direct declaration inside the class body ---------------------*/

/* 
Over time, the possibility to explicitly declare properties in the body of the class was introduced to JavaScript, in a way similar to the declaration of methods.

Additionally, a distinction between public and private properties was introduced. 
Public properties are those that are accessible from outside the object (that is, in our example with the Vehicle class, all properties). 
Private properties are not available outside the object – only the object methods have access to them.
 */

class Vehicle {
    status = "unavailable";
    constructor({id, latitude, longitude}){
        this.id = id;
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

/* 
  Note   
  Declaring both public and private property in the body of the class is an “experimental feature”, 
  still in the standardization stage, and it cannot be assumed that all browsers will support it. 
  Optionally, you can then use solutions such as Babel, that is, building systems, that work like a kind of compiler. 
  They analyze our JavaScript code and, among other things, "translate" certain constructions which are not yet a common standard into equivalent ones. 
  However, the use of builders is definitely beyond the scope of our course. 
  So we will learn how to create property declarations in the body of the class, but we will rather not use them.

In our example, a good candidate for such a declaration is the status property. 
It is initiated when creating an object, but does not depend on the constructor's arguments. 
It always has the value "unavailable" at the beginning. So it will be a declaration combined with initialization.


Simple, isn't it?

The status property appears directly in the body of the class, this time without the preceding this. 
The property is initiated in the same place (this part disappears from the constructor).

Try to create an object of this class and check if this property actually exists, and what value it holds.

Over time, the possibility to explicitly declare properties in the body of the class was introduced to JavaScript, in a way similar to the declaration of methods.

We also have the possibility to define certain properties as private (as well as methods, but since these are experimental techniques, we will only stay with properties).

We declare a private property in the body of a class, and we mark its “privacy” by starting the name with #.

In our example, the longitude and latitude properties are ideal for this. 
We have prepared the getPosition and setPosition methods, which allow us to read and modify the position stored with these two properties.

There is no need to allow direct access to these properties from outside.

Let's look at an example below:
 */

class Vehicle {
    status = "unavailable";
    #longitude;
    #latitude;
    constructor({id, latitude, longitude}){
        this.id = id;
        this.setPosition({latitude, longitude});
    };
    setPosition({latitude, longitude}) {
        this.time = Date.now();
        this.#longitude = longitude;
        this.#latitude = latitude;
    };
    getPosition() {
        return {
            latitude: this.#latitude,
            longitude: this.#longitude
        };
    };
};
let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
console.log(vehicle.getPosition());
console.log(vehicle.#longitude); // error

/* 
Simple, isn't it?

In the body of the class, we add the declarations of the #longitude and #latitude fields. They are initialized the first time setPosition is called.

As you can see, they are available for our object methods: getPosition and setPosition.

Trying to access them directly from outside the object will result in an exception being thrown.

  Note   
  Later in the course, we will not use declarations of ownership in the body of the class. 
  We will stick with the classic approach with declarations in the bodies of the constructor and methods. 
  However, you should be familiar with this technique because it will probably become a standard quite soon.
   */