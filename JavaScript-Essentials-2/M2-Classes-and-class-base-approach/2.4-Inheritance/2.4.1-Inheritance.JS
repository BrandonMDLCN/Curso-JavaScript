/*--------------------- 2.4.1 Inheritance ---------------------*/
/* 
One of the main reasons for introducing classes in JavaScript was to simplify the inheritance notation.

In fact, the new mechanism still works on prototypes, but its syntax is much simpler.

To indicate that a class inherits methods and properties from another class, we use the keyword extends.

So the new class extends the definition of the old class (without modifying the base class, of course).


Coming back to our small transport company, we just came up with an idea to distinguish between passenger and freight vehicles.

The number of seats will be important for passengers, so we decided to create a new Bus class based on the Vehicle class.

Why use the Vehicle class for this purpose?

The buses will have all the properties of the vehicles, so we only need to extend them with the property specifying the number of seats.

The new Bus class will extend the Vehicle class and have its own constructor, in which we will define and initialize the seat property.


Class Bus extends Vehicle {
    constructor({seats}) {
        this.seats = seats;
    }
}
let bus = new PassengerVehicle({seats: 40}); 
console.log(bus.seats); // -> 40
console.log(bus.id); // -> ! undefined


At first glance, everything looks fine. We have a new Bus class, extending the Vehicle class, and its instance, the bus object.

The seats property has the correct value, but something is not right with the id property. 
It turns out that it has an undefined value, just like other properties inherited from the Vehicle class.

Why did this happen? We forgot to pass the arguments that are needed to initiate the remaining properties to the new constructor.

Let's correct this.


Class Bus extends Vehicle {
    constructor({seats}) {
        this.seats = seats;
    }
}
let bus = new PassengerVehicle({seats: 40}); 
console.log(bus.seats); // -> 40
console.log(bus.id); // -> ! undefined


It looks a little better.

When creating a new object, we provide all the necessary arguments, and we receive them in the constructor.

So why does it still not work as we expect? For a very simple reason.

Although we receive all the necessary values in the new constructor, we do not do anything with them.

In order to fix this, we could set the necessary properties one by one in the new constructor, 
but this way we would practically rewrite the already existing Vehicle constructor.

At this point a new keyword can help us: super. 
It may be used in the inheritance of classes to call the constructor of the base class (in our case the Vehicle class).

This is what we need!

Let's fix the code again.
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


class Bus extends Vehicle {
    constructor({seats, id, latitude, longitude}) {
        super({id, latitude, longitude});
        this.seats = seats;
    }
}
let bus = new Bus({seats: 4, longitude: 18.213423, latitude: 59.367628, id: "AL1024"}); 
console.log(bus.seats); // -> 4
console.log(bus.id); // -> "AL1024"

/* 
This time, it's all working well.

Thus, we can already create a class from an existing class using inheritance (or, according to JavaScript nomenclature, extending).

By the way, in JavaScript, the base class that we extend is often called a super class.
 */


