/*--------------------- 4.1.3 The spread operator ---------------------*/

/* 
Another technique related to function parameters is the use of the spread operator.

In a way, it's a reversal of the situation you learned when discussing rest parameters.

This time we pass an array as an argument, but inside the function we operate on single parameters, which are assigned to particular elements of the array.

This technique does not require writing anything special in the function definition; it only needs to be called correctly using the spread operator.

In the example, we’ll define a getFile function that will retrieve a file from a specified location.

In fact, we’ll only define its header (i.e. how to get the arguments) and display the arguments in the console. The rest of the function logic is omitted.

Look at the code below:
*/

function getFile(url, name, mime) {
    console.log(`url: ${url}, name: ${name}, mime: ${mime}`);
    // ...
    // some logic responsible for connecting and downloading the file
}
let parameters = ['https://localhost/files', 'test.json', 'application/json'];
getFile(...parameters); // -> url: https://localhost/files, name: test.json, mime: application/json

/*
As you can see, the function definition itself doesn’t contain anything special.

It takes three parameters: url, name, and mime, displays them, and then proceeds (theoretically) to the logic part related to downloading the file.

The spread operator is used when the function is called.

Instead of giving three arguments corresponding to three expected parameters, we give only one argument, parameters, which is preceded by three dots (the spread operator).

The parameters variable is an array (it is declared just before the function call) 
so the operator breaks it into single elements and uses them as single arguments: the first element of the array is url, the second is name, etc.
*/