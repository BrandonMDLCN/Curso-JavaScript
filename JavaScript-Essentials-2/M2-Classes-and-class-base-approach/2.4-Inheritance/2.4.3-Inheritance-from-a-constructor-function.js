/*--------------------- 2.4.3 Inheritance from a constructor function ---------------------*/

/* 
The new class can not only extend another class.

In this inheritance mechanism, we can also use constructor functions, that is, a separate method for creating objects.

Let’s define a constructor called AlmostEmpty, which will be the exact equivalent of AlmostEmptyClass from the previous example.
 */

let AlmostEmpty = function(sth) { 
    console.log(sth); 
    this.sayHi = function() { 
        console.log("Hi!") 
    }; 
};

/* 
The keyword extends allows us to create a new class based on such a constructor.

In this case, we treat the name of the constructor function as the name of the base class.
 */

class ExtendedClass extends AlmostEmpty {
    constructor(name) {
        super("I’m super ...");
        this.name = name;
    };
    sayHi() { 
        console.log(`Hi ${this.name}!`); 
    };
};
let obj = new ExtendedClass("Bob");
obj.sayHi();    // -> Hi Bob!

/* 
You can also use objects and as well as other classes to expand classes, but the technique is a bit more complex, and we won't introduce any more confusion.
 */