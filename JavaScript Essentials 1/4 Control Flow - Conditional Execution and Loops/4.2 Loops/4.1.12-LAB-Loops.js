/*
We can improve our contact list program a bit by using loops. 
You can now try to display not only the first or last contact, but all contacts in the list, regardless of their number.

Additionally, try to enclose the whole program in a loop so that the user is repeatedly asked what they want to do. 
The user can choose to:

display the first contact (first)
display the last contact (last)
display all contacts (all)
add a new contact (new)
exit the program (quit)

After executing the selected action, the program will give the opportunity to choose again. 
The program should end the actions only after the user gives a specified command, for example quit.
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
    
    
function addContact(){
    let name = prompt("What is your name?");
    let phone = prompt("What is your phone number?");
    let email = prompt("What is your email address?");
    
    contacts.push(
        {
        name: name,
        phone: phone,
        email: email
        }
    );
}
    
function showContact(){
    alert(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
}
    
function showLastContact(){
    let last = contacts.length - 1;
    
    alert(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
}

function showAllContacts(){
    let all = '';
    for (let i = 0; i < contacts.length; i++) {
        all += contacts[i].name + ' / ' + contacts[i].phone + ' / ' + contacts[i].email + '\n';
    }    
    alert(all);
}
    
let flag = 0;

while (flag != "5") {
    alert("Option 1: show the first contact \nOption 2: show the last contact \nOption 3: display all contacts \nOption 4: add a new contact \nOption 5: Salir");
    let option = prompt('Please enter a option');
    switch(option){
        case "1":
            showContact();
            break;
        case "2":
            showLastContact();
            break;
        case "3":
            showAllContacts();
            break;
        case "4":
            addContact();
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
    