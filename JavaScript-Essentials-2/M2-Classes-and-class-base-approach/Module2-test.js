/* 
A class may have a constructor, i.e. a method:
named constructor.

You have defined a class Point whose constructor takes two arguments: x and y. Which of the following is the correct way to create a point object of this class?
let point = new Point(100, 200);

Select the correct missing line so that the executed code results in the following console output: Alice
constructor(n) { this.name = n;}

let Point = class {};
It is:
correct, because it is a declaration of an anonymous class, and saves it to the variable Point (a class as a first-class citizen).

Select the correct missing line in order to declare a property named test and initialize it with the value 10:
test = 10;

class User {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
 
    setColor(color) {
        this.color = color;
    }
}
let point = new Point(100, 200);
point.setColor('red');
has three properties: x, y, and color

Which of the following properties will the point object have?
name x y color

Select the correct missing line in order to insert a private property declaration in the code:
#name = 'Bob';

What will appear in the console as a result of code execution?
['color']

class User {};
let user = new User();
console.log(`${user instanceof User} ${typeof(user)}`);
true object

Select the correct command in order for the console to show the following string after running the whole code: Bob Marley
console.log(user.fullName);

Select the correct missing line in order for the console to show the following after running the whole code: Bob
set name(val) { this._name = val;} 

Select the correct missing line so that the executed code results in the following console output: A B
class B extends A {


class User {};
class EUser extends User {};
class EEUser extends EUser {};
let eeuser = new EEUser();
console.log(`${eeuser instanceof User} ${eeuser instanceof EUser} ${eeuser instanceof EEUser}`)
true true true


What will appear in the console as a result of code execution?
B A

Select the correct missing line so that the executed code results in the following console output:
A: 10
B: 10
super(val);

A static method defined in a class:
is bound to the class only and will not be available in the object created from it.

Select the correct call so that the executed code results in the following console output: Test
Test.info()

function A() {};
class B extends A {};
let b = new B();
console.log(`${b instanceof A} ${b instanceof B}`);
true true will be displayed, because A will be treated as a constructor during inheritance. 
*/