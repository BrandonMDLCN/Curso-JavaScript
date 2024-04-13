let isUserReady = confirm("Are you ready?");
 
if (isUserReady) {
    console.log("User ready!");
}
 
if (isUserReady == false) {
    console.log("User not ready!");
}

/*
What if in the future we have to change this condition? Will we remember to change it in both places?
This is a possible future logic error. So what can we do? We can use an else keyword.
The else keyword is an optional part of the if statement, 
and it allows us to add a second code block that will be executed only when the initial condition is NOT met.

Both blocks of code are separated using the else keyword.
*/
let isUserReadys = confirm("Are you ready?");
 
if (isUserReadys) {
    console.log("User ready!");
} else {
    console.log("User not ready!");
}

  