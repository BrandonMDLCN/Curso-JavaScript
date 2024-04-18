//Exercise 1: Write a piece of code that will write numbers from 100 to 0 to the console, but in steps of 10; so 100, 90, 80... etc.
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

//Exercise 2: Modify the previous program so that it asks the user for the first and last number it uses instead of 100 and 0 (hint: use the prompt dialog).
//Check if the entered values are correct (that the initial value is greater than the final value).

let texto = "";
let flag = false;

while (flag != true) {
    firstelement = Number(prompt("Please enter number 1"));
    if (isNaN(firstelement)) {
        alert("Please enter a valid number");
        continue;
    }
    while (flag != true) {
        lastelement = Number(prompt("Please enter number 2"));
        if (isNaN(lastelement)) {
            alert("Please enter a valid number");
        }
        else {
            flag = true;
        }
    }
    if (firstelement > lastelement) {
        flag = true;
    }
    else{
        alert("Please enter a number greater than the previous one");
        flag = false;
    }
}

for (let i = firstelement; i >= lastelement; i -= 10) {
    texto += i + "\n";
}
alert(texto);

/*
Exercise 3: There are ten different numbers in the following numbers array:
Write a program that first writes out all these numbers on the console, 
then only those that are even (hint: the remainder of dividing an even number by 2 is equal to 0), 
then only those that are larger than 10 and at the same time smaller than 60.
*/
let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0){
        console.log(numbers[i] + " is even");
    }
}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >=10 && numbers[i] <=60){
        console.log(numbers[i] + " is between 10 and 60");
    }
}

//----------------------------------------------------//
//cisco
for (number of numbers) {
    console.log(number);
}

for (number of numbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}

for (number of numbers) {
    if (number > 10 && number < 60) {
        console.log(number);
    }
}

/*
Exercise 4: Write a program using a loop that will ask the user for the name of the movie (first prompt) and its rating from www.imdb.com (second prompt). 
The program will allow you to enter as many movies as you want into the movies array. 
Each element of the array will be an object, consisting of two fields: title and imdb. 
The input is completed if the user presses Cancel in the prompt dialog. 
Then the program should first print out to the console all movies that have a rating of less than 7, 
then those whose rating is greater than or equal to 7. 

Write the name of the movie and its rating next to each other, e.g.:
*/
let flags = true;
let movies = [];
let movie = {
    title: "",
    rating: 0
}
while (flags) {
    first = prompt("Name of the movie");
    second = prompt("Rating");
    if (first === null || second === null) {
        flags = false;
    }    
    else{
        movies.push({
            title: first,
            rating: second
        });
    }
    console.log(movies);
}

console.log("Rating less than 7");

for (let i = 0; i < movies.length; i++) {
    if (movies[i].rating < 7){
        console.log(`${movies[i].title} (${movies[i].rating})`);
    }
}

//----------------------------------------------------//
//cisco
let moviess = [];
while (true) {
    let title = prompt("Enter movie title");
    let rating = prompt("Enter movie rating (imdb)");

    if (title === null || rating === null) {
        break
    } else {
        moviess.push({
            title: title,
            rating: Number(rating)
        });
    }
}

console.log("All with ratings under 7:");
for (movie of moviess) {
    if (movie.rating < 7) {
        console.log(`${movie.title} (${movie.rating})`);
    }
}

console.log("All with ratings over 7:");
for (movie of moviess) {
    if (movie.rating >= 7) {
        console.log(`${movie.title} (${movie.rating})`);
        break;
    }
}

//Exercice 5: arreglar el codigo, aqui ya lo arregle xd, era nomas hacer el objeto y que lo imprimiera
let vessel = {
    LATITUDE: 40.07288,
LONGITUDE: 154.48535,
COURSE: 285.6,
SPEED: 14.0,
IMO: 9175717, 
NAME: "MARENO"
}

 
for( let key in vessel) { 
    console.log(`${key} -> ${vessel[key]}`); 
}

//Exercise 6: Modify the calculator program that you made in Module 4 Section 2 in such a way that it will work in the loop until the user inputs Q in any of the prompt boxes.
flag = "";
function exit(str){
    if (str === "Q"){
        return true;
    }
}
while(flag != "Q"){
    let number1 = prompt('Please enter a number');
    if(exit(number1)){
        flag = "Q";
        break;
    }
    while (number1 === '' || isNaN(number1)) {
        number1 = prompt('Please enter a valid number');
        if(exit(number1)){
            flag = "Q";
            break;
        }
    }
    if(exit(number1)){
        flag = "Q";
        break;
    }
    let math = prompt('Please enter a simbol');
    if(exit(math)){
        flag = "Q";
        break;
    }
    while(math === '' || math != '+' || math != '-' || math != '/' || math != '*'){
        math = prompt('Please enter a valid simbol');
        if(exit(math)){
            flag = "Q";
            break;
        }
    }
    if(exit(math)){
        flag = "Q";
        break;
    }

    let number2 = prompt('Please enter a number');
    if(exit(number2)){
        flag = "Q";
        break;
    }

    while (number2 === '' || isNaN(number2)) {
        number2 = prompt('Please enter a valid number');
        if(exit(number2)){
            flag = "Q";
            break;
        }
    }
    if(exit(number2)){
        flag = "Q";
        break;
    }
    if (math === '+') {
        alert(+number1 + +number2);
    } else if (math === '-') {

        alert(+number1 - +number2);
    } else if (math === '*') {

        alert(+number1 * +number2);

    } else if (math === '/') {

        alert(+number1 / +number2);

    } else {
        alert('Please enter a valid simbol');
    }
}

//----------------------------------------------------//
//cisco
while (true) {
    let firstNumber = prompt("Enter first number");
    let secondNumber = prompt("Enter second number");
    let operand = prompt("Enter operand (+, -, * or /)");
    let result;

    if (firstNumber === "Q" || secondNumber === "Q" || operand === "Q") {
        break;
    }

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
        switch (operand) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
            default:
                result = "Error: unknown operand";
        }
    } else {
        result = "Error: at least one of the entered values is not a number";
    }
    alert(result);
}