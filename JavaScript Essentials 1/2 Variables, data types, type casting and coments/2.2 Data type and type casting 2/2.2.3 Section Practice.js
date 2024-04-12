/*------------------------- Objects -------------------------*/

//Create an object that describes a train ticket and store it in the ticket variable.

traint = {
    from: "Culiacán",
    to: "100 km",
    price: 500
};

console.log(traint.from); // -> Culiacán
console.log(traint.to); // -> 100 km
console.log(traint.price); // -> 500
/*---------------------------------------------------------------------*/
let ticket = { 
    from: "Berlin", 
    to: "Potsdam", 
    price: 11 }; 

console.log(`Ticket from: ${ticket.from}`); 
console.log(`Ticket to: ${ticket.to}`); 
console.log(`Ticket price: ${ticket.price}`);

//Declare an empty object and save it to a person variable.
let persona = {};
persona.name = "John";
persona.surname = "Johnson";
persona["age"]=32;

console.log("Person name: "+persona.name);
console.log("Person surname: "+persona.surname);
console.log("Person age: "+persona.age);
/*---------------------------------------------------------------------*/
let person = {}; 
person.name = "Mary"; 
person.surname = "Stuart"; 
console.log(`${person.name} ${person.surname}`);

/*------------------------- Arrays -------------------------*/

//Create an array of three objects representing the books. Each object must have the following properties: title, author, pages.

let libros = [
    {
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        pages: 460
    },
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        pages: 254
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        pages: 352
    }
];
/*---------------------------------------------------------------------*/
let books = [
    { 
        title: "Speaking JavaScript", 
        author: "Axel Rauschmayer", 
        pages: 460 
    }, 
    { 
        title: "Programming JavaScript Applications", 
        author: "Eric Elliot", 
        pages: 254 
    }, 
    { 
        title: "Understanding ECMAScript 6", 
        author: "Nicholas C. Zakas", 
        pages: 352 
    } 
];

//Add a new book to the collection
//Display the length of the array and, in turn, all the book names in the collection.

libronuevo = {
    title: "Learning JavaScript Design Patterns", 
    author: "Addy Osmani", 
    pages: 254 
}
books.push(libronuevo);
console.log(books);
for (let i = 0; i < books.length; i++) {
    console.log(`Title: ${books[i].title}`);
}
/*---------------------------------------------------------------------*/
let newBook = { 
    title: "Learning JavaScript Design Patterns", 
    author: "Addy Osmani", 
    pages: 254 
}; 
books.push(newBook); 
console.log(books.length); 
console.log(books[0].title); 
console.log(books[1].title); 
console.log(books[2].title); 
console.log(books[3].title);

//Use the slice command to copy the last two books to the new array.

let ultimos = books.slice(-2);

//remove first book, Display the length of the array and all the names of the books from the collection in turn.

console.log(books.length);
books.shift();
console.log(books.length);
for (let i = 0; i < books.length; i++) {
    console.log(`Title: ${books[i].title}`);
}
/*---------------------------------------------------------------------*/
books.shift(); 
console.log(books.length); 
console.log(books[0].title); 
console.log(books[1].title); 
console.log(books[2].title);

//
let suma = 0;
for (let i = 0; i < books.length; i++) {
    suma = suma + books[i].pages;
}
console.log(suma);
/*---------------------------------------------------------------------*/
let sum = books[0].pages + books[1].pages + books[2].pages; 
console.log(`pages: ${sum}`);