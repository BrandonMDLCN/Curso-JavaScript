/*
We leave the declaration and initialization of the n variable unchanged. 
The repeating code fragment is enclosed in a separate code block, and using the word while, 
we specify that it is to be executed as long as the value of variable n is less than 91.
*/
let n = 0;
while(n < 91) {
    console.log(n); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
    n += 10;
}
/*
The code block is executed once, and then the value of n is increased by 10. 
The loop is repeated until the value of n is greater than or equal to 91.

The while loop is so versatile that someone persistent enough could replace all other control flow 
instructions with while loops, even if statements. 
Of course, it would be cumbersome at best. 
The while loop is one of the loops that we normally use when we don't know exactly how many times something should be repeated, 
but we do know when to stop. 

The syntax of the while loop is as follows:

while(condition) {
    block of code
}


The expression in parentheses is evaluated at the beginning of each iteration of the loop. 
If the condition is evaluated to true, the code in the curly brackets will be executed.

Mientras la condición sea verdadera se va a ejecutar lo que esta dentro del bloque
*/

let isOver = false;
let counter = 1;
 
while (isOver != true) {
    let continueLoop = confirm(`[${counter}] Continue the loop?`);
    isOver = continueLoop === true ? false : true;
    counter = counter + 1;
}

/*
The loop will be repeated until the isOver variable is set to true.

Try to analyze exactly what the changes are about. 
We’ve used for this purpose, among others, the operators we recently learned.
*/
let isOvers = false;
let counters = 1;
 
while (!isOvers) {
    isOvers = !confirm(`[${counters++}] Continue the loop?`);
}
