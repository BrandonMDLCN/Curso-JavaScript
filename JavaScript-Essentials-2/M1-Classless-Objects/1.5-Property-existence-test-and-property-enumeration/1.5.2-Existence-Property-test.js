/*--------------------- 1.5.2 Existence test using "in" ---------------------*/
/*
JavaScript allows for a more unambiguous test of whether an object field exists – using the keyword in.

If the field exists, it’s returned true (even if the field has no set value).

Otherwise, the value false is returned.
*/

if("notes" in contact) { // if true
    console.log(contact.notes);
}

//Remember that the property name is a string, and this is how we must use it with the keyword in.



/*--------------------- 1.5.3 Enumeration "for ... in" ---------------------*/
/*
The keyword in also appears in a different construction, allowing us to enumerate all the fields of an object.

Frankly speaking, this is a much more practical use of it.

Using for ... in, we can go through the properties of an object (with some limitations, which we’ll talk about in the chapter on the configuration of properties).

More precisely – we go through the names of the properties, (i.e. the keys).

Let's display the property names of the contact object.
*/

let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};
for(x in contact) {
    // print property name
    console.log(x);
}

/*
The names of all the properties (keys) of the contact object are assigned to the variable x in turn.

To get to the value of a given field, we use bracket notation (the key is dynamically calculated and placed in the variable, so we cannot use dot notation).
*/

for(x in contact) {
    // print property value 
    console.log(contact[x]);
}

//Finally, if we would like to display the name, type, and value of all the properties, we could write it as follows:

for(x in contact) {
    // print property name, type and value
    console.log(`${x} : ${typeof contact[x]} : ${contact[x]}`);
}


/*--------------------- 1.5.4 The Object.keys method ---------------------*/
/*
Another way to retrieve the names of all the object properties is to use the Object.keys method.

This method returns an array of property names, which we can use in any way we want.

Continuing with the previous example, the following call should return an array ["tel", "email"] to the keys variable.

This array will contain all the keys (property names) of the contact object.
*/

let keys = Object.keys(contact); 
console.log(keys); // -> ["tel", "email"]