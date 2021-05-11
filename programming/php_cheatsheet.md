# PHP Cheatsheet 

## Basic Structure 

### Basic file 

* Using a file with extension .php: 

```
<?php
    //script 
?>
```

### Basic commands

```
echo "Hello world!<br>"; //print a value
print "Hello world!<br>"; //print and return a value
var_dump($x); //show type of a variable 
```

### Variables and Constants

* **Basic Variables**:

```
$txt = "Hello world!";
$x = 5;
$y = 10.5;
$x = true;
```

* **Basic Constants**:
```
define("CONSTANT_NAME", value);
echo CONSTANT_NAME
```

* **Arrays**:
```
$colors = array("red","yellow","blue");
```

*  Loops through a block of code for each element in an array:

```
foreach ($colors as $value){
	echo $value;
}
```

* Output keys and values of array:

```
$colors = array("1"=>"red","2"=>"yellow","3"=>"blue");

foreach ($colors as $key=>$value){
	echo "$key = $value";
}
```

## Functions 

* **Basic model**: 

```
function functionName($argument1 = value, 
		      $argument2 = value) {
  //code;
  return $output;
}

functionName();
```

## Math functions

* **abs()**: returns the absolute value.
* **max()**: returns the highest value of a list.
```
echo(max(0, 100, 30, 20, 8, 21));  // returns 100
```
* **min()**: returns the lowest value of a list.
```
echo(max(0, 100, 30, 20, 8, 21));  // returns 0
```
* **pi()**: returns the value of pi.
* **rand()**: generates a random number.
```
echo(rand(10, 100));
```
* **round()**: rounds a floating-point number.
* **sqrt()**: returns the square root of a number.

## Strings 

* **strlen()**: returns the length of a string.
```
echo strlen("Hello world!");
```
* **strpos()**: searches for a specific text within a string and returns the index of first character.
```
echo strpos("Hello world!", "world"); //outputs index 6
```

* **strrev()**: reverses a string.

* **str_replace()**: replace text within a string.
```
echo str_replace("world", "Segat", "Hello world!");// outputs Hello Segat!
```

* **str_word_count()**: returns the number of words in a string.
