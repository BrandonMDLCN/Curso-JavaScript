/*
The do ... while loop is very similar to the plain while loop, 
the main difference being that in a while loop, the condition is checked before each iteration, 
and in the do ... while loop, the condition is checked after each iteration.

This doesn’t seem like a big difference, 
but the consequence of this is that a do ... while loop code is always executed at least once before the first condition check is done, 
and a plain while may never be executed at all if the initial condition is evaluated to false at the beginning of the loop.

The syntax of the do ... while loop looks as follows:
do {
    code block
} while(condition);


Let's rewrite our last example using do ... while instead of while. 
Note that this time the isOver variable does not need to be initialized before the loop 
(the condition is checked at the end of the loop, and the confirm dialog box will be called before the first test).
*/
let isOver;
let counter = 1;
 
do {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
} while (!isOver);

//In the next example, we demonstrate what we said earlier – a do ... while loop always iterates at least once:

let condition = false;
 
while (condition) {
    console.log("A while loop iteration."); // never executed
}
 
do {
    console.log("A do ... while loop iteration."); // executed once
} while (condition);
