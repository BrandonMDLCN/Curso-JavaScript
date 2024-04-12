/*
Comments are a common thing in programming.
"Commenting" may not be a key programming technique (if you can call it a technique), but it allows you to improve your work with the code,
among other things by making it more readable.
Comments are just plain text, totally ignored by the JavaScript interpreter

In JavaScript, we have two types of comments
They are called single-line and multi-line comments.

#------------------- Single-line comments -------------------#
It uses a double slash character at the start of the comment that spans to the end of the line.
Any code placed to the right of the double slash will be ignored by the interpreter
*/

//  This  is  a  single-line  comment
let  x  =  42;  //  This  is  also  a  single  line  comment,  although  the  part  before  the  double  slash  is  proper  code  and  will  be  executed
//  This  line  and  the  next  one  will  be  ignored
//  x  =  8;
console.log(x);  //  ->  42
// AudioBufferasfd
// asfdas
// dfasd
// fasdf


/*------------------- 2.3.4 SECTION PRACTICE -------------------*/
/*
Task: There’s a code that is currently not working. Try to fix it using only comments. 
Try, if possible, to use the keyboard shortcuts in your editor for this purpose.
*/
"use  strict";  
   
const  prefix  =  "username_";  
   
let  userName  =  "Jack";  
//const  userName  =  "Adam";  
   
let  prefixedUserName;  
//const  prefixedUserName;  
   
userName  =  "John";  
prefixedUserName  =  prefix  +  userName;  
   
console.log(prefixedUserName  /*+  prefixedUserName2*/);  
//console.log(prefixedUserName2);

