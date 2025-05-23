/*--------------------- 1.3.4 Adding a new property ---------------------*/
/*
Objects can change dynamically during their lifetime.

The changes concern not only the values stored in specific fields, but also all the properties that we can add or delete, 
and the type of data placed in them that we can change.

Let's go back to the example with a contact from the address book.
*/

let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};

//We’ll add the new fields firstName and lastName to the existing object, and display the values of the selected properties.

contact.firstName = "Ronald";
contact.lastName = "Murphy";
console.log(contact.tel);   // -> 207-662-5412
console.log(contact.firstName);     // -> Ronald

/*
By the way, try to display a non-existent property, such as a notes. Note that a non-existent property of an object is treated as undefined and not, for example, as null.
*/

console.log(contact.notes); // -> Undefined



/*--------------------- 1.3.5 Modifying a property ---------------------*/
/*
By default, there are no restrictions on modifying the values placed in object properties 
(we’ll talk about non-writable properties in the chapter on configuring object properties).

Thus, we can assign a new value of any type to an existing object property at any time – we are not limited by the previous value type.

Let's use the contact example again.
*/

let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};

/*
After creating a contact, it turns out that the person placed in it has two email addresses.

At this point, it would be easiest to place an array of addresses in the email field, overwriting the old value.
*/

contact.email = ["RonaldSMurphy@freepost.org", "rsmurphy@briazz.com" ];

/*
However, if we know that one of these addresses is private and the other is business, 
it would be more logical to save them as an object – this will later allow us to easily distinguish the addresses by their "type".

Let’s overwrite the email field again.
*/

contact.email = {
    private: "RonaldSMurphy@freepost.org",
    work: "rsmurphy@briazz.com" 
};
console.log(contact.email.work);

/*--------------------- 1.3.6 Deleting a property ---------------------*/
/*
The ability to manipulate objects would be incomplete if we were not able to remove a property.

We use the keyword delete for this.

We use it to indicate the property that is to disappear from the object.

For example, a person from our contact resigns from work and his / her email is no longer valid.

So, we modify the object by removing an unnecessary field from it.

Look at the code below:
*/

delete contact.email.work;
console.log(contact.email.work); // -> Undefined
console.log(contact.email.private); // -> RonaldSMurphy@freepost.org
