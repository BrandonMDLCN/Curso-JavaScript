/*--------------------- 1.3.1-Types ---------------------*/
/*
As we mentioned earlier, we can assign primitive values to variables (e.g. number, Boolean, or string), complex values such as arrays or objects, and functions.
*/

let nr = 10; 
let b = false; 
let str = "uno dos tres"; 
let arr = [10, 20, 30]; 
let obj = {
    x: 10, 
    y: 20
}; 
let fn = function(arg) {
    console.log(arg)
}; 
fn(123); //-> 123

/*
Object properties can be treated in exactly the same way as variables – you can assign values of any type to them.

Let's create a test object with properties that are equivalent to the variables from the previous example.
*/

let test = {
    nr: 10, 
    b: false, 
    str: "uno dos tres", 
    arr: [10, 20, 30], 
    obj: {
        x: 10, 
        y: 20
    }, 
fn: function(arg) {console.log(arg)} 
};
test.fn(123);

/*--------------------- 1.3.2 Nested properties ---------------------*/
/*
If the property of an object is another object that has properties itself, then we are dealing with nested properties.

The test object from the previous example contains the obj object, which in turn has the x and y fields.

Referring to such fields using dot notation is intuitive, and we simply add another dot and key (property name).
*/

console.log(test.obj.x);
test.obj.y = 40;

//Obviously, there may be more levels of nested properties.