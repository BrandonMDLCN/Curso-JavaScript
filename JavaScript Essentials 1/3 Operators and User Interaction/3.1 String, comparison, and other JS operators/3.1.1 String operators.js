//------------------- 3.1.1 String operators -------------------//
/*
The only operator in this group is the concatenation +.
This operator will convert everything to a String if any of the operands is a String type. 
Finally, it will create a new character string, attaching the right operand at the end of the left operand.
*/
let greetings = "Hi";
console.log(greetings + " " + "Alice"); // -> Hi Alice
 
let sentence = "Happy New Year ";
let newSentence = sentence + 10191;
 
console.log(newSentence); // -> Happy New Year 10191
console.log(typeof newSentence); // -> string

//------------------- Compound Assignment Operators -------------------//
let sentences = "Happy New ";
sentences += "Year ";
sentences += 10191;
console.log(sentences); // -> Happy New Year 10191
