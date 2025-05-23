/*--------------------- 1.5.1 Property existence test and property enumeration ---------------------*/
/*
It may happen that we want to check if there is a property with a specific name in our facility (e.g. in contact with the notes field).

If you try to read a non-existent property, the undefined value will be returned.

JavaScript will behave the same if the field exists but has no value assigned to it.
*/

if(contact.notes) { // if different then undefined
    console.log(contact.notes);
}

/*
In most cases, it won’t matter to us whether a field does or does not exist, or simply has no value assigned to it.

Both cases are handled in the same way, with a new value being assigned to the property (if the field does not exist, it will automatically be created).
*/

if(!contact.notes) { // if undefined (check !)
    contact.notes = "something really important";
}

/*
Note  It’s good practice to test if a given object field exists before trying to read it. 
The ease of use of dot notation often results in us taking shortcuts, assuming that an object should look a certain way. 
This can have fatal consequences, especially for nested objects.
Let's take a look at the contact object, which contains only the phone field. 
An attempt to display the value of the non-existent notes field will cause the console to appear undefined, and the program will continue to run.
*/

console.log(contact.notes); // -> undefined

//However, if we try to refer to a non-existent email field, which seems to contain the nested work and private fields, the consequences will be slightly more serious.

console.log(contact.email.private); // exception!

/*
The JavaScript engine will try to find the private field in the object, which is ... undefined. 
This will end up throwing out an exception, which if not handled with the try ... catch, will terminate our program.

The easiest way to protect yourself is to either use the try ... catch block, or simply check before calling if the object and required field exist:
*/

if(contact && contact.email) {
    console.log(contact.email.private);
}

//or in a simpler form:

contact && contact.email && console.log(contact.email.private);
