/*--------------------- 3.1.16 Copying substrings ---------------------*/

/* 
Using the substr, substring, and slice methods, we can copy the selected part of the string.

The operation of these methods is very similar, and they differ mainly in the way they interpret the arguments provided to them.
*/

let text = "One, two, three, one, two, three.";
console.log(text.substr(0,8)); // -> One, two
console.log(text.substr(10)); // -> three, one, two, three.
console.log(text.substr(-6)); // -> three.
console.log(text.substr(-6, 2)); // -> th

/*
In the case of the substr method, the first argument is the position of the beginning of the substring to be copied.

The second argument is interpreted as the length of the fragment to copy.

Skipping the second argument means that the fragment from the given position to the end of the string is to be copied.

The first argument, or position, may also be a negative number.

It will then be interpreted as the position counted from the end of the string.

*/
console.log(text.substring(5, 8)); // -> two
console.log(text.substring(5)); // -> two, three, one, two, three.
console.log(text.substring(-11, 8)); // -> One, two

/*
The substring method also takes the starting position of the substring as the first argument.

If we omit the second argument, the method will work in the same way as the substr, but if we use it, it will be interpreted not as the length, 
but as the position of the last character of the copied substring in the original string. Unlike substring, a negative value is treated as a zero.
*/

console.log(text.slice(0,3)); // -> One
console.log(text.slice(5)); // -> two, three, one, two, three.
console.log(text.slice(-11)); // -> two, three.
console.log(text.slice(-11, -8)); // -> two

/*
The third of these methods, slice, operates on positions, just like substring.

The first argument is the position of the beginning of the substring, and the second is the position of the end.

Skipping the second argument means that the substring is copied to the end of the original string. Both the first and second arguments can be negative.

Such values, like in substr, are interpreted as positions counted from the end of the original string.
*/

/*--------------------- 3.1.17 Padding ---------------------*/

/* 
Among the methods of the String constructor, there are many that are not especially sophisticated, but can make life easier.

These include the padEnd and padStart methods.

They allow you to expand the string to a given size, completing it from the end or from the beginning by repeating the string given as an argument.

The first argument is the maximum length of the output string, the the second argument is the padding.

If we omit the second argument, the spaces will be used for completion by default.

Take a look at the example below:
*/

let numbers = [100, 5, 66];
for(let i=0; i< numbers.length; i++) {
    console.log(String(numbers[i]).padStart(10, '0'));
    console.log(String(numbers[i]).padStart(10, 'abc'));
    console.log(String(numbers[i]).padStart(10));
}

/*
Executing this code fragment should display the following information in the console:

Output
0000000100
abcabca100
       100
0000000005
abcabcabc5
         5
0000000066
abcabcab66
        66

In a similar way, we would use the padEnd method.
*/

/*--------------------- 3.1.18 Trimming ---------------------*/

/* 
Equally simple and equally useful methods are trim, trimLeft (alias trimStart) and trimRight (alias trimEnd).

They remove whitespace characters (e.g. tabs, spaces, newline characters).

They are particularly useful in cases where we use data submitted by the user into forms on our web application.

An example should be enough to understand their functioning.

Take a look at the code below:
 */

let city = " Bergen  ";
let street = " Dokkeboder";
console.log(city.trimLeft().length); // -> 8 -> "Bergen  "
console.log(city.trimRight().length); // -> 7 -> " Bergen"
console.log(city.trim().length); // -> 6 -> "Berge"
console.log(street.trim().length); // -> 10 -> "Dokkeboder"

/*--------------------- 3.1.19 Comparing strings ---------------------*/

/* 
Finally, we are left with the comparison of strings.

Comparison can be done with the comparison operators you know, such as <, ==, etc. The result of the comparison will be true or false.

The comparison is, of course, carried out alphabetically, that is, according to the letter order of the alphabet. 
If the first letters of the strings being compared are the same, the next ones are compared.
*/

console.log("a" < "b"); // -> true
console.log("abc" < "acd"); // -> true
console.log("b" < "acd"); // -> false

/*
Digits are treated according to their natural order. Remember, however, that in this case we do not compare numbers but strings consisting of characters, which are digits.
*/

console.log("4" < "5"); // -> true
console.log("2" < "12"); // -> false
console.log("34" < "332"); // -> true

/*
What happens when upper-case letters are used? They are also compared according to their position in the alphabet, with all capitals being treated before the lower-case letters.
*/

console.log("brettesnes" < "Sundsfjord"); // -> false
console.log("Brettesnes" < "Sundsfjord"); // -> true

/*
So far, everything has been working simply, clearly, and pleasantly. However, let's generate a small problem.
*/

console.log("Ørnes" < "Sundsfjord"); // -> false

/*
Something must have gone wrong.

We may not know the Norwegian alphabet used in the example, but we intuitively expect the letter Ø to appear before S.

And so it does.

So where does this result come from?

JavaScript does not cope well with special characters from local alphabets when comparing strings in a simple way.

It treats them all as if they were added to the end of the alphabet. What helps us is the localeCompare method.

In the basic version, it can take two arguments.

The first argument is a string for comparison, while the second one, optional, specifies the language (or the de facto alphabet that will be used during the comparison).

If we omit the second argument, our default location written in the operating system configuration will be used (and most often we use this method in this way).
*/

console.log("Ørnes".localeCompare("Sundsfjord", "nn")); // -> -1
console.log("Ørnes".localeCompare("Brettesnes", "nn")); // -> 1

/*
In the example, the second argument is 'nn', meaning Norwegian ('en' English, 'de' German, 'sv' Swedish, 'pl' Polish, etc.).

First we compare "Ørnes" with "Sundsfjord". The result -1 means that the first string comes before the second one (alphabetically).

The comparison of "Ørnes" with "Brettesnes" gives a result of 1, which means that this time the first string comes after the second. 
The result would be 0 if we compare two identical strings.

If you have looked at the MDN page of the String constructor's description, you have certainly seen that we only discussed a limited number of methods.

However, this is a set that is enough to efficiently deal with strings in everyday practice.

We’ll come back to the String constructor when discussing regular expressions (RegExp).
*/