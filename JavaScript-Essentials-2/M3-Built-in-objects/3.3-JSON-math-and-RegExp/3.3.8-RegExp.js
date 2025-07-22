/*--------------------- 3.3.8 RegExp ---------------------*/

/* 
The RegExp constructor is used to create objects representing regular expressions. The constructor itself is not particularly complicated.

Unfortunately, the same cannot be said about regular expressions.

At this stage, we will look only at a few basic methods of this constructor and the methods of String constructor, which also work with regular expressions.

As far as the regular expressions are concerned, we will only present the minimum knowledge you need, since discussing them in detail could take up the whole course.


In a nutshell, a regular expression is a search pattern expressed in letters and metacharacters.

This expression allows you to test the given string by checking whether it matches the pattern 
(most often it is about checking whether the pattern is included in the tested string).

Regular expressions are used in virtually all programming languages where they are supported either natively or through external libraries.

Among other things, they are commonly used to validate text data that apps get from unreliable sources (e.g. the email address provided by the user).

In the simplest case, a regular expression can consist of the literals themselves (e.g. "cut").

They can be used to check if there is such a substring in a given string.

The use of such a regular expression for the string "haircut" would be successful ("cut" is included in "haircut").

However, such an expression would be of little use. The simplest modification you can make to a regular expression is to replace the literal with a dot.

The dot is a metacharacter, which can be replaced by any letter in a tested string.


For example, the regular expression "c.t" matches both "haircut" and "caterpillar".
*/

/*--------------------- 3.3.9 Constructor and test method ---------------------*/

/* 
We can create a regular expression in JavaScript in two ways, either explicitly using the RegExp constructor, 
or using a shortened notation of literals and / (slash characters).

In both cases, we have to provide the regular expression pattern as an argument.

The simplest prototype method of the RegExp constructor is test, where we pass the tested string.

If the string matches the expression (the pattern) the method will return true.

Look at the code below:
*/

let re1 = new RegExp('c.t');
let re2 = /c.t/;
console.log(re1.test("cat")); // -> true
console.log(re2.test("cut")); // -> true
console.log(re2.test("ct")); // -> false


/*--------------------- 3.3.10 The exec method ---------------------*/

/* 
An alternative method to test is exec.

This method also checks the matching of the string (provided as an argument) to a regular expression, but returns more extensive information.

If there is no match, it returns a null value, but if the match is successful, we get an array with some data.

For us, the first two items of the array will be the most important: 
the snippet of the string from the argument that was matched to the pattern and the index of the first character of this snippet.

Look at the code below:
*/

let re = /c.t/;
console.log(re.exec("haircut")); // -> ["cut", index: 4, input: "haircut", groups: undefined]
console.log(re.exec("ct")); // -> null


/*--------------------- 3.3.11 String constructor methods using RegExp ---------------------*/

/* 
We mentioned earlier that some of the String constructor methods also support regular expressions.

These include search, match, and replace.

To the first two methods, search and match, we pass one argument – a regular expression (an object created with regExp, not a pattern of strings).

If this is successful, the search method returns the matching position in the string, 
while from the match method we get information in the same form as from the exec method (an information array).

The replace method allows us to change the indicated substring in our strings to a new value.

Instead of a substring we can provide a regular expression (remember that operations on the string do not modify the original, but return a copy).

Look at the code below:
*/

// String -> match, search, replace, ...
let rec = /c.t/;
let str = "dog and cat";
console.log(str.match(rec)); // -> ["cat", index: 8, input: "dog and cat", groups: undefined]
console.log(str.search(rec)); // -> 8
console.log(str.replace(rec, 'unicorn')); // -> dog and unicorn
console.log(str); // -> dog and cat


/*--------------------- 3.3.12 Basic rules for regular expressions ---------------------*/

/* 
Overall, these are important methods related to regular expressions.

However, in order to use them logically, we need to learn a basic set of metacharacters and rules used in regular expressions.


The basic metacharacter is a dot.

One arbitrary mark can be matched in its place. But what should we do if we really want to match the text containing the dot?

In this instance, we use the escape character, which is \ (backslash).

Preceding the metacharacter with an escape character means that we take away its magical properties, and it is to be treated as a literal (i.e. an ordinary character).

Look at the code below:
*/

let reco = /c\.t/;
console.log(reco.exec("cut")); // -> null
console.log(reco.exec("c.t")); // -> ["c.t", index: 0, input: "c.t", groups: undefined]

/*
Other metacharacters are * (asterisk), + (plus) and ? (question mark).

They indicate how many times in a row the preceding character (literal or metacharacter) can occur.

The + character means that it may occur once or more times, the * character is zero or more times, and the ? character zero or exactly once:
*/

let re11 = /o*ps/;
console.log(re11.exec("ps")); // -> ["ps", index: 0, input: "ps", groups: undefined]
console.log(re11.exec("ops")); // -> ["ops", index: 0, input: "ops", groups: undefined]
console.log(re11.exec("He said: ooops!")); // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]
let re22 = /o+ps/;
console.log(re22.exec("ps")); // -> null
console.log(re22.exec("ops")); // -> ["ops", index: 0, input: "ops", groups: undefined]
console.log(re22.exec("He said: ooops!")); // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]
let re3 = /o?ps/;  /// strange, isnt it?
console.log(re3.exec("ps")); // -> ["ps", index: 0, input: "ps", groups: undefined]
console.log(re3.exec("ops")); // -> ["ops", index: 0, input: "ops", groups: undefined]
console.log(re3.exec("He said: ooops!")); // -> ["ops", index: 11, input: "He said: ooops!", groups: undefined]

/*
The metacharacter | (vertical bar) is treated as an alternative.

It separates two strings of characters, one of which must appear in the tested string.

If the alternative only applies to the selected group of pattern characters, we will mark it using parentheses.

Look at the code below:
*/

let re12 = /ca|ut/;
console.log(re12.exec("cattle")); // -> ["ca", index: 0, input: "cattle", groups: undefined]
console.log(re12.exec("haircut")); // -> ["ut", index: 5, input: "haircut", groups: undefined]
console.log(re12.exec("city")); // -> null
let re13 = /c(a|u)t/;
console.log(re13.exec("cattle")); // -> ["cat", "a", index: 0, input: "cattle", groups: undefined]
console.log(re13.exec("haircut")); // -> ["cut", "u", index: 4, input: "haircut", groups: undefined]
console.log(re13.exec("city")); // -> null

/*
The use of a curly bracket makes it possible to enter the exact number of repetitions of the preceding character (literal or metacharacter).

In the following example, we will use one more metacharacter to indicate a whitespace (which can be replaced by a space, tabulation, new line, etc.).

This metacharacter is \s.

The backslash at the beginning is an integral part of this metacharacter.

Look at the code below:
*/

let rep = /\so{2,3}ps/; // repeats 'o' two or three times 
console.log(rep.exec("He said: ops!")); // -> null
console.log(rep.exec("He said: ooops!")); // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]
console.log(rep.exec("He said:ooops!")); // -> null
console.log(rep.exec("He said: ooooooooops!")); // -> null

/*
If at a specific position of the pattern you want to match exactly one literal from a certain limited set, 
insert a set of these literals enclosed by square brackets in this position.

Thus, at the position where the square bracket is located, exactly one letter from among those mentioned in brackets must be matched.

At the beginning of the set, you can insert the ^ (caret) metacharacter.

This will mean that any character that is not included in the set may appear in that position.

Look at the code below:
*/

let re10 = /c[aiu]t/;
console.log(re10.exec("cattle")); // -> ["cat", index: 0, input: "cattle", groups: undefined]
console.log(re10.exec("haircut")); // -> ["cut", index: 4, input: "haircut", groups: undefined]
console.log(re10.exec("city")); // -> ["cit", index: 0, input: "city", groups: undefined]
let re20 = /c[^au]t/;
console.log(re20.exec("cattle")); // -> null
console.log(re20.exec("haircut")); // -> null
console.log(re20.exec("city")); // -> ["cit", index: 0, input: "city", groups: undefined]

/*
The appearance of the \d metacharacter means that any number can be matched at this position.

Look at the code below:
*/

let re0 = /id\d+/;
console.log(re0.exec("My ids.")); // -> null
console.log(re0.exec("My id 0")); // -> null
console.log(re0.exec("id60001")); // -> ["id60001", index: 0, input: "id60001", groups: undefined]

/*
The last important metacharacters are ^ (caret) and $ (dollar sign).

They indicate the beginning and end of a string.

Note that the caret used inside the square brackets, which denote a set of literals, has a completely different meaning.

Look at the code below:
*/

let re01 = /^(abc\s){3}$/;
console.log(re01.exec("abc abc abc ")); // -> ["abc abc abc ", "abc ", index: 0, input: "abc abc abc ", groups: undefined]
console.log(re01.exec("abc abc abc abc ")); // -> null
console.log(re01.exec("abc abcabc")); // -> null
