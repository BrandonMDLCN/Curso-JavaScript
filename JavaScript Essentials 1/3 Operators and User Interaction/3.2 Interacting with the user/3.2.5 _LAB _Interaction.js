/*
Let's go back to our contact list. 

After some recent tweaks (i.e. using an array and objects) it is actually starting to look like a list.
Changing data in the list, such as adding a new contact, has to be provided for right away in the program code.

Modify the program to add, at the end of the list, not the contact, which is given in the code, but the one which the user will give during the program run.
Use the prompt method to do this. At the end, display the first and the last contact from the list.
*/

let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];

// write your code here

let name = prompt("What is your name?");
let phone = prompt("What is your phone number?");
let email = prompt("What is your email address?");

contacts.push({
name: name,
phone: phone,
email: email
});

let last = contacts.length - 1;

alert(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
alert(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);


console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);