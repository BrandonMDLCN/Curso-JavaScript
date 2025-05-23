/*--------------------- 1.7.3 this inside nested objects ---------------------*/
/*
The property of an object may be an object with its own property. We previously called it property nesting.

Let's place the method in such a nested object and check what this refers to in it - look at the code:
*/

let circle = {
    radius: 100,
    center: {
        x:0,
        y:0,
        show(){console.log(`${this.x}, ${this.y}`)}
    }
}
circle.center.show(); // -> 0, 0

/* 
As you can see, this refers to the object in which the method is directly placed.

Simple and logical, right? But what to do if, from our show method, we want to have access to the properties of the parent object, for example, to the radius field?

There is no such possibility, which is quite reasonable from the point of view of the concept of object-oriented programming.

For the method, its whole world should be the object in which it was defined. 
Of course, it may happen that the method will need some data from a higher level, but then we can pass them on as call arguments.

There is another simple justification for this limitation – the fact that we use object references.

Let’s add the following piece of code to the previous example:
 */

let test = {
    point: circle.center
}

/* 
In the test.point field, there is a reference to the same object that’s in the circle.center. 
If we would like to find the parent object from this object, an ambiguity will appear – the parent object would be both test and circle.

Logically, this is not feasible.
 */


/*--------------------- 1.7.4 Getters and setters ---------------------*/
/*
Two specific types of method are setters and getters, i.e. functions whose task is to change or check the properties of an object. 
In fact, these functions do not have to set properties or download them, but this is theoretically their purpose.

They have several specific features:

 - we declare them using the keywords set and get;
 - the setter method must take exactly one argument;
 - the getter method cannot accept any argument;
 - these methods are seen as ordinary properties with the name of the method;
 - setter and getter methods are not called as functions, they are used to assign a value to a property (setter) or to take a value from a property (getter)
 - there may be a pair of setter and getter of the same name, and it will be treated as a property with read and write capabilities.

 From the point of view of using the object, the setter will behave like a normal property to which we assign a value. 
In fact, however, the method to which the value is passed on as an argument will be called. 
And what we do with this value inside a method depends entirely on our imagination.


Let's start with a simple example with a getter method. It will return the _tel property value.

let contact = {
    _tel: "207-662-5412",
    get tel() {return this._tel;}
};
console.log(contact.tel);
contact.tel = "100-100-1000";
console.log(contact.tel);
contact.email = "RonaldSMurphy@freepost.org";
console.log(contact.email);

In our object, we didn't define a tel setter, so an attempt to write into such a property will not succeed.

What's more, since there is already a getter with this name, JavaScript will not allow us to create a new property with this name.

For comparison, we see that an attempt to assign a value to a non-existent email field will create it and save the value.

Let's add a setter method to the example.

Using the contact object, we will now be able to both read from a fake tel field and write to it.
*/

let contact = {
    _tel: "207-662-5412",
    get tel() {return this._tel;},
    set tel(t) { this._tel = t;}
};
console.log(contact.tel);
contact.tel = "100-100-1000";
console.log(contact.tel);

/*
Setter and getter methods can perform much more complex actions than just operations on a single property. 
They are often used to create fake fields that are, for example, aggregated from the values of several real fields, modified on the fly, validated, etc.

For example:
*/

let contact = {
    _age: 36,
   firstName : "David",
    lastName : "Taylor",
    get fullName() {return `${this.firstName} ${ this.lastName}`;},
    get age() { return this._age;},
    set age(a) { if( a > 0) this._age = a;}
};
console.log(contact.fullName);
contact.age = -20;
console.log(contact.age);
