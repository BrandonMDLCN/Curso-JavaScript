/*--------------------- 1.6.4 Copying objects (copying references (), cloning, merging) ---------------------*/
/*
As we checked a moment ago, assigning an object from one variable to another only creates a copy of the reference. But what if we want to copy the contents of the object?

We would have to create a new target object, save the reference to a new variable, and copy the properties of the source object to the target one by one.

We can use the Object.assign method for this. 
The method takes the target object as the first argument, to which the fields from other objects will be copied. 
The second and subsequent arguments (there is no limit to the number of objects) will be used as the source of the properties to be copied. 
If a property with the same name as the source object already exists in the target object, 
it will be overwritten with a new value (the target is overwritten with the source).

In the example below, we create two empty objects and then, using Object.assign, extend their properties.
*/

//let point0 = {x:10, y: 20 };
let point1 = point0;    // copy reference
//let point2 = {};
Object.assign(point2, point0);  //  copy properties into the new object
console.log(point2.x);
console.log(point2.y);
console.log(point1 === point0); // true
console.log(point1 === point2); // false

/*
As a result of the execution of our code, the variable point1 will contain a reference to the same object as point0, 
while point2 will be a new object to which the contents of point0 have been copied (i.e. it will contain the two fields x and y, with the values 10 and 20).

The source objects, that is, the ones from which we’ll copy the properties, can be many.

All the properties of each source are copied to the target object, 
with the objects copied in the order in which they occur as arguments of the Object.assign method (from left to right).

The order is important for the same property names in several source objects.
*/

//let point3 = {};
Object.assign(point3, point0, {z: 100});
console.log(point3.z);
console.log(point3);

/*
This time we create a point3 object with three fields: x, y, and z (with the values 10, 20, and 100 respectively). 
They’re copied from the point0 object and from the object placed directly as a call argument.

The list of source objects can, of course, be longer. As we indicated earlier, the properties with the same names are overwritten.

Continuing our example, let's check how overwriting properties works in practice.
*/

var point4 = {};
Object.assign(point4, point3, {z: 200, color: "red"});
console.log(point4.z);    // 200
console.log(point4);

/*
Note that the z field occurs both in the point3 object (and has a value of 100) and in the object inserted as the last argument (which has a value of 200). 
As we indicated earlier, in this case, the value from the last, most right-handed argument "wins".

The Object.assign function returns a reference to the target object that has been modified, 
so we can simplify our example by giving as the first argument (and without much thought) 
an empty object to which we assign the reference to a variable after completing the Object.assign method.
*/

//let point0 = {x:10, y: 20 };
//let point2 = Object.assign({}, point0);
//let point3 = Object.assign({}, point0, {z: 100});
console.log(point0);
console.log(point2);
console.log(point3);


/*
A convenient alternative to Object.assign is to use the spread operator. 
There are some differences in the operation of both mechanisms, but they’re so subtle that we won’t bother with them at the moment.

The example rewritten once again, this time using the operator mentioned, will look like this:
*/

let point0 = {x:10, y: 20 };
let point2 = { ...point0};
let point3 = { ...point0, z: 100};
console.log(point0);
console.log(point2);
console.log(point3);

/*
The three dots preceding the object cause it to be spread out into individual fields, which are placed in the new object. 
The operation can be performed on many objects at the same time, additionally completing single fields according to normal syntax.

For example, the code:
*/

// let point4 = { ...point3, ...{z: 200, color: "red"});
console.log(point4);
//will produce the same effect as:

// let point4 = { ...point3, z: 200, color: "red");

/* 
You have probably already noticed that the mechanisms shown allow you to combine existing objects to create a new object.

Using them to copy, or to be more precise, clone a single object is just a special case of this.

However, the actions presented have a certain limitation – they all represent shallow cloning.

If there is shallow, then as you can guess, there should also be deep cloning.

What is the difference between them? Shallow cloning does not copy nested objects, operating only on their references.

This is unnoticeable in the examples we analyzed, so we’ll prepare another piece of test code:
 */

let circle1 = {
    radius: 100,
    center: {
        x: 100,
        y: 100
    }};
let circle2 = {...circle1};
circle1.radius = 200;
circle1.center.x = 200;
console.log(circle2.radius);
console.log(circle2.center.x);
console.log(circle1 === circle2); // false
console.log(circle1.center === circle2.center); // true !

/* 
What’s happening this time?

The new circle2 object is copied "shallow".

This is a new object, independent of circle2. You can see it after trying to change the radius field – the change in point1 is not visible in point3.

However, the center field is an object – it is nested here.

Our Object.assign method (or in this case the spread operator) copies only the reference from the center field to the new circle2 object.

This can be seen both when trying to change one of the properties of the center field and when comparing these fields directly from both objects.

So we can already guess what deep cloning will be.

We’ll copy the values of all the fields, regardless of their nesting, if necessary creating new objects that are properties of the parent object.

JavaScript does not have a built-in mechanism for this type of cloning, but we can easily write this piece of code ourselves. 
The function that we write will check the types of all properties of the copied object. 
If a property turns out to be an object, the same function will be called for it again (so we use recursion). 
This code here may not be optimal, but it demonstrates the principle of deep cloning.

Analyze the function shown below:
 */

let deepClone = function(obj) {
    let newObj = {...obj};
    for(property in newObj) {
        if(typeof newObj[property] === "object") {
            newObj[property] = deepClone(newObj[property]);
        }
    }
    return newObj;
}

/* 
Invent a sample object with at least three nesting levels, clone it using this function, 
and check that all properties, at any nesting level, are actually independent of the source object.
 */