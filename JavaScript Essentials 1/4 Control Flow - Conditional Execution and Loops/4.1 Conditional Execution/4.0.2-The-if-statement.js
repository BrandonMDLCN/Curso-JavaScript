//------------------- 4.0.2 The if statement -------------------//
/*
The if statement is the first and simplest control flow instruction available in JavaScript.
in its basic form, it checks a given condition, and depending on its Boolean value, 
either executes a block of code, or skips it.
*/
/*
if (condition) {
    //block of code
}
*/
/*
The if keyword needs to be followed by the expression in parentheses, which will be evaluated to the Boolean, 
and if the result is true, the block of code that follows the conditional expression is executed.
If the expression evaluates to false, the block of code will NOT be executed.

The code block should be separated using curly brackets.
*/

let isUserReady = confirm("Are you ready?");
console.log(isUserReady);
if (isUserReady) {
    alert("User ready!");
}

/*
In the example, an alert with the message "User ready!" will show only when the user closes the confirm dialog box by clicking the OK button. 
But if the user closes the "Are you ready?" confirmation box without clicking OK, the "User ready!" message will never be shown.

In the example, there is one line inside the if block of code, which means that we could omit the curly brackets around that block.
However, while it may look tempting to do so, it’s always better to use curly brackets.
*/
let isUserReadys = confirm("Are you ready?");
 
if (isUserReadys){
    console.log("User ready!");
    alert("User ready!");
}


////////////////////////////////////////
let userAge = 23;
let isFemale = false;
let points = 703;
let cartValue = 299;
let shippingCost = 9.99;
 
if (userAge > 21) {
    if (cartValue >= 300 || points >= 500) {
        shippingCost = 0;
    }
}
 
console.log(shippingCost);

/*
In this example, to set the shippingCost to zero, the userAge needs to be over 21. 
The second if is calculated and needs the cartValue to be over or equal to 300, 
or the points to be greater than or equal to 500.

Another way to write the same thing is to use the logical AND operator. 
We can now remove one if instruction and describe everything as one, more complex condition.
*/

if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
    // If both conditions are met, then...
    shippingCost = 0;
}