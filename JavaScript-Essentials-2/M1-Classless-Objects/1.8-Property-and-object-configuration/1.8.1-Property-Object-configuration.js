/*--------------------- 1.8.1 Property configuration ---------------------*/
/*
In one of the previous examples, we tested how the enumeration of object properties works.

We used the Object.keys method and the for ... in construction. We assumed that in this way we would list all the object properties.

That is usually true, but we can change it by configuring individual properties as well as the whole object. 
Configuration also allows us to change some other features of object properties.

So, let's take a closer look at this topic, and let's go back to the previous example - look at the code:
*/

let contact = {
    _age: 36,
    firstName : "David",
    lastName : "Taylor",
    get fullName() {return `${this.firstName} ${ this.lastName}`;},
    get age() { return this._age;},
    set age(a) { if( a > 0) this._age = a;}
};
let keys = Object.keys(contact);
console.log(keys);  // -> [ '_age', 'firstName', 'lastName', 'fullName', 'age' ]

/*
An array "show", "_age", "firstName", "lastName", "lastName", "fullName", "age"] will be assigned to the keys variable, 
containing all the keys (property names) of the contact object.

Let's use another method now, Object.getOwnPropertyName.
*/

let desc = Object.getOwnPropertyDescriptor(contact, "firstName");
console.log(desc);

/* 
This method allows us to retrieve information about the indicated property of the selected object.

In our example, we check the firstName property of the contact object. The desc variable should be filled in by an object describing the attributes of this property.

{
    value: "David", 
    writable: true, 
    enumerable: true, 
    configurable: true
}

As you can see, each property, apart from the name and value, has such attributes as writable, enumerable, and configurable. 
As you can guess, the configuration of properties will be set by manipulating these attributes.

The exceptions are the setter and getter methods, which do not have writable fields in the configuration, but instead the get and set fields appear.

Object properties, created in the way we did it in all the previous examples, 
have all their configuration attributes set to true by default (i.e. you can write to them, they are enumerable, and reconfigurable).

We can set our own configuration of properties using the Object.defineProperty method.

This method is used to create a new object property, but it can also be used to modify an existing property.

Let's take a look at another example:
 */

let contacta = {};
Object.defineProperty(contacta, "_age", {
    value: 36,
    writable: true,
    enumerable: false,
    configurable: true
});
Object.keys(contacta);
console.log(contacta._age);

/*
We have added the _age property to an empty contact object, marking it not to be enumerable. And it really isn't – calling Object.keys won't return it.

Similarly, when executing for ... in, it will not be taken into account. However, the property exists, which we can check by displaying its value.

To change the configuration of an existing property, we also use the Object.defineProperty method.

Continuing with the previous example, let’s try to convert the _age field to read only.
*/

Object.defineProperty(contacta, "_age", {
    value: contacta._age,
    writable: false,
    enumerable: false,
    configurable: true
});
contacta._age = 100;
console.log(contacta._age);

/* 
As you can see, the change in the configuration of the writable attribute to false means that we cannot modify the value of our _age property.

Besides enumerable and writable, there is also an attribute called configurable in the configuration. 
Setting it to false will make it impossible to reconfigure the property or to delete it with the delete command.

Object.keys and the for ... in loop operate only on properties that are enumerable.

However, if we would like to retrieve all the fields without paying attention to their configuration, we can use the Object.getOwnPropertyNames method.

It works similarly to Object.key, but it returns an array of all the keys (property names), regardless of whether they are enumerable or not.
 */

let enumKeys = Object.keys(contacta);
let allKeys = Object.getOwnPropertyNames(contacta);
console.log(enumKeys);
console.log(allKeys);

/*--------------------- 1.8.2 Object configuration ---------------------*/
/*
The configuration can also be changed at the level of the whole object (not only its individual properties).

The following methods are used for this purpose, among others:

 - Object.preventExtensions(obj) – after calling this method, we won't be able to add new properties to the object obj;
 - Object.seal(obj) – does not allow the adding, removing, or reconfiguring of the properties of the object obj;
 - Object.freeze(obj) – similar to Object.seal, but additionally makes it impossible to change the value of the property.

We also have methods to check if the object configuration has been changed.

And so, we can use these methods respectively: Object.isExtensible, Object.isSealed(obj) and Object.isFrozen(obj).
*/