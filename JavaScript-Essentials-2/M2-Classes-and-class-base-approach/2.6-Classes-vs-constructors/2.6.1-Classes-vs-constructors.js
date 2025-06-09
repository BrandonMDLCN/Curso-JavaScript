/*--------------------- 2.6.1 Classes vs. constructors ---------------------*/

/* 
You've probably already figured out that the classes in JavaScript are very similar to the constructor functions (the constructor technique of object creation).

The vast majority of what appears in JavaScript with classes is actually just syntactical sugar over existing prototyped base inheritance (most, but not all).

The concept of syntactical sugar in programming is a feature of the language that can be eliminated by syntactical transformation, and that serves only the convenience of the programmer.

So classes in JavaScript are not a completely new philosophy, just a new, slightly more convenient wrapper for what already existed.

Compare two pieces of code, functionally identical, one written with classes, the other with constructors. You should easily catch the similarities and differences.

By the way, note that we declare two methods with the same name.

How is that possible? One is an ordinary (prototype) method, so it is related to the created object (with the instance). The other method is static.

In other words, it is related either to the class, or in the case of constructor techniques, to a constructor.
*/

class TestClass { 
    constructor(arg) {
        this.arg = arg;
        console.log(this.arg);
    }; 
    
    showSth() { 
        console.log("I'm prototyped!");
    };
    
    static showSth() { 
        console.log(`Hi, I'm static!`);
    };  
}; 
let testa = new TestClass("Hello");
testa.showSth(); // -> I'm prototyped!
TestClass.showSth(); // -> I'm static!
console.log(testa instanceof TestClass);



let Test = function(arg) { 
    this.arg = arg;
    console.log(this.arg);
}; 
    
Test.prototype.showSth = function() { 
    console.log("I'm prototyped!");
};
    
Test.showSth = function() { 
    console.log(`Hi, I'm static!`);
};  
let test = new Test("Hello");
test.showSth(); // -> I'm prototyped!
Test.showSth(); // -> I'm static!
console.log(test instanceof Test);

/*
The version of the code using constructor functions is written correctly, but is a little bit unusual, 
in order to make it easier to compare it with the code using classes.

Among other things, it shows why the regular methods (not static) that appear in the created object are called prototype ones.

If we had written normal code and not a reference code for comparison, we would probably create something like this:
*/

let Test = function(arg) { 
    this.arg = arg;
    this.showSth = function() { 
        console.log("I'm prototyped!");
    };
    console.log(this.arg);
}; 
        
Test.showSth = function() { 
    console.log(`Hi, I'm static!`);
};

/*
Usually the choice between using classes and constructors is highly subjective.

Both methods give you exactly the same options. If you’re working alone, you simply choose the method that is more convenient for you.

If you are in a larger team, the method will probably be imposed on you in order to produce consistent code.

It may also happen that you will be forced to use a particular method by the framework or libraries you will be using 
(for example, classes have long been the basis of the React framework).
*/