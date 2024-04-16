/*
Let's go back to our contact list. 

During the last modification of the program with the contact list, 
we allow the user to add a new contact with the data entered by the user while the program is executing. 
Let's go a step further – try to modify the program so that the user has a choice of what they want to do with the list. 
They will have a choice of:

showing the first contact (first)
showing the last contact (last)
adding a new contact (new)

When adding a new contact, check if the user has entered all the necessary data. 
If at least one of the three values is missing (name, phone, or email) don't add the contact.
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
alert("Option 1: show the first contact \nOption 2: show the last contact \nOption 3: add a new contact \nOption 4: Salir");
let flag = 0;
while (flag != "4") {
    let option = prompt('Please enter a option');
    switch(option){
        case "1":
            showContact();
            break;
        case "2":
            showLastContact();
            break;
        case "3":
            addContact();
            break;
        case "4":
            alert("Good bye");
            flag = '4';
            break;
        default:
            alert("Invalid option");
            break;
    }
}
function addContact(){
    let name = prompt("What is your name?");
    let phone = prompt("What is your phone number?");
    let email = prompt("What is your email address?");

    contacts.push({
    name: name,
    phone: phone,
    email: email
    });
}

function showContact(){
    alert(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
}

function showLastContact(){
    let last = contacts.length - 1;

    alert(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
}

