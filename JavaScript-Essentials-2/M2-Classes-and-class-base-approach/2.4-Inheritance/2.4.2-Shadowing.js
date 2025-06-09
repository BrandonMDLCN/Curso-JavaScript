/*--------------------- 2.4.2 Shadowing ---------------------*/
/* 
When you extend a class, you may experience shadowing.

This happens, for example, when in a new class you have defined a method with the same name as the method in the base class.

In such a situation, the new method defined in the class extending the base class “wins”. The new method shadows the old one.

However, you have the option to call a shadowed base class method. Again, the super keyword comes to the rescue.

Let's analyze a simple case, in which the AlmostEmptyClass class is being extended by creating a new ExtendedClass class.

The base class, besides the constructor, has only one method: sayHi. In the new class, we will define a new method with the same name.

To this we will add two methods, newHi and oldHi.

The newHi method will refer to sayHi with this. The oldHi method will use super instead of this.

Look at the code below:
 */

class AlmostEmptyClass { 
    constructor(sth) { 
        console.log(sth); 
    }; 
    sayHi() { 
        console.log("Hi!") 
    }; 
}; 
    class ExtendedClass extends AlmostEmptyClass {
        constructor(name) {
            super("I’m super ...");
            this.name = name;
        };
    sayHi() { 
        console.log(`Hi ${this.name}!`); 
    };
    newHi() {
        this.sayHi();
    }
    oldHi() {
        super.sayHi();
    };
};
let obj = new ExtendedClass("Bob"); // -> I’m super ...
obj.sayHi();    // -> Hi Bob!
obj.newHi();    // -> Hi Bob!
obj.oldHi();    // Hi!

/* 
What is the effect of our script? Let’s look at it piece by piece:

Calling sayHi() triggers a new sayHi method, defined in ExtendedClass. 
This method shadows sayHi from the AlmostEmptyClass class. As a result, "Hi Bob!" is shown on the console.
Calling obj.newHi() causes us to call this.sayHi() inside this method, which means that we again refer to the sayHi method of the ExtendedClass class. 
And again, Hi Bob!" appears on the console.

Only calling obj.oldHi() gives a different effect. Inside this method, instead of this, we use super calling super.sayHi(). 
In this way, we force the base class method – in this case the class AlmostEmptyObject. And on the console we get "Hi!".

So remember that during inheritance, new fields shadow the old ones if they have the same names. 
You can access the base class fields from inside the new methods using the super keyword instead of this.
 */