//Write a script that will ask the user to input a number.
//Display the message "Bingo!" when the number is greater than 90 but less than 110, otherwise display the message: "Miss". Use the if statement.
/*
let number = prompt('Please enter a number');

a = number > 90 && number < 100 ? "Bingo!" : "Miss";

alert(a);
*/

/*
Exercise 3: Write a simple calculator application. Ask the user for the following input, one by one: 
two numbers and a character representing a mathematical operation, one of "+", "-", "*", "/". 
If the user input is valid, calculate the result and show it to the user. If the user input is invalid, 
display a message that informs the user that an error has occurred.
*/
let number1 = prompt('Please enter a number');
while (number1 === '' || isNaN(number1)) {
    number1 = prompt('Please enter a valid number');
}

let math = prompt('Please enter a simbol');

let number2 = prompt('Please enter a number');
while (number2 === '' || isNaN(number2)) {
    number2 = prompt('Please enter a valid number');
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