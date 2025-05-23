/*--------------------- 1.10.5 Constructor ---------------------*/
/*
The last approach is to use the constructors. First of all, we define the Figure constructor, with which we create a figure object.
*/

let Figure = function(){
    this.getType = function() {
        return this.type ? this.type : "unknown";
    }
};
let figure = new Figure;

/*
In the next step, we define the Circle constructor and, more importantly, we bind the figure object to it as a prototype. 
Note that until now the prototype has been connected directly to the object. This time it’s different – we bind it to a function that will create objects.

Each time we call the Circle constructor (using new, of course) it will create a new object with type, center, and radius fields. 
The prototype for each object will be a figure.
*/

let Circle = function(center, radius){
    this.type = "circle";
    this.center = center;
    this.radius = radius;
};
Circle.prototype = figure;
let circle1 = new Circle({x:0, y:0}, 10);
let circle2 = new Circle({x:100, y:100}, 100);

/*
For the sake of variety, let’s define another constructor, Triangle.

As you can guess, it will be used to create triangle objects. Its prototype will also be a figure.
*/

let Triangle = function(v1, v2, v3) {
    this.type = "triangle";
    this.vertices = [ v1, v2, v3];
};
Triangle.prototype = figure;
let triangle1 = new Triangle({x:0, y:0}, {x:50, y:50}, {x:10, y:100});
console.log(circle1.getType());
console.log(triangle1.getType());

/*
If you decide to use prototypes, it’s definitely best to use a method based on constructors or Object.create.


Let's do one more test, which will show us a very useful feature of prototypes. The prototype is an object, so we can modify it by adding new methods.

Let's say we want to modify an object that is a Circle prototype. We don't have to refer directly to the figure, but we can do it in the following way:
*/

Circle.prototype.hi = function(){console.log("Hi!")};

/*
We’ve added the hi method to the prototype, whose only task is to display greetings to the console.

We’ve modified the figure object, which is a prototype of the circle1, circle2, and triangle1 objects. 
What's important is that the hi method will be available not only for objects newly created with the Circle or Triangle constructors, 
but for all existing objects, whose prototype is just figure.

Let's check it out:
*/

circle1.hi();
triangle1.hi();
figure.hi();

/*
As expected, the greeting "Hi!" is displayed three times.

The feature of prototypes presented here allows for modifications to existing objects (e.g. predefined objects). 
Let's use the String constructor as an example. It is predefined and allows us to create string objects. 
Such objects have many methods and properties, e.g. length, which returns the length of the stored string.
*/

let testString = new String("unu doi trei");
console.log(testString.length);

/*
Like every designer, String also has the prototype property.

Let's try to use it:
*/

String.prototype.hi = function(){console.log("Hi!")};
console(string.hi());

/*
Adding the hi writing method to the String designer is not particularly useful, but it highlights some interesting possibilities. 
Note that after our changes, we can also make such a piece of code:
*/

console.log("abcd".hi());

/*
Why does "abcd", which is a primitive value, act as if it were an object containing a hi field? It's because of autoboxing.

JavaScript converts the simple type (in this case the string) to the corresponding object 
(in our case, an object based on the String constructor) as and when necessary.

And we indicated, this requires the use of a dot, suggesting that with dot notation we treat the text "abcd" as an object.
*/