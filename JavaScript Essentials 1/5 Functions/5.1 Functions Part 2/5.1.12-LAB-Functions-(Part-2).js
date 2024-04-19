/*
Give the user the option to select a sort action from the list. 
When this option is selected, the user should be able to specify whether they want to sort the contacts 
by name, phone, or email.
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
    
function sortContact(contacts, sort){
    if (contacts instanceof Array && sort!= '' && sort!= null){
        switch(sort){
            case "Name": 
            case "1":
                contacts.sort((a, b) => a.name.localeCompare(b.name));
                showAllContacts(contacts);
                break;
            case "Phone":
            case "2":
                contacts.sort((a, b) => a.phone.localeCompare(b.phone));
                showAllContacts(contacts);
                break;
            case "Email":
            case "3":
                contacts.sort((a, b) => a.email.localeCompare(b.email));
                showAllContacts(contacts);
                break;
            default:
                alert("Invalid option");
                break;
        }
    }
    else{
        alert("ingresa al menos un dato");
    }
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
    alert("Option 1: show a contact \nOption 2: show contact sorted \nOption 3: display all contacts \nOption 4: add a new contact \nOption 5: Salir");
    let option = prompt('Please enter a option');
    switch(option){
        case "1":
            let indiceContacto = prompt('Enter a indice contact');
            showContact(contacts, indiceContacto);
            break;
        case "2":
            let sort = prompt("Sort by: \n-Name \n-Phone \n-Email");
            sortContact(contacts, sort);
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
    