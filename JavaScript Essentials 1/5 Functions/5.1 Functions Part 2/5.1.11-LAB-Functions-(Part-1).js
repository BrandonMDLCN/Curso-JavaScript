/*
Our program has grown quite a bit, making it a little hard to read. 
It is especially visible in the switch instruction, where most of the logic is enclosed. 
Try to organize your program code by using functions. Define and call three functions in the appropriate places:

showContact: the function should take two arguments; the first is the list of contacts, 
and the second is the index number of the contact to display; inside the function, 
check if the correct arguments are passed, that is, if the contacts are an array 
(use the instanceofArray construction for this);

showAllContacts: the function should take one argument, the list of contacts; inside the function, 
check if the given argument is an array;

addNewContact: the function should take four arguments, a contact list and the data of the new contact, 
that is: name, phone, and number; before adding a new contact, 
check if the passed argument is an array and if the new contact data have any value.
*/

let contacts = [
    {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, 
    {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, 
    {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }
];
    
    
function addContact(contacts, name, phone, email){
    if (contacts instanceof Array && name != '' && phone != '' && email != '' ){
        contacts.push(
            {
            name: name,
            phone: phone,
            email: email
            }
        );
    }
    else{
            alert("ingresa al menos un dato");
        }
}
    
function showContact(contacts, indice){
    if (contacts instanceof Array && indice < contacts.length){
        alert(`${contacts[indice].name} / ${contacts[indice].phone} / ${contacts[indice].email}`);
    }
    else{
        alert("Contacto no valido / existente");
    }
}
    
function showLastContact(){
    let last = contacts.length - 1;
    
    alert(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
}

function showAllContacts(contacts){
    if (contacts instanceof Array){
        let all = '';
        for (let i = 0; i < contacts.length; i++) {
            all += contacts[i].name + ' / ' + contacts[i].phone + ' / ' + contacts[i].email + '\n';
        }    
        alert(all);
    }
}
    
let flag = 0;

while (flag != "5") {
    alert("Option 1: show the first contact \nOption 2: show the last contact \nOption 3: display all contacts \nOption 4: add a new contact \nOption 5: Salir");
    let option = prompt('Please enter a option');
    switch(option){
        case "1":
            let indiceContacto = prompt('Enter a indice contact');
            showContact(contacts, indiceContacto);
            break;
        case "2":
            showLastContact();
            break;
        case "3":
            showAllContacts(contacts);
            break;
        case "4":
            let name = prompt("What is your name?");
            let phone = prompt("What is your phone number?");
            let email = prompt("What is your email address?");
            addContact(contacts, name, phone, email);
            break;
        case "5":
            alert("Good bye");
            flag = '5';
            break;
        default:
            alert("Invalid option");
            break;
    }
}
    