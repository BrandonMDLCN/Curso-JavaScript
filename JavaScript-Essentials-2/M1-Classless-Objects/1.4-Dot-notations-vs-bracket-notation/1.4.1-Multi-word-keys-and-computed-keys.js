/*--------------------- 1.4.1 Multi-word keys ---------------------*/
/*
Until now, we have used dot notation as the basic way of referring to the properties and methods of an object.

Alternatively, we can also use bracket notation. 
This method is similar to referencing an array field, except that we don't give the index of an element, but instead we give its key. 
Remember, the key is a string!
*/

contact.tel === contact["tel"];
contact.email.work === contact["email"]["work"]

/*
This approach is slightly less intuitive than dot notation, but there are cases where it’s the only way out.

A typical example is the use of multi-word keys.

We can create an object containing a property whose key consists of several words.

However, we won’t be able to refer to this field later using a dot.

It is then that the bracket notation comes to our aid.

Look at the code below:
*/

let contact = {
    "first name": "Ronald"
};
contact["first name"] = "Tim";
//contact.first name = "Tim";    // SyntaxError: Unexpected identifier
//contact."first name" = "Tim";    // SyntaxError: Unexpected string



/*--------------------- 1.4.2 Computed keys ---------------------*/
/*
However, bracket notation is more often used when operating on computed keys.

It may happen that the property key we want to refer to will be calculated during the operation of the program, on the fly.

In this case, dot notation will not allow us to combine the object name and calculated key (e.g. stored in a variable).

Again, we can use bracket notation to solve this problem.
*/

let contact = {
    email_1: "RonaldSMurphy@freepost.org",
    email_2: "rsmurphy@briazz.com"
};
for(i=1; i<=2; i++) {
    let key = "email_" + i;
    console.log(key);
    console.log(contact[key]);
}

/*
Pay attention to the line in which we calculate the key. 
We add a number from the variable i to the string "email_" – JavaScript automatically converts the number to a string here.

By the way, we can slightly improve the formatting of what our program displays on the console (the keys and values).

This may not apply directly to objects and their properties, but since we can display something in a more elegant way ...
*/

for(i=1; i<=2; i++) {
    let key = "email_" + i;
    console.log(`${key}: ${contact[key]}`);
}

//We’ll come back to this string formatting method in the following chapters.