/*
There is also a version of the for loop that enables us to walk through object fields. 
This is a for ... in construction. 
It iterates through all fields of the indicated object, placing the names of these fields (or keys) in the variable. 
In the example, we use an object containing data about a user:
*/
let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};
 
for (let key in user) {
    console.log(key); // -> name, surname, age, email
};

//a literal or a variable containing that name.
console.log(user.name); // -> Calvin
//console.log(user[name]); // -> Calvin

//Using bracket notation, we improve our example by displaying not only the keys, but also their assigned values.
for (let key in user) {
    console.log(`${key} -> ${user[key]}`);
};
