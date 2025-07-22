/*--------------------- 3.3.2 JSON ---------------------*/

/* 
JSON is an abbreviation of JavaScript Object Notation, meaning a text-based data format.

It is mainly used to send data over the network.

However, it turned out to be so practical that it has long since ceased to be used only in JavaScript, becoming one of the most popular, 
if not the most popular, data exchange formats.

Its main competitor is still the XML format, but in the case of JavaScript, the choice of JSON is a no-brainer.

It was invented specifically for this particular language. JSON is a text format that allows objects and arrays to be stored.

To convert data (objects and arrays) into the JSON format and vice versa, from text to objects and arrays, a built-in JSON object is used in JavaScript.

In this case, it is really an object, not a constructor.

We do not create it, we do not delete it, and we do not modify it.

This ready-to-use object exists and is waiting to be used, providing us with two methods: stringify and parse.

Let’s try converting the browser's main object, the window, into JSON format.

Look at the code below:
*/

let vehicle2 = {
    id: "AK12113",
    longitude: 59.358615, 
    latitude: 17.947589,
    getId: function() {
        return this.id;
    }
};
let vehicle2JSON = JSON.stringify(vehicle2);
console.log(typeof vehicle2JSON); // -> string
console.log(vehicle2JSON); // -> {"id":"AK12113","longitude":59.358615,"latitude":17.947589}

/*
The stringify method has not encountered any problems, either.

The only thing to watch out for in this case is to avoid cycles.

In variables or properties, we do not store whole objects, only references to them.

It may happen that the same reference is written in two places in the object, at different levels of nesting, 
and one of its fields may refer to an object located higher in the nesting.

This can lead to a cycle.

Let's repeat the experiment, this time adding the getId method to the object.

Look at the code below:
*/

let vehicle21 = {
    id: "AK12113",
    longitude: 59.358615, 
    latitude: 17.947589,
    getId: function() {
        return this.id;
    }
};
let vehicle21JSON = JSON.stringify(vehicle21);
console.log(typeof vehicle21JSON); // -> string
console.log(vehicle21JSON); // -> {"id":"AK12113","longitude":59.358615,"latitude":17.947589}

/*
Everything works without errors and the result of the conversion is saved in the vehicle2JSON variable.

It turns out, however, that there is no trace of the getId method in the target string.

If we think about it carefully, this is perfectly reasonable.

What would actually be there? Perhaps our method code?

JSON is a format for exchanging data, not information about the program.

You can see at this point that during conversion, JSON treats an object as a collection of elements, key:value pairs.

So, it acts as a regular data structure for it.

Let’s try converting the browser's main object, the window, into JSON format:
*/

JSON.stringify(window); // -> Uncaught TypeError: Converting circular structure to JSON

/*
The conversion will not succeed because of the existence of cycles in this object.


The JSON format allows for writing not only objects, but also arrays.

This is necessary because the field of an object may be an array.

Let's test another case, creating and converting an array of objects to JSON.

This time we will create several objects, using our Vehicle constructor. Each vehicle will have a different identifier, but the same location.

Let's say they are all in the same car park:
*/

let Vehicle = function(id, latitude, longitude){ 
    this.id = id;
    this.latitude = latitude;     
    this.longitude = longitude;
}; 
let ids = ["AK12113", "AL1024", "BA1001"];
let vehicles = [];
ids.forEach(id => vehicles.push(new Vehicle(id, 59.358615, 17.947589)));
let vehcilesJSON = JSON.stringify(vehicles); // -> [{"id":"AK12113","latitude":59.358615,"longitude":17.947589},{"id":"AL1024","latitude":59.358615,"longitude":17.947589},{"id":"BA1001","latitude":59.358615,"longitude":17.947589}]

/*
Going through the ids array (the forEach method) we create a new Vehicle object for each identifier.

Each object is inserted using the push method into the vehicles array. We then successfully pass this array to the JSON.strings method.
*/

/*--------------------- 3.3.3 Converting from JSON format ---------------------*/

/* 
We will use the JSON.parse method to recreate the object or array from the JSON text format.

Let's try to test it on one of the simple strings generated in the previous examples.

One of the basic rules of the JSON format is that the object keys are strings in double quotes.

The second important limitation is the fact that in JSON format we can save one object or one array at a time (but consisting of many objects).

Look at the code below:
*/

let vehicleJSON = '{"id":"AK12113","position":{"longitude":59.358615,"latitude":17.947589}}';
let vehicle = JSON.parse(vehicleJSON);
console.log(typeof vehicle); // -> object
console.log(vehicle.position.longitude); // -> 59.358615

/*
The reconstructed object is stored in the vehicle variable.

As you can see, it contains an object to whose fields we can easily refer.

A slightly more complex JSON string, containing an array of objects, should be just as easy to convert.

Look at the code below:
*/

let vehcilesJSONo = '[{"id":"AK12113","latitude":59.358615,"longitude":17.947589},{"id":"AL1024","latitude":59.358615,"longitude":17.947589},{"id":"BA1001","latitude":59.358615,"longitude":17.947589}]';
vehcilesJSONo = vehcilesJSONo.replaceAll("id", "plate");
let vehicleso = JSON.parse(vehcilesJSONo);
console.log(vehicleso instanceof Array); // -> true
console.log(vehicleso.length); // -> 3
console.log(vehicleso[0].plate); // -> AK12113

/*
Before reconstructing the arrays and objects stored in the form of a JSON string, we modify it slightly (just for fun).

Knowing that it is a string, we use the replaceAll method to replace all occurrences of 'id' with 'plate'.

The result of the JSON.parse method call is saved in the vehicles variable.

We then check that it is an array with three elements.

The zero element is the object in which we find the plate field (originally id).


As you can see, conversion to and from JSON is a very simple task.

When converting objects, you only have to be careful of cycles.

However, in everyday practice it is not realistic that you will create such an incorrect object from the JSON point of view.

When converting from objects and arrays to text, make sure that the text is compatible with the JSON format.

First and foremost, it must describe either a single object or a single array at the highest level.

Secondly, each property name in an object (each key) must be enclosed in double quotes.
*/