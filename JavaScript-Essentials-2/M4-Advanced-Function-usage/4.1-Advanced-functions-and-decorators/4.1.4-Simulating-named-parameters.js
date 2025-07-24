/*--------------------- 4.1.4 Simulating named parameters ---------------------*/

/* 
Despite the fact it is a convenient way of passing arguments (we can treat the array as a kind of configuration passed to the function), it has some minor drawbacks.

For instance, the arguments must be placed in the array in exactly the same order as the parameters in the function definition.

This is not a huge problem, but it would be more convenient to prepare a configuration where we could give the arguments in any order; 
marking their meaning with an appropriate label.

Such technique is called named parameters and unfortunately it doesn’t exist explicitly in JavaScript.

This doesn’t matter however, since it is possible to simulate it in a very simple way.

Let's rewrite our example with the getFile function – look at the code here:
*/

function getFile({url, name, mime}) {
    console.log(`url: ${url}, name: ${name}, mime: ${mime}`);
    // ...
    // some logic responsible for connecting and downloading the file
}
let parameters = {name: 'test.json', url: 'https://localhost/files', mime: 'application/json'};
getFile(parameters); // -> url: https://localhost/files, name: test.json, mime: application/json
getFile({mime: 'image/jpeg', url: 'http://test.com/rest', name: 'id.jpg'}); // -> url: http://test.com/rest, name: id.jpg, mime: image/jpeg

/*
Firstly, the definition of the function changes – note the parameters.

They are still url, name, and mime, but this time we expect them to be fields of a single object passed as an argument (the parameters have been enclosed in curly brackets).

So, the function should be called with a single argument that has fields with those names.

Inside the function, the fields of that object are referred to directly by their names (an automatic deconstruction of the object has taken place). 
The declaration of the parameters variable also changes.

This time it’s not an array, but an object with the name, url, and mime fields.

The order of the fields doesn’t matter at this point; they are uniquely identified by their names.

This can be seen in the two getFile calls, where they are first given in the order name-url-mime and then mime-url-name.

This technique, called simulating named parameters, is very convenient – it’s often easier for us to use parameter names than to pay attention to their order.
*/