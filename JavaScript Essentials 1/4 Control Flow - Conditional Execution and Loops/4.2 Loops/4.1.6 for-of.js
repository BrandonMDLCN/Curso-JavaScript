/*
In addition to the regular for loop, there are two specific versions, one of which, for ... of, 
is dedicated for use with arrays (and other iterative structures, which are however beyond the scope of this course). 
In a loop of this type, we do not explicitly specify any conditions or number of iterations, 
as it is performed exactly as many times as there are elements in the indicated array.

Let's come back to our example from summing up numbers from the four-element array.

we use a simple for loop:
*/
let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum); // -> 190


//--------------------------------------------------//
// for ... of is dedicated for use with arrays (and other iterative structures, which are however beyond the scope of this course). 
// In a loop of this type, we do not explicitly specify any conditions or number of iterations, 
// as it is performed exactly as many times as there are elements in the indicated array.

let valuess = [10, 30, 50, 100];
let sums = 0;
for (let numbers of valuess) {
    sums += numbers;
}
console.log(sums); // -> 190

/*
This time, we declare a cities array, which contains objects describing some of the biggest cities in the world.
Each object contains name and population fields. Using the for ... of loop, 
we go through this array and display information about all cities that have more than 20 million inhabitants.
*/
let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "São Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
];
 
for (let city of cities) {
    if (city.population > 20e6 && city.population < 25e6) {
        console.log(`${city.name} (${city.population})`);
    }
}
