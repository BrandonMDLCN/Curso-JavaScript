/*--------------------- 4.3.3 Callback functions ---------------------*/

/* 
Let's look at another example, this time involving a real-world scenario.

As we mentioned earlier, a typical case of asynchronous execution is retrieving data from the server.

This time we use a callback function.


We will use the built-in XMLHttpRequest object for this purpose.

To create it, we use a constructor of the same name, called without parameters.

This object allows us to send HTTP requests and retrieve data from servers.

The technical details of the HTTP and HTTPS protocols are not something we cover in this course, 
so we are limiting ourselves to providing only the most basic information necessary to understand and execute the example.


The XMLHttpRequest object itself allows us to retrieve any type of data from the servers, not only in XML format. 
It has a large set of methods and properties; these details can be checked (e.g. on the MDN page), but for basic communication the following are sufficient:

    open – a method used for initializing the XMLHttpRequest object;

    send – a method used for sending the request; by default, it is asynchronous 
    (i.e. it ends immediately after sending the request to the server without waiting for the response)
    
    addEventListener – a method used for adding the event handler related to the request; as parameters, we give the event type (e.g. "load"). 
    The event is generated when the server sends a response to the request and the function to be called as a reaction to the event;
    
    onload – a property to which we can assign the function that will be called in response to the "load" event; 
    this property can be used instead of calling addEventListener ("load", ...)
    
    status – a property which contains the response status according to the HTTP protocol 
    (e.g. the value 200 means that the response is correct, and 404 means that the server cannot find the file)
    
    responseText – a property which contains the server response (data) in the form of text; 
    both responseText and status can be read only after we receive the response from the server, which we will be informed of via the "load" event.
    
How can we use this object in practice?

In the following example, we’ll follow step by step the process of creating the request object, initializing it, sending a request, and interpreting the server response.

We assume that in the local domain on port 3000 (hence the reference to http://localhost:3000) a service was made available, whose task is to square the given number.

The service has been implemented in such a way that the answer is generated with a random delay (from 1 to 2 seconds).

The actual squaring is of course done much faster by the server, and the delay is added to simulate normal communication (e.g. with the database), 
which can potentially take a bit more time.

Let's look at an example:
*/

const valuee = 200;
let request = new XMLHttpRequest();
let responseLoaded = () => {
    if (request.status === 200) {
        const resp = JSON.parse(request.responseText);
        console.log(`server: ${valuee} * ${valuee} = ${resp.square} (${resp.time}ms)`);
    }
}
console.log(request.status);
request.onload = responseLoaded;
request.open('GET', `http://localhost:3000/json?value=${valuee}`);
request.send();
console.log(`browser: ${valuee} * ${valuee} = ${valuee * valuee}`);

/*
Just from glancing at it, you’ve probably already located the methods and properties we’re talking about.

The code starts with the declaration and initialization of the variable value, which we send to the server to square it.

We then call the XMLHttpRequest constructor (not forgetting to use the new keyword) and thus create an object whose reference is placed in the request variable.

From now on we will operate on this variable.

The next declaration, responseLoaded, is an arrow function to be called when the response from the server arrives (we'll discuss the function itself in a moment).

Let’s begin the configuration of our request.

First of all, we substitute the previously defined responseLoaded function to the onload property. From now on, 
if the "load" event occurs (sent to our object after receiving data from the server), the function is called. 
In the next step we call the open method, passing to it two parameters.

The first one is the HTTP method chosen for communication (in this case we use the simplest one, 'GET') and the URL of the service from which we are trying to obtain data. 
Note that we also include a value parameter with the value of 200 in the address. 
This is passed to the server in order to raise it to a power (placing parameters in the URL is typical for the 'GET' method).


  Note  

A URL consists of several sections, each with its own specific meaning and position in the address. 
We use appropriate characters to separate the parts of the address (e.g. the hostname from the port number is separated by a colon). 
You will encounter URLs on a daily basis, typing them in browsers 
(although sometimes, not entirely unknowingly, omitting some parts, which are automatically completed by the browser). A basic address will look like this:

scheme://host:port/path?query

Scheme is the choice of protocol, usually http or https. Host is the server's domain name or IP address. 
Port allows you to select one of many services that could potentially be available under the same domain name 
– this parameter is omitted when referring to the default port for a given protocol (e.g., port 80 for the http protocol). 
The path is internal information for the server; it knows what resources we want to access. 
The last element shown here, query, allows you to pass to the server the parameters to be used when generating the response.

The address used in the example:

http://localhost:3000/json?value=200

means that we communicate according to the http scheme (protocol). We are looking for a service on port 3000. 
We then pass the path /json and a parameter named value with the value 200 to the server.

After calling the open method correctly, the request object is already configured and there is nothing left to do but to send the request to the server.

For this purpose, we call the send method, which finishes its action immediately after sending the request without waiting for the server response.

Then another command is executed in which, without waiting for the server's response, 
we calculate the value of the power locally in the browser and display it in the console (of course, with the information that the result was generated in the browser).

If it was a classic synchronous program, it would end here.

But the program is definitely asynchronous. 
After some time (a simulated server delay from 1 to 2 seconds) another message will appear in the console, this time containing the value calculated by the server.

Output
Browser: 200 * 200 = 40000
server: 200 * 200 = 40000 (1577ms)

What’s actually happening?

Before sending the request, we assign the responseLoaded function to the onload property.

After receiving the request, the server sends back a response, but with a delay.

When the response appears, the "load" event is generated, and thus the responseLoaded function is called (asynchronously).

p>Let's take a look at the body of this function.
In the first step, we check the value of the status property.

Since the function is called, we know that the server has responded.

In the example, we limit ourselves to the simplest interpretation – we check if the status is equal to 200, 
which in the http protocol means that everything has gone smoothly on the server side.

Then we retrieve proper data passed by the server (the responseText field).

In order to correctly interpret the received data, we must know in what format the server passed them to us.

In our example, we assume that they are sent in JSON format (so we call the parser, changing the received JSON character string to a JavaScript object).

Additionally, we know that the server has encoded an object consisting of two fields in this format:

square (i.e. the result we expect)
and time (i.e. the delay time in generating the result).
The last action performed in the function is to display the result received from the server along with the delay time (also received from the server).


In our example, the execution of an asynchronous code fragment is initiated by the occurrence of the "load" event (i.e. by the appearance of the server response).

Interestingly, we can add that the XMLHttpRequest object also allows synchronous communication.

If in our example we replace the line:
*/

request.open('GET', `http://localhost:3000/json?value=${value}`);

/*
with:
*/

request.open('GET', `http://localhost:3000/json?value=${value}`, false);

/*
then, as a result of the execution of the program, messages should appear in the console in a different order than the previous one:

Output
server: 200 * 200 = 40000 (1482ms)
browser: 200 * 200 = 40000

This time the send method waits to terminate until the server response appears.

However, this type of call can be treated as a curiosity, 
because in fact it has a very negative impact on the effectiveness of the application and its reception by the user 
(most browsers in such a situation will display a warning about an obsolete method).

We have already mentioned the addEventListener method.

The next step is to try to use it in our example.

It doesn’t change the functionality of the application in any way – we only check how we can bind the function to a certain event (in this case to the "load" event).

In the simplest case it is limited to changing one line of code:

*/
request.onload = responseLoaded;

/*
with:
*/

request.addEventListener("load", responseLoaded);

/*
As you can see, the method takes two parameters: the name of the event where the reaction takes place and the function, which defines this reaction.

In practice, the second parameter of the addEventListener method call is usually the whole definition of the anonymous function.

So, our example would look as follows – look at the code below:
*/

const value = 200;
let request = new XMLHttpRequest();
request.addEventListener("load", () => {
    if (request.status === 200) {
        const resp = JSON.parse(request.responseText);
        console.log(`server: ${value} * ${value} = ${resp.square} (${resp.time}ms)`);
    }
});
request.open('GET', `http://localhost:3000/json?value=${value}`);
request.send();
console.log(`browser: ${value} * ${value} = ${value * value}`);
