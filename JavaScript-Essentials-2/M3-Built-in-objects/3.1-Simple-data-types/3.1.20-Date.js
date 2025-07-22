/*--------------------- 3.1.20 Date ---------------------*/

/* 
The Date constructor, despite its name, also serves to store time, not just dates.

Unlike the Boolean, Number, and String discussed earlier, it does not represent any primitive.

However, it can be regarded as one of the simple types.

Why? Because the value placed in it is a simple number.

This number is a timestamp, which is the number of milliseconds that have passed from a fixed point in time.

In JavaScript, January 1, 1970 00:00:00:00 UTC is used as the zero-point, as in many computer systems.


Note that this is UTC (Universal Coordinated Time), referring to the GMT+0 time zone.

This is important because we can be in different time zones and the same timestamp will represent a different local time.

Using time zones and local time can be a bit awkward at first, so let’s try to take a closer look at this subject.
*/

/*--------------------- 3.1.21 Time zones and other tricks ---------------------*/

/* 
We have already said that the Date constructor does not represent any primitive, so we will not use autoboxing in this case.

We must explicitly create the Date object using the operator new.

The constructor can be given arguments in different formats. The simplest method is to pass the timestamp, which is the number of milliseconds from the zero-point.

This method is not overly practical, as it is hard to imagine that we will convert time into milliseconds each time.

However, it is ideal for explaining the basic concept of Date.

For simplicity's sake, imagine that we are in the UTC+0 (or GMT+0) time zone, e.g. Iceland. 
We are sitting comfortably in a café in Reykjavík, we order cake and strong coffee, and get down to working on the Date constructor.

Look at the code below:
*/

let date1 = new Date(0);
let date2 = new Date(1000*60*60*10);
console.log(date1.toUTCString()); // -> Thu, 01 Jan 1970 00:00:00 GMT
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT

/*
We have provided the date1 object with a timestamp 0, which will be the zero-point.

We have inserted a value of 3600000000 into date2, which is the number of milliseconds corresponding to 10 hours.

Using the prototype method toUTCString, we retrieve the date and time as a string of characters.

This method returns UTC+0 time, as you can see from the GMT shortcut ending the string.

Let's do another experiment – look at the code below:
*/

console.log(date2.getTimezoneOffset()); // -> 0
console.log(date2.toLocaleString()); // -> 01/01/1970, 10:00:00
console.log(date2.toISOString()); // -> 1970-01-01T10:00:00.000Z
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT

/*
In the first step, we use the getTimezoneOffset method, which returns the time difference (in minutes) between the UTC+0 zone 
and the zone we are currently in (this information is taken from our operating system configuration).

This difference is calculated for a specific date (in this case January 1st, 1970) for several reasons, for example because in some places in the world, 
different time is used in winter and in summer.

Reykjavík is in the UTC+0 zone, so the difference is 0. Then we call the toLocaleString method.

As you can guess, it returns a string with the time that is stored in date2:

the time is formatted according to the language set as local in our operating system 
(in the example, it is English. The German format, for example, would look like this: 01.01.1970, 10:10:00),
this is the local time (adjusted to our time zone).

In the following steps, we take the same time from date2 in ISO and universal formats, using the toISOString and toUTCString methods respectively.

Both methods always return the time for the UTC+0 zone.

Since we are in the UTC+0 zone, the time returned by all three methods is identical.

Let’s now teleport ourselves to a bar in Berlin.

While in a different time zone, let’s do the same experiment again.

Look at the code below:
*/

console.log(date2.getTimezoneOffset()); // -> -60
console.log(date2.toLocaleString()); // -> 01/01/1970, 11:00:00
console.log(date2.toISOString()); // -> 1970-01-01T10:00:00.000Z
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT

/*
Firstly, thanks to the getTimezoneOffset method, we find that for the date of 1 January 1970, the difference between the UTC+0 zone and the time zone where Berlin is located is -60 minutes.

This can of course also be seen in the string returned by thisLocaleString – instead of 10 o'clock, we get 11 o'clock.

The toISOString and toUTCString methods, as always, return the time for UTC+0, which is 10 o'clock.

So now what is the effect of this experiment on your time zone?

Operating with milliseconds when creating a Date object is usually impractical, and so more often the date is given as a string, or split into single values such as year, month, etc.

The time thus provided to the constructor is treated as local by default, unless we explicitly state otherwise.

Let's look at an example below where we create the Date object by passing the time in the ISO 8601 string format.
*/

date3 = new Date("2020-02-02T20:20:00.000");
date4 = new Date("2020-02-02T20:20:00.000Z");
console.log(date3.toLocaleString()); // -> 02/02/2020, 20:20:00
console.log(date3.toISOString()); // -> 2020-02-02T19:20:00.000Z
console.log(date3.toUTCString()); // -> Sun, 02 Feb 2020 19:20:00 GMT
console.log(date4.toLocaleString()); // -> 02/02/2020, 21:20:00
console.log(date4.toISOString()); // -> 2020-02-02T20:20:00.000Z
console.log(date4.toUTCString()); // -> Sun, 02 Feb 2020 20:20:00 GMT
console.log(date3.getTime()); // -> 1580671200000
console.log(date4.getTime()); // -> 1580674800000
console.log(date4.getTime() - date3.getTime()); // -> 3600000

/*
Do you see the difference in the strings provided as arguments to the Date constructors when creating the date3 and date4 objects?

The letter Z, added at the end, according to the ISO format, indicates that it is UTC+0.

If it is not, it is local time. And since we haven't finished our next coffee in Berlin yet, so we are still in the UTC+1 time zone (or more precisely, 
    we are in the time zone which was UTC+1 on 2 February 2020).

Using the getTime method, we can take the time from the date3 and date4 objects expressed in milliseconds from the zero-point, that is, the timestamp.

We can see a difference of 3600000 milliseconds, which is one hour.


Don't worry if playing with time zones seems a little overwhelming to you.

It just needs a little practice. As a consolation, we can tell you that it is rare for JavaScript to mix universal time (UTC+0) and local time in practice.

Usually in the program, we operate with either one or the other.
*/

/*--------------------- 3.1.22 Current time ---------------------*/

/* 
As we have seen, the Date constructor is used to create objects to store time.

Theoretically, it can also be called without the new operator, which will then return the time in the form of a string (the time given in the argument).

However, such use of the constructor is commonly discouraged because of serious differences in its operation in different browsers.

So always use Date to create an object (with the new operator).

Let's take a look at what arguments our constructor can accept.
*/

let nowObj = new Date();
console.log(nowObj.toLocaleString());

/*
First of all, when we call the Date constructor, we can skip the arguments entirely.

In that case, Date considers that we are referring to the current time.

We can also obtain the current time using the only practical static method of the Date constructor, namely now.

It returns the timestamp for the moment the method is called, which is simply the current time in the form of the number of milliseconds from the zero point.
*/

let now = Date.now(); // timestamp
let nowObjt = new Date(now);
console.log(`now : ${typeof now} : ${now}`);
console.log(`now : ${typeof nowObjt} : ${nowObjt}`);

/*
We can pass a number to the constructor, which will be interpreted as a timestamp (we did this in previous examples).

In this example, we get the current timestamp using Date.now, and use it to call the constructor.

If the number provided as an argument is negative, it will be interpreted as the number of milliseconds by which we have to go back before the zero point (that is, before 1970).
*/

/*--------------------- 3.1.23 Time specification with individual components ---------------------*/

/* 
The constructor may also accept the time specified in the form of several numbers, representing successively the year, month, day, hour, minutes, seconds, and milliseconds.

We must provide at least the year and month, while all other missing components will be set to the lowest possible values by default (e.g. day to value 1).

Look at the code below:
*/

let date11 = new Date(2020, 6);
let date22 = new Date(2020, 6, 8);
let date33 = new Date(2020, 6, 8, 10);
let date4 = new Date(2020, 6, 8, 10, 20, 45);
console.log(date11.toLocaleString()); // -> 01/07/2020, 00:00:00
console.log(date22.toLocaleString()); // -> 08/07/2020, 00:00:00
console.log(date33.toLocaleString()); // -> 08/07/2020, 10:00:00
console.log(date4.toLocaleString()); // -> 08/07/2020, 10:20:45

/*
This is a convenient and unambiguous way to specify the date, as you only need to remember a few details:

although the year can be given in abbreviated form (last two digits), this notation is ambiguous and not recommended – use the full year notation (four digits);
the months are counted from 0 (e.g. the value of 2 corresponds to March);
the time specified in this way is always interpreted as local (for the time zone we are in).
*/

/*--------------------- 3.1.24 Time specification with date string ---------------------*/

/* 
The most intuitive way of passing the time to the constructor is the one we use on a daily basis – the date is written in the form of a sequence of characters.

Unfortunately, this is also the most problematic way.

Why? Because there are many formats in which the date and time can be presented, and JavaScript tries to interpret them all at all costs.

In addition, JavaScript completes some of the missing information provided in this form.

It seems to be quite nice and helpful, but it can lead to a situation that with a badly formatted date 
(e.g. we forgot to give the month) there will not be an error, and JavaScript will try to interpret it in its own way.

Look at the code below:


let date1 = new Date("2020-07-08");
let date2 = new Date("2020-07-08T10:20:00");
let date3 = new Date("2020-07-08T10:20:00Z");


In the example, we use the ISO 8601 format and this is, in our opinion, the only unambiguous way of giving time in the form of a string.

The format YYYY-MM-DDTHH:mm:ss.sss is simple and legible (year, month, day, hour, minutes, seconds, milliseconds). 
The time given in this format is always the local time, unless the letter Z appears at the end of the string. Then it is UTC+0.

The following are the calls of the Date constructor, which take strings in different formats as arguments (note that in some cases incomplete information is given).

Look at the code below:


let date1 = new Date("Mon Mar 02 2020 10:00:00");
let date2 = new Date("Mon March 2 2020 10:00");
let date3 = new Date("Mar 02 2020 10:00:00");
let date4 = new Date("2 March 2020, 10:");
let date5 = new Date("3.2.2020");
let date6 = Date("03/02-2020, 10:00");
let date7 = new Date("2020, 10:00");
let date8 = new Date("2020 march-02, 10:00");
let date9 = new Date("3.2.2020 GMT+0400");
let date10 = new Date("Mon Mar 02 2020 10:00:00 UTC-4");


The time in the examples is always local, unless it is clearly indicated that it refers to a different time zone using GMT or UTC strings 
(as in the examples of the date9 and date10 objects).

Try calling up the example above and check the dates you receive using the toLocaleString and toISOString methods.


Flexibility in action is usually a good thing, but not necessarily for programming, where clarity is important.

Such a flexible approach to date formats written in the form of strings is not, in our opinion, the best idea.

Try to keep to one format, such as ISO. If necessary, change the format in order to present the date, e.g. to local.
*/

/*--------------------- 3.1.25 Practical use of a timestamp ---------------------*/

/* 
The often-used Date method is presented in one example, getTime, returning a number of milliseconds between the zero point and the time stored in the object.

The same value can be found using the valueOf method that you learned when we looked at the previous constructors.

In the example, we will use the getTime method to check how many milliseconds a day has:


let date1 = new Date(2020, 6, 8, 10, 20, 0);
let date2 = new Date(2020, 6, 9, 10, 20, 0);
console.log(date2.getTime() - date1.getTime()); // -> 86400000 -> 1000 x 60 x 60 x 24


A more practical way to use the getTime method may be to measure the time it takes to execute a certain piece of code.

Let’s build a simple stopwatch, measuring the start and end times and checking the difference between them.


let startTime = Date.now();
for(i=0; i<10000000; i++){}
let endTime = Date.now();
console.log(endTime - startTime);


This time we did not even create Date objects.

Instead, in order to retrieve the current timestamp, we used the static method now.

In the example, we measured how many milliseconds it would take to perform 10 million empty iterations of the for loop.
*/

/*--------------------- 3.1.26 Operating on individual date and time components ---------------------*/

/* 
The Date constructor has a large set of prototype methods to operate on individual components of time stored in a particular object.

For example, we will use one of the following methods to get and change the year:

getFullYear – getting a number identifying the year (local time)
getUTCFullYear – getting a number identifying the year (time UTC+0)
setFullYear – setting the new year value (local time)
setUTCFullYear – setting the new year value (time UTC+0)
Each of the date components will contain these four methods (two gets and two sets, for local time and UTC).

Next, we’ll only show the methods for the local time components.

You can easily guess the remaining variants by analogy to the getFullYear shown earlier:

year: getFullYear,
month: getMonth (remember that the months are counted from 0 in JavaScript)
day of the month: getDate,
day of the week: getDay (days of the week are counted from 0 – the first day is Sunday)
hour: getHours,
minutes: getMinutes,
seconds: getSeconds,
milliseconds: getMilliseconds.
The example below demonstrates the use of several selected methods operating on particular components of time.


let date = new Date("2020-07-08T10:20:00");
console.log(date.getMonth()); // -> 6 
console.log(date.getDay()); // -> 3
console.log(date.getDate()); // 8
console.log(date.getHours()); // -> 10
date.setHours(12);
console.log(date.getHours()); // -> 12


They are so simple and intuitive that there is hardly any need to discuss them in more detail.

Apart from the toISOString, toUTCString, or toLocaleString methods we showed you earlier, 
there are two other useful methods converting the time stored in an object into a string, toLocaleDateString and toLocaleTimeString.


let date = new Date("2020-07-08T10:20:00");
console.log(date.toLocaleDateString()); // -> 08/07/2020
console.log(date.toLocaleTimeString()); // -> 10:20:00

They allow us to retrieve a string representing either only the local date or only the local time.

More information about the Date constructor and its methods can be found on the MDN4 website.

4JavaScript Date objects
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/