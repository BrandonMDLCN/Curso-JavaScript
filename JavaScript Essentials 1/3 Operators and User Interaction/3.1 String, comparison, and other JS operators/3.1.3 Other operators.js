//------------------- 3.1.3 Other operators -------------------//
/*

--------------- typeof ---------------
It is a unary operator, which checks the type of operand
The operator returns a string with the type name, such as "boolean" or "number".
*/
let year = 10191;
console.log(typeof year); // -> number
console.log(typeof false); // -> boolean


/*
--------------- instanceof ---------------
It is a binary operator that checks whether an object (left operand) is of some type (right operand).
Depending on the test result, it returns true or false.
*/
let names = ["Patti", "Bob"];
let name = names[0];
console.log(names instanceof Array); // -> true
console.log(name instanceof Array); // -> false

/*
--------------- delete ---------------
It allows you to delete a selected field of the object whose name is indicated with an operand.
*/
let user = {
    name: "Alice",
    age: 38
};
console.log(user.age); // -> 38
delete user.age;
console.log(user.age); // -> undefined

/*
--------------- ternary ---------------
it is the only operator using three operands.
It is a conditional operator.

Based on the value of the first operand (true or false), the value of the second or third operand, respectively, is returned.

This operator is most often used to place one of the two values in the variable depending on a certain condition.
The three operands are separated from each other by ? (the first from the second) and : (the second from the third).
*/
console.log(true ? "Alice" : "Bob"); // -> Alice
console.log(false ? "Alice" : "Bob"); // -> Bob

/*
Each of these operands can be an expression that must be calculated.
The result of the comparison will be false, which will be used by the conditional (ternary) operator.
*/
let named = 1 > 2 ? "Alice" : "Bob";
console.log(named); // -> Bob
