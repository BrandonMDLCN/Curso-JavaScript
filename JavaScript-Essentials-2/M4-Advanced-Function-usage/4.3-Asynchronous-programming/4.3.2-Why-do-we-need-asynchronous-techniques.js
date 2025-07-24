/*--------------------- 4.3.2 Why do we need asynchronous techniques? ---------------------*/

/* 
So far we have been exploring the field of synchronous programming.

It is the simplest and most intuitive approach to programming.

However, there are situations where it can limit, or even prevent, effective solving of certain programming problems.

Now is the time to get acquainted with asynchronous programming techniques, which are commonly used (e.g. in JavaScript).


Before we move on to discuss asynchronous techniques, let's first try to explain what the difference between synchronous and asynchronous execution actually is.

Every program is a sequence of certain tasks.

Usually, the order of these tasks is important and before calling the next task we should finish the previous one.

If, after calling one task (e.g. a single instruction or a complex function) we wait for it to finish and then start another task, 
we are dealing with synchronous execution.

In the case of asynchronous execution, the selected task may be started before the completion of the previous task.

This is the case, for example, when an earlier task needs data that must be supplied from outside the program in order to complete its operation, 
and which may take a long time to be supplied (e.g. when we are trying to retrieve information from the database).

Let's take a look at the code snippet:
*/

let showInfoo = result => {
    let info = "the arguments are equal";
    if(result > 0) {
        info = "the first argument is greater";
    } else if (result < 0) {
        info = "the second argument is greater";
    }
    console.log(info);
}
let compareSync = (a, b, fn) => {
    let r = a - b;
    fn(r);
    }
console.log("start");
compareSync(10, 5, showInfoo);
console.log("end");

/*
We create two functions, showInfo and compareSync.

The first one displays one of three messages depending on whether the argument passed to it is smaller, larger, or equal to zero.

The second function takes two numerical arguments, counts the difference between them, and then calls the function passed as the third argument with the obtained result.

Running the code for the numbers 10 and 5 should result in the following lines appearing in the console:

Output
start
the first argument is greater
end

In the example, the showInfo function is treated as a callback (i.e. we pass it as an argument to the compareSync function and only run it there).

The whole code executes strictly sequentially; therefore it is fully synchronous.

Let’s write a new comparison function; this time we’ll call it compareAsync.

We pass to it three arguments with the same meaning as in the earlier comapreSync function.

However, this time, after calculating the difference between the first two arguments, we don't call the function passed as the third argument directly; 
instead we use the setTimeout method to do it.

We've come across this method before, and it allows us to run the specified function after a time defined in milliseconds (1000 in the example).

Additionally, we can set what arguments will be passed to such a function (in our case, it is the r argument).

Let's take a look at the code below:
*/

let showInfo = result => {
    let info = "the arguments are equal";
    if(result > 0) {
        info = "the first argument is greater";
    } else if (result < 0) {
        info = "the second argument is greater";
    }
console.log(info);
}
let compareAsync = (a, b, fn) => {
    let r = a - b;
    setTimeout(fn, 1000, r);
};
console.log("start");
compareAsync(10, 5, showInfo);
console.log("end");

/*
After running this snippet, you should see these messages in the console:

Output
start
end
the first argument is greater

At first glance, you can see that the order of the displayed messages has changed.

This is because the compareAsync function finishes its operation immediately after calling setTimeout; it does not wait for the fn function to start (let alone finish).

In this situation, the next command, console.log("end") is executed.

Only after a second (1000 milliseconds) the code fragment responsible for displaying the message "the first argument is greater" is executed.


Asynchronicity, which we introduced in this example, does not serve any meaningful purpose.

It is only an illustration of the situation, where the moment of function execution does not depend on its position in the code, 
but on the occurrence of a certain event (in the example, the event is the passing of 1000 milliseconds).
*/