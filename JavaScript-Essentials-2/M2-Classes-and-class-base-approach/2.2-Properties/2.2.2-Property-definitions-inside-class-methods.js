/*--------------------- 2.2.2 Property definitions inside class methods ---------------------*/

/* 
When introducing classes into the JavaScript language, it was assumed that properties would be defined according to the needs inside the bodies of the constructor and methods.

To be honest, it is not really a true declaration. We take advantage of the fact that if we try to store the value in a non-existent property, it will be created automatically.

Exactly the same technique is used in the constructor method we learned.

This is nothing particularly burdensome. The only inconvenience may be the readability of the code of such a class – at first glance, 
we may have a problem with locating all the properties (their definition may be scattered over different methods).

In our example (look at the code below) with the Vehicle class, we declared the properties exactly this way, so let's look at it again.
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
console.log(vehicle1 = new Vehicle({id:123, latitude:10, longitude:20}))
console.log(vehicle1.getPosition())
console.log(vehicle1.setPosition(20,10))
console.log(vehicle1.id)
console.log(vehicle1.status)
/* 
In the constructor, we implicitly declare the two properties id and status, assigning to them the values given when creating a new object.

Initially, the object does not yet have such fields, so they are created. Only then are the passed values stored in them (initialization takes place).

Then the setPosition method is called. In its body, we refer to the properties time, longitude, and latitude, because when we call the setPosition method 
for the first time these properties don't exist yet, so if we try to assign something to them we will create them first.

Subsequent calls of the setPosition method, e.g. vehicle.setPosition(0,0), will of course only result in new values being assigned to existing properties. 
*/