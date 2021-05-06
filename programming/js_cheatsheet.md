# Javascript Cheatsheet

## Contents 
- [Basic model](#basic-model)
  * [Outputting data](#outputting-data)
- [Conditional and Loop commands](#conditional-and-loop-commands)
- [Events](#events)
  * [Keyboard](#keyboard)
  * [Mouse](#mouse)
- [Functions](#functions)
- [Global objects](#global-objects)
  * [Date](#date)
    + [Constructor](#constructor)
    + [Static Methods](#static-methods)
    + [Instance Methods](#instance-methods)
- [Variables](#variables)
  * [Numbers](#numbers)
    + [Methods](#methods)
  * [Strings](#strings)
    + [Escape Characters](#escape-characters)
    + [Methods](#methods-1)
  * [Object](#object)
  * [Arrays](#arrays)
    + [Methods](#methods-2)

## Basic model 

* **Including JS in HTML Page**

```
<script type="text/javascript">
//JS code goes here
</script>
```

* **Call JS from External File

```
<script src="myscript.js"></script>
```

### Outputting data

* **alert()**: output data in an alert box in the browser window.
* **confirm()**: shows a yes/no dialog and returns true/false depending on user click.
* **console.log()**: writes information to the browser console, good for debugging purposes.
* **document.write()**: writes directly to the HTML document.
* **prompt()**: create a dialogue for user input.

## Conditional and Loop commands

* **if**:

```
if (condition) {
   //statement1
} else if{
   //statement2
} else {
   //statement3
}
```

* **switch**:

```
switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the
    //result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the
    //result of expression matches valueN
    [break;]
  [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
}
```

* **for**:

```
var i = 0;
for (; i < 9; i++) {
    console.log(i);
    // more statements
}
```

* **for...of**:

```
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
```

* **while**:
```
let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
```

## Events 

### Keyboard

* **onkeydown**: when the user is pressing a key down.
* **onkeypress**: the moment the user starts pressing a key.
* **onkeyup**: the user releases a key.

### Mouse

* **onclick**: the event occurs when the user clicks on an element
* **oncontextmenu**: user right-clicks on an element to open a context menu
* **ondblclick**: the user double-clicks on an element
* **onmousedown**: user presses a mouse button over an element
* **onmouseenter**: the pointer moves onto an element
* **onmouseleave**: pointer moves out of an element
* **onmousemove**: the pointer is moving while it is over an element
* **onmouseover**: when the pointer is moved onto an element or one of its children
* **onmouseout**: user moves the mouse pointer out of an element or one of its children
* **onmouseup**: the user releases a mouse button while over an element

## Functions

```
function name(parameter1, parameter2, parameter3) {
    // code
}
```

## Global objects

### Date

#### Constructor
```
new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
```
#### Static Methods

* **Date.now()**:
```
const start = Date.now();
```

#### Instance Methods

* **getDate()**: returns the day of the month (1–31) for the specified date according to local time.
* **getDay()**:  returns the day of the week (0–6) for the specified date according to local time.
* **getFullYear()**: returns the year (4 digits for 4-digit years) of the specified date according to local time.
* **getHours()**: returns the hour (0–23) in the specified date according to local time.
* **getMilliseconds()**: returns eturns the milliseconds (0–999) in the specified date according to local time.
* **getMinutes()**: returns the minutes (0–59) in the specified date according to local time.
* **getMonth()**:  returns the month (0–11) in the specified date according to local time.
* **getSeconds()**: returns the seconds (0–59) in the specified date according to local time.
* **getTime()**: returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC. (Negative values are returned for prior times).
* **getUTCDate()**: the day (date) of the month in the specified date according to universal time (also available for day, month, full year, hours, minutes etc.)
* **setDate()**: set the day as a number (1-31)
* **setFullYear()**: sets the year (optionally month and day)
* **setHours()**: set the hour (0-23)
* **setMilliseconds()**: set milliseconds (0-999)
* **setMinutes()**: sets the minutes (0-59)
* **setMonth()**: set the month (0-11)
* **setSeconds()**: sets the seconds (0-59)
* **setTime()**: set the time (milliseconds since January 1, 1970)
* **setUTCDate()**: sets the day of the month for a specified date according to universal time (also available for day, month, full year, hours, minutes etc.)

## Variables

* **let**:  declares a block-scoped local variable, optionally initializing it to a value.
* **var**:  declares a variable, optionally initializing it to a value.
* **const**: declares a read-only named constant.


### Numbers
```
var age = 23
```

#### Methods

* **toExponential()** : returns the string with a rounded number written as exponential notation
* **toFixed()** : returns the string of a number with a specified number of decimals
* **toPrecision()** : string of a number written with a specified length
* **toString()** : returns a number as a string
* **valueOf()** :returns a number as a number

### Strings

```
var a = "init"
```

#### Escape Characters

* **\\**: backslash.
* **\b**: backspace.
* **\f**: form feed.
* **\n**: new line.
* **\r**: carriage return.
* **\t**: horizontal tabulator.
* **\v**: vertical tabulator.

#### Methods

* **charAt()**: returns a character at a specified position inside a string.
* **charCodeAt()**: gives you the Unicode of a character at that position.
* **concat()**: concatenates (joins) two or more strings into one.
* **fromCharCode()**: returns a string created from the specified sequence of UTF-16 code units.
* **indexOf()**: provides the position of the first occurrence of a specified text within a string.
* **lastIndexOf()**: same as indexOf() but with the last occurrence, searching backward.
* **match()**: retrieves the matches of a string against a search pattern.
* **replace()**: find and replace specified text in a string.
* **search()**: executes a search for a matching text and returns its position.
* **slice()**: extracts a section of a string and returns it as a new string.
* **split()**: splits a string object into an array of strings at a specified position.
* **substr()**:  similar to slice() but extracts a substring depending on a specified number of characters.
* **substring()**: also similar to slice() but can’t accept negative indices.
* **toLowerCase()**: convert strings to lower case.
* **toUpperCase()**: convert strings to upper case.
* **valueOf()**: returns the primitive value (that has no properties or methods) of a string object.

### Object
```
var person = {
    firstName:"John",
    lastName:"Doe",
    age:20,
    nationality:"German"
};
```

### Arrays

* **Creation**:

```
var fruit = ["Banana", "Apple", "Pear"];
```

#### Methods

* **concat()** : join arrays into one.
* **indexOf()** : returns the first position at which a given element appears in an array.
* **join()** : combine elements of an array into a single string and return the string.
* **lastIndexOf()** : gives the last position at which a given element appears in an array.
* **pop()** : removes the last element of an array.
* **push()** : add a new element at the end.
* **reverse()** : sort elements in a descending order.
* **shift()** : remove the first element of an array.
* **slice()** : pulls a copy of a portion of an array into a new array.
* **sort()** :sorts elements alphabetically.
* **splice()** : adds elements in a specified way and position.
* **toString()** : converts elements to strings.
* **unshift()** : adds a new element to the beginning.
* **valueOf()** : returns the primitive value of the specified object.

