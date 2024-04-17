/*
Let's try to play with arrays again.

This time the program will be a bit more complicated. 
We want the user to enter names during the program's execution (we will use the prompt dialog box), 
which will be placed in the array one by one. 
Entering the names will end when the Cancel button is pressed. 
Then we will write the entire contents of the array (i.e. all entered names) to the console.
*/
let names = [];
let isOver = false;
while (!isOver) {
    let name = prompt("Enter another name or press cancel.");
    if (name != null) {
        names.push(name);
    } else {
        isOver = true;
    }
}
 
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

/*
while nos sirvio por que no sabemos cuantos elementos se van a necesitar

mientra que el for, ya que se capturaron todos los elementos, nos permite saber cuantas interacciones se van a hacer.


if we wanted to go through the elements of the array in reverse order, 
we would initialize the index variable with the value of the largest index and decrease it by one during each iteration. 
There is also nothing to stop us from jumping a few elements at a time, 
incrementing or decrementing the index variable by a value greater than one. 
Take a look at the example below:
*/
let values = [10, 30, 50, 100];
 
for (let i = 0; i < values.length; i++) {
    console.log(values[i]); // -> 10, 30, 50, 100
}
 
for (let i = values.length - 1; i > 0; i--) {
    console.log(values[i]); // -> 100, 50, 30, 10
}
 
for (let i = 0; i < values.length; i += 2) {
    console.log(values[i]); // -> 10, 50
}
