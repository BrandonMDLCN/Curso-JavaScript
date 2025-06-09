/*--------------------- 2.3.1 Getters and setters ---------------------*/
/* 
In the chapter on objects, we learned about getters and setters.

Hopefully you at least roughly remember what we used them for: a special kind of method that we used to get and set up object properties.

What was so special about them?

The very definition where we used the keywords get and set, but most of all the way we used them.


We didn't call them like regular methods, but we used their names like properties (e.g. to write something into the setter, we put a value into it).

The classes also allow you to define getters and setters.

We declare them using the keywords get and set. In an object that is an instance of a given class, we refer to them by name, just as we do with regular properties.

Methods of this type in classes have exactly the same constraints as those discussed in the chapter on objects, 
so that, among other things, setter takes exactly one argument, and getter takes none.

Let's try to modify our example with the Vehicle class by changing the setPosition and getPosition methods to setter and getter positions respectively.
 */

class Vehicle { 
    constructor({id, latitude, longitude}){ 
        this.id = id; 
        this.position = {latitude, longitude}; 
        this.status = "unavailable"; 
    };
    set position({latitude, longitude}) { 
        this.time = Date.now(); 
        this.longitude = longitude; 
        this.latitude = latitude; 
    };
    get position() { 
        return { 
            latitude: this.latitude, 
            longitude: this.longitude 
        }; 
    };
};
let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
vehicle.position = {longitude: 18.193121, latitude: 59.378654};
console.log(vehicle.position);

/* 
Analyze the code carefully, comparing it with the previous version, in which we didn't use getters and setters, but regular methods.

Don't limit yourself to the body of the class.

Also look at the creation and use of the vehicle object. You should locate four major differences.

Good luck!
 */
