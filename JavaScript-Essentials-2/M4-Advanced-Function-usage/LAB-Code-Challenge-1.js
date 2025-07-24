/* 
Scenario
Write a class called MyIterable that will allow you to create an iterable object with the following properties:

it will be possible to add arbitrary elements to it (add method)
an attempt to add an element that is already in the object will be ignored;
it will be possible to check whether an element is present in the object (has method)
it will be possible to delete an element (del method)
it will be possible to check the number of elements (length property)
it will be possible to use any technique for passing elements of an iterable object (spread operator, for ... of, iterators), 
and an appropriate generator should be used in the implementation.
Test the class using the following example:

let iterable = new MyIterable();
iterable.add(2);
iterable.add(5);
iterable.add(3);
iterable.add(2);
iterable.del(3);


console.log(iterable.length); // -> 2
console.log(iterable.has(2)); // -> true
console.log(iterable.has(3)); // -> false
console.log(...iterable); // -> 2 5
*/
class MyIterable{
    constructor(){
        this.iterat = [];
    }

    add(x){
        if(!this.has(x)){
            this.iterat.push(x);
        }
    }

    has(x){
        return this.iterat.includes(x);
    }

    del(x){
        let index = this.iterat.indexOf(x);
        if(index !== -1)
        {
            this.iterat.splice(index,1)
        }
    }

    get length(){
        return this.iterat.length;
    }

    [Symbol.iterator] = function* () {
        for(let element of this.iterat) {
            yield element;
        }
    }
}

let iterable = new MyIterable();
iterable.add(2);
iterable.add(5);
iterable.add(3);
iterable.add(2);
iterable.del(3);


console.log(iterable.length); // -> 2
console.log(iterable.has(2)); // -> true
console.log(iterable.has(3)); // -> false
console.log(...iterable); // -> 2 5

/*-------------------------------------------------------------------------------------------------------------*/

class MyIterable {
    constructor() {
        this.data = [];
    }

    get length() {
        return this.data.length;
    }

    has(n) {
        return this.data.includes(n);
    }

    add(n) {
        if(!this.has(n)) {
            this.data.push(n);
        }
    }

    del(n) {
        let index = this.data.indexOf(n);
        if(index !== -1) {
            this.data.splice(index, 1);
        }
    }

    [Symbol.iterator] = function* (){
        for(let index = 0; index<this.length; index++) {
            yield this.data[index];
        }
    }
}