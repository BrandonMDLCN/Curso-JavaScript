/*--------------------- 4.3.4 Promises ---------------------*/

/* 
The use of callback functions is, as you can see, relatively simple, but it has its drawbacks.

The main issue is low code readability in cases where we’re waiting for many consecutive events to happen and start nesting callback functions that handle them.

In such situations, using promises can help us.


What is a promise?

To quote The Mozilla Developer Network (MDN)1:

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
This means, more or less, that it is an object which changes its state as a result of performing some asynchronous action.

Promises are used to support asynchronous operations at the interface between the producer and consumer.

The producer produces data, making it available in the form of a promise, and the consumer, applying this promise, tries to use the data.

1The Promise object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

https://www.netacad.com/content/jsa/1.0/courses/content/m4/en-US/assets/77cb6a0585f34a4616af57cc734c9afc50fc2511.gif

We create a promise using the Promise constructor, to which we pass a function called executor as an argument.

This function is run at the time of creating the promise and contains all the logic associated with the "production" of data, such as downloading it from the server.

The executor takes two arguments, resolve and reject, which represent callback functions provided by JavaScript (we do not write these functions ourselves).

We call the resolve function in the executor body when the data is produced, and the reject function when an error occurs.
*/

let pp = new Promise((resolve, reject) => {
    resolve(5);
});

/*
In our first example, we create a rather unusual promise p in which the executor immediately calls the resolve function.

The result is a promise from which the consumer can immediately read the data (in the example, the value 5).

Each promise contains two properties: state and result.

The first property defines whether the promise is initialized and waiting for the right result (state: pending) 
or maybe the operation has been performed and the waiting is over (state: fulfilled in case of success or state: rejected in case of an error).

In our example, calling resolve(5) causes the produced promise to immediately be in the fulfilled state.

The result property initially has the value undefined, and then takes the value passed to resolve, which is 5 in the example.
*/

let ppp = new Promise((resolve, reject) => {
    reject(new Error('!!!'));
});

/*
This time we have created a promise p that will immediately reach the rejected state.

The result field contains the error object we generate, which we pass as an argument to the reject function.

Let's look at a slightly more elaborate example.

Take a look at the code:
*/

let ppppp = new Promise((resolve, reject) => {
    let value = Math.floor(Math.random() * 4);
    if (value === 0) {
        reject(new Error('!!!'));
    } else {
        setTimeout(() => {
            resolve(value);
        }, value * 1000);
    }
});

/*
In the example, the executor draws a number and checks if it is equal to zero.

If so, the reject function is called immediately, to which the error generated, especially for this occasion, is passed.

Otherwise, we call the setTimeout method.

Thanks to this method, the resolve function is called, although with a slight delay (a second or more, depending on the drawn value).

We pass the drawn value to this function.

The change of the promise state from pending to rejected or fulfilled is final; 
it is not possible to return to a pending state or change it (e.g. from rejected to fulfilled).

https://www.netacad.com/content/jsa/1.0/courses/content/m4/en-US/assets/f67d97fbbad7995ee1cc8f9dbc4434d7fe9f12d4.png

How can we consume the data that will be placed in the promise?

The then method of the promise object is used for this.

It takes two functions as arguments. The first will be called if the state of the promise changes to fulfilled, 
and the second if it changes to rejected (these functions have nothing to do with the resolve and reject functions used when creating a promise).

Let's complement our previous example with a few more lines of code.

Take a look at the code below:
*/

let p0 = new Promise((resolve, reject) => {
    let value = Math.floor(Math.random() * 4);
    if (value === 0) {
        reject(new Error('!!!'));
    } else {
        setTimeout(() => {
            resolve(value);
        }, value * 1000);
    }
});
let handleResolved = function (value) {
    console.log(value);
}
let handleRejected = function (error) {
    console.log(`Error: ${error.message}`);
}
p0.then(handleResolved, handleRejected);
console.log('end');

/*
We have created two functions, handleResolved, and handleRejected, which only display the received arguments in the console.

The functions are passed to the then method of the p object.

At the end we write an auxiliary 'end' text to the console.

The effect of executing the code, if the number 2 was drawn, would look as follows:

Output
end
2

The p promise remains in the pending state for about two seconds after its creation 
(i.e. during the call of the p.then method and during the display of the control message 'end' on the console).

After two seconds, the state of the object changes from pending to fulfilled as a result of a delayed start to the resolve function.

And the change of the object's state entailes calling the handleResolved function, because this is what we wanted when using the then method.

Note that the handleResolved function receives the argument that is passed to the resolve call when the promise is created 
(the produced data is passed to resolve, and handleResolve consumes it).

Run the example several times, until the value 0 is drawn and handleRejected is called – what appears in the console?

As we have already shown, we pass two functions as arguments to the then method by default.

But it is also possible to call it with only one function:

calling then(fn) will mean that we are not interested in performing any actions in case of an error 
(transition of the promise to the rejected state); the fn function will be called when the promise reaches the fulfilled state;

calling then(null, fn) means that we wait only for the error to occur 
(a reaction to the transition to the rejected state, or no reaction to the transition to the fulfilled state).

Instead of then(null, fn) we can use the catch(fn) method, which reacts only when an error occurs.

We also have the finally method: it is always called after the promise state changes, no matter if it is fulfilled or rejected.

This function returns the original promise, so we can combine it with the catch and then calls.

Let's look at some examples of using these methods:
*/

let p1 = new Promise (function(resolve, reject) {
    setTimeout(() => resolve(5), 1000);
});
p1.then(v => console.log(v)).finally(() => console.log('promise is settled'));

/*
One second after running the script (a delay called by setTimeout) the functions passed to then and to finally will be called. As a result, the console will display:

Output
5
promise is settled

Because finally returns the original promise, it can be called either after or before then (it just depends on what order of calls you want to get).
*/

let p2 = new Promise (function(resolve, reject) {
    setTimeout(() => resolve(5), 1000);
});
p2.finally(() => console.log('promise is settled')).then(v => console.log(v));

/*
This time the console will feature:

Output
promise is settled
5

Let's change the executor function slightly, so that after a second it will call reject rather than resolve.
*/

let p3 = new Promise (function(resolve, reject) {
    setTimeout(() => reject('err'), 1000);
});
p3.finally(() => console.log('promise is settled')).then(v => console.log(v), e => console.log(e));

/*
As expected, the function from finally will run first, then the second function from the then method, handling the error:

e => console.log(e));

Output
promise is settled
err

In place of then insert catch. We’re not interested in reacting to a correct change of state of the promise.

We only want to react to an error.
*/

let p4 = new Promise (function(resolve, reject) {
    setTimeout(() => reject('err'), 1000);
});
p4.finally(() => console.log('promise is settled')).catch( e => console.log(e));

/*
Since reject is called in the executor after one second, both the function passed to finally and the function passed to catch are run when the promise state changes.

Output
promise is settled
err

We leave the consumer code unchanged (finally and catch), but in the executor we call resolve instead of reject, forcing the promise state to change to fulfilled.
*/

let p5 = new Promise (function(resolve, reject) {
    setTimeout(() => resolve(5), 1000);
});
p5.finally(() => console.log('promise is settled')).catch( e => console.log(e));

/*
The consumer has not called the then method, so it is not prepared to receive data from a correctly resolved promise.

As a result, the only function from the finally method is called:

Output
promise is settled

We can, of course, combine the calling of all methods:
*/

let p6 = new Promise (function(resolve, reject) {
    setTimeout(() => resolve(5), 1000);
});
p6.finally(() => console.log('promise is settled')).then(v => console.log(v)).catch( e => console.log(e));

/*
We probably don’t need to explain the effect of the action any further, because in this case it will appear in the console:

Output
promise is settled
5

It is possible to call the then method (and other methods of the promise object) multiple times, but the effect we get this way is useless, 
and it’s hard to find any use for it.
*/

let p7 = new Promise (function(resolve, reject) {
    setTimeout(() => resolve(5), 1000);
});
p7.then(v => {console.log(v)});
p7.then(v => {console.log(v)});
p7.then(v => {console.log(v)});

/*
After running this code in the console, you will see:

Output
5 5 5

As we said before, finally returns the original promise object.

To be honest, catch and then also return some values, so let’s take a moment to sort out the information about all three presented methods for "consuming" the promise.

catch(handleRejected) – this method takes the handleRejected function as an argument, which is called if the promise goes to the rejected state.
If the state of the promise changes to fulfilled, then the method returns the original promise.
If the state changes to rejected, then the method returns a new promise containing the value returned by the handleRejected function.

then(handleResolved, handleRejected) – takes two arguments; the first one is the function called when the state of the promise changes to fulfilled, 
and the second is the function called when the state of the promise changes to rejected.

The method can be called with a single argument, handleResolved.
If we want to call it only with the handleRejected function, then we pass null as the first argument.

The method returns a new promise containing the value returned from the handleResolved or handleRejected functions (only one of them is ever called).
If these functions are not called (e.g. the state of the promise is changed to rejected and the handleRejected function is not provided) 
then the method returns the original promise.

finally(handleSettled) – takes the handleSettled function as an argument and is called at the moment of changing the state of the promise to rejected or fulfilled.
The method always returns the original promise.
Let’s look at another example:
*/

let p8 = new Promise((resolve, reject) => {
    resolve(5);
});
p8.finally(() => {
    console.log('end')
})
.then(v => {
    console.log(v);
    return ++v;
})
.then(v => {
    console.log(v);
    return ++v;
})
.then(v => {
    console.log(v);
});

/*
The executor function of the promise p immediately calls the resolve function, and as a result, the promise goes to the fulfilled state without any delay. 
The first method we call is finally, which displays 'end' in the console.

The method returns the original promise, so the next method in the chain, then, refers to this promise. The function passed to this method is called for it.

The value 5 appears in the console and the function itself returns the value 6. Based on that, a new promise is created which is referred to by the next then, and so on.

As a result, the console will show:

Output
end
5
6
7

You can once again trace the scenario described in the figure.

https://www.netacad.com/content/jsa/1.0/courses/content/m4/en-US/assets/bbfcdd0b02619845d760d77f7c94732e5004f216.png

In this way, we become acquainted with one of the most characteristic ways of using promises: by creating chains.

This technique allows us to easily and clearly handle many consecutive asynchronous operations which should be preserved in a certain order 
(e.g. the order of downloading and parsing data).

Let’s do one more experiment.

Take a look at the code:
*/

let p9 = new Promise((resolve, reject) => {
    resolve(5);
});
p9.then(v => {
    console.log(v);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(6), 1000);
    });
})
.then(v => {
    console.log(v);
});

/*
This time the function passed to the first then method does not return a numeric value but a promise object.

In such a situation, this object isn’t wrapped again and is passed directly to the next method in the chain.

As a result, the numbers 5 and 6 appear in the console at one-second intervals:

Output
5
6

As we have already mentioned, creating call chains makes sense when the asynchronous operations we are waiting for must start and end in a specific order.

For example, we download the configuration file (the first asynchronous operation), parse the data from the downloaded file (second operation), 
then fetch the target data from the address read in the configuration file (third operation).

However, there are situations when these operations are not dependent on each other and we’re not interested in the order in which they are performed.

For example, if we need to download a few photos, the order in which we download them is usually of no importance to us.

In this case, the static method Promise.all comes in handy.

We can pass an array of promise objects to it and take action only when all of them change their state to fulfilled.

Take a look at the code below:
*/

let promisess = [
new Promise ((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
}),
new Promise ((resolve, reject) => {
    setTimeout(() => resolve(3), 3000);
}),
new Promise ((resolve, reject) => {
    setTimeout(resolve(2), 2000);
}),
];
Promise.all(promisess).then(resolved => resolved.forEach(p => console.log(p)));

/*
To test this, let’s create an array containing three promises.

We pass the array to the Promise.all method, which returns a new promise.

The new promise is fulfilled when all the promises in the array change their state to fulfilled.

Now we have a single promise, and we can use its then method. Note that the function passed to then receives an array of values from the resolved promises as an argument.

The order of the results in the array is the same as the promises (even if they’re fulfilled in a different order). The result appears on the console as:

Output
1
3
2

What happens if an error occurs in one of the promises and the reject function is called?

Promise.all ignores all other promises (both in pending and fulfilled states) and the promise it returns changes its state to rejected.

Look at the code here:
*/

let promisses = [
new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
}),
new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 3000);
}),
new Promise((resolve, reject) => {
    setTimeout(() => reject('err 2'), 2000);
}),
];
Promise.all(promisses)
.then(a => a.forEach(p => console.log(p)))
.catch(e => console.log(e));

/*
In the example, after two seconds, the third promise changes its state to rejected, and only the information captured by catch appears on the console:

Output
err 2

Apart from the Promise.all method, the Promise.any and Promise.race methods often turn out to be useful.

They both work in a similar way – you pass an array of promise objects to them (the same way as in the case of Promise.all).

Both methods return a new promise that changes its state to fulfilled when any promise in the array also changes its state to fulfilled.

Look at the code below:
*/

let promises0 = [
new Promise((resolve, reject) => {
    setTimeout(() => resolve(4), 4000);
}),
new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 3000);
}),
new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 2000);
}),
];
Promise.any(promises0)
.then(p => console.log(`any: first resolved ${p}`));
Promise.race(promises0)
.then(p => console.log(`race: first resolved ${p}`));

/*
In this example, after two seconds, the console should display the message:

Output
any: first resolved 2
race: first resolved 2

We see a difference in how the methods work when one of the promises changes its state to rejected.

In this situation, Promise.any waits for the next promise from the array to change state.

If it changes to fulfilled, this promise is returned.

If there is no other promise in the array that could change the state to fulfilled then a special error is returned stating that all promises have been rejected.

With the Promise.race method, changing the state to rejected immediately generates an error.

Look at the following example, where after two seconds one of the promises changes its state to rejected, and another one changes its state to fulfilled a second later.

Look at the code:
*/

let promises1 = [
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(4), 4000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 3000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => reject('err 2'), 2000);
    }),
];
Promise.any(promises1)
.then(p => console.log(`any: resolved ${p}`))
.catch(e => console.log(`any: rejected ${e}`));
Promise.race(promises1)
.then(p => console.log(`race: resolved ${p}`))
.catch(e => console.log(`race: rejected ${e}`));

/*
After two seconds, the console shows a message associated with Promise.race, and after another second with Promise.any.

Output
race: rejected err 2
any: resolved 3

In the next example, we only pass two promises to both methods, with both changing their states to rejected after 2 and 3 seconds.

Look at the code below:
*/

let promises = [
new Promise((resolve, reject) => {
    setTimeout(() => reject('err 3'), 3000);
}),
new Promise((resolve, reject) => {
    setTimeout(() => reject('err 2'), 2000);
}),
];
Promise.any(promises)
.then(p => console.log(`any: resolved ${p}`))
.catch(e => console.log(`any: rejected ${e}`));
Promise.race(promises)
.then(p => console.log(`race: resolved ${p}`))
.catch(e => console.log(`race: rejected ${e}`));

/*
Promise.race reacts to the first rejected promise, while Promise.any only after the second promise is rejected (note the error type).

Output
race: rejected err 2
rejected AggregateError: All promises were rejected

This diagram brings together all three scenarios, allowing us to compare the behavior of the Promise.any and Promise.race methods.

In each case, we operate on an array of three promises that change state to fulfilled or rejected (after 200, 100, and 300 milliseconds) depending on the scenario.

https://www.netacad.com/content/jsa/1.0/courses/content/m4/en-US/assets/901267a29fb6381eebb4541879117335d72e2a47.png

Remember the example with the XMLHttpRequest method that appeared in the section on callback functions?

Look at it again and make sure you understand how it works.

In it, we used the XMLHttpRequest method to communicate with the server; we sent it a number to be squared and returned to our application with a random delay.

This is a typical example of asynchronous programming using events – the callback function is only run when a response is received from the server.

Let's try to rewrite the example using promises.

Look at the code below:
*/

const valuee = 200;
let promise = new Promise(function (resolve, reject) {
let request = new XMLHttpRequest();
request.onload = () => {
    if (request.status === 200) {
        resolve(JSON.parse(request.responseText));
        // console.log(`server: ${value} * ${value} = ${resp.square} (${resp.time}ms)`);
    } else {
        reject(new Error(request.status));
    }
};
request.open('GET', `http://localhost:3000/json?value=${valuee}`);
request.send();
})
promise.then(
function (result) {
    console.log(`server: ${valuee} * ${valuee} = ${result.square} (${result.time}ms)`);
},
function (error) {
    console.log(error.message);
}
);

/*
Even without a thorough code analysis, you can see that the example is now much more complicated than in the original version when we only used the callback function.

This is because the XMLHttpRequest method was not intended to be used with promises, and we’ve somewhat forcefully adapted it to this style.

Fortunately, JavaScript provides newer methods with similar functionality that work on promises right away.

Let's look at a similar example using the fetch method.

Take a look at the code below:
*/

const value = 200;
fetch(`http://localhost:3000/json?value=${value}`)
.then(response => response.json())
.then(data => {
    console.log(`server: ${value} * ${value} = ${data.square} (${data.time}ms)`);
});
console.log(`browser: ${value} * ${value} = ${value * value}`);

/*
This method is simpler.

In the example, we pass the address of the server we want to get a response from to fetch.

The method returns a promise, for which we call the then method (the first one in the chain).

The function placed in it is called when the promise changes the state to fulfilled, and this happens after getting the answer from the server.

This function takes one argument, response. It’s a predefined object which we won’t discuss in detail here, but it has, 
for example, properties of status (the status code returned by the server, e.g. 200) or type (denoting the type of response).

This object also has several methods, including the json method that we use in the example.

This method takes the actual content of the response that we know was sent by the server in JSON format and returns a promise.

This promise is set to fulfilled when the response changes from JSON format to a JavaScript object (another asynchronous operation).

In the example, the second then in the chain refers specifically to this promise.

The function that’s passed to it takes the date of the server response as an argument, which has already been changed from JSON to a regular object.
*/