/* 
Scenario
Create a Users class that will allow you to create objects containing a collection of individual users (users are created using the User class from the previous task).

To create a collection, use a Map class (the key should be the email address, and the value should be the User object). The class should provide the following methods:

add – add a single user, arguments are name, surname and email;
delete - remove the user from the collection (the argument is the email)
get - retrieve a single user from the collection (the argument is the email)
getAll - retrieve all users from the collection (the argument is the name of the field by which the array is to be sorted: name, surname, or email
Test your solution using the following code:

let users = new Users();
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Xxxx", "Oooo", "dddd@gmail.com");
console.log(users.get("dddd@gmail.com"));
console.log(users.getAll("name").map(u => u.name));
console.log(users.getAll("surname").map(u => u.surname));
console.log(users.getAll("email").map(u => u.email));
*/
class Users{
    constructor(name, surname, email){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.collection = new Map();
    }

    add(name, surname, email) {
        this.collection.set(email,{name,surname});
        console.log(this.collection);
    }

    delete(email) {
        return this.collection.delete(email);
    }

    get (email) {
        return this.collection.get(email);
    }

    getAll(sortBy){
        return [...this.collection].sort((u1,u2) => u1[1][sortBy] > u2[1][sortBy] ? 1 : -1).map(u => u[1]);
    }
}




let users = new Users();
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Xxxx", "Oooo", "dddd@gmail.com");
console.log(users.get("dddd@gmail.com"));
console.log(users.getAll("name").map(u => u.name));
console.log(users.getAll("surname").map(u => u.surname));
console.log(users.getAll("email").map(u => u.email));

/*-------------------------------------------------------------------------------------------------------------*/

class Users0 {
    #users;

    constructor() {
        this.#users = new Map();
    }

    add(name, surname, email) {
        try{
            this.#users.set(email, new User(name, surname, email));
        } catch(e) {
            console.log(e.message);
        }
    }

    delete(email) {
        return this.#users.delete(email);
    }

    get(email) {
        return this.#users.get(email);
    }

    getAll(sortBy) { //name,surname,email
        return [...this.#users].sort((u1,u2) => u1[1][sortBy] > u2[1][sortBy] ? 1 : -1).map(u => u[1]);
    }
}

let users0 = new Users();
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Xxxx", "Oooo", "dddd@gmail.com");
console.log(users.get("dddd@gmail.com"));
console.log(users.getAll("name").map(u => u.name));
console.log(users.getAll("surname").map(u => u.surname));
console.log(users.getAll("email").map(u => u.email));
