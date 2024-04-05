/*
The first rule is simple. If we declare any variable or constant using "let" or "const", respectively, outside the code blocks, they will be global.
By this we mean that their names will be visible throughout the program, outside blocks, inside blocks, in functions, and so on.

What happens if we declare something using let or const inside a block? 
This will create a local variable or constant.
It will be visible only inside the block in which it was declared and in blocks that can optionally be nested in it.
Let's look at a simple example:
*/

let height = 180;
{
    let weight = 70;
    console.log(height); // -> 180
    console.log(weight); // -> 70
}
console.log(height); // -> 180
console.log(weight); // -> Uncaught ReferenceError: weight is not defined

//We can also test the case with nested blocks:
let height = 200;
{
    let weight = 100;
    {
        let info = "tall";
        console.log(height); // -> 200
        console.log(weight); // -> 100
        console.log(info); // -> tall
    }
    console.log(height); // -> 200
    console.log(weight); // -> 100
    console.log(info); // -> Uncaught ReferenceError: info is not defined
   }

/* -----------------------------------------------*/
/*                        var                    */
/* ---------------------------------------------*/
/*
In the case of variable declarations using the keyword var, the situation is slightly different.

The variable declared using it outside the blocks will, as in the case of let, be global and accessible from anywhere.
If you declare it inside a block, then... well, it will usually turn out to be global again.
*/
var height = 180;
{
    var weight = 70;
    console.log(height); // -> 180
    console.log(weight); // -> 70
}
console.log(height); // -> 180
console.log(weight); // -> 70

/*
As expected, both variables, height and weight, turn out to be global. 
Will the variables declared using var always, regardless of the place of declaration, be global? Definitely not.

var ignores ordinary program blocks, treating them as if they do not exist.

So in what situation can we declare a local variable using var? Only inside a function.
*/

var globalGreeting = "Good ";
   
function testFunction() {
    var localGreeting = "Morning ";
    console.log("function:");
    console.log(globalGreeting);
    console.log(localGreeting);
}
   
testFunction();
   
console.log("main program:");
console.log(globalGreeting);
console.log(localGreeting); // -> Uncaught ReferenceError: localGreeting is not defined