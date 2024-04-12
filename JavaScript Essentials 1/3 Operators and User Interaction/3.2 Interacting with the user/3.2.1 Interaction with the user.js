//------------------- 3.2.1 Interaction with the user -------------------//
/*
The user enters data, makes choices, and confirms the options given by the program.

Thanks to this interaction, the program can start to use the data that is provided to it by the user during its execution.
Secondly, the program can perform certain actions conditionally, the user influences not only the data, but also its execution.

In the case of JavaScript, interaction with the user is quite a complex topic.
Do you remember that we can write programs in this language both for use in the browser (client-side) 
and to perform certain actions on the server-side?

JavaScript programs written with node.js for servers usually do not require such an interaction.
We run them from the console level, often without a graphic environment.


Most often, the user gives certain options (e.g. path data) 
to the program being run in this way in the form of a configuration file and/or as call arguments.
The data to run the program are then taken from disk files, databases, network services, etc.
It is very rare for such console programs to need to enter some data while the program is running.

If it is necessary, it is indicated by the appearance of appropriate information on the console, on which you need to enter some data.

//////////////////////////////
This is definitely different for client-side applications.
In most cases, they require continuous interaction between the user and the program.
Using them, we can click on buttons, enter values into forms, select data from drop-down lists, and so on.
The problem is that practically all elements used for this purpose are HTML components.

Using them may not be very difficult, but it does require at least a thorough understanding of the basics of the DOM (Document Object Model) 
used in web pages, and the basics of HTML itself.

An example of an HTML page that uses two elements for interaction, for which JavaScript code is used, is shown below:
*/
// archivo index.html

//<!DOCTYPE html>
<html>
     <head></head>
     <body>
      <input id="myId" type="text"></input>
      <button onClick="console.log(document.getElementById('myId').value)">Get Text</button>
     </body>
</html>

/*
The <input> element is an input field where you can enter any text.
we’ve given this element the myId identifier.

The <button> element, as you can guess, corresponds to ... a button
Using the onClick attribute, we have indicated that if the button is clicked, a piece of JavaScript code is to be run.

In this code, we refer to the document object (a fragment of the DOM model), which represents our website.
We search for the element with the myId identifier, retrieve its value (i.e. the text entered) and print the result on the console.


There is another solution. Please note that it is not used in modern web applications, 
but it allows you to easily give the user the opportunity to enter data or make certain decisions.

We will use it in this course as a dummy for normal communication, 
rather than as an element that you will find useful in real programming. 
The solution is to use dialog boxes.
*/