# PHP Cheatsheet 

## Basic Structure 

### Basic file 

* Using a file with extension .php: 

```
<?php
    //script 
?>
```

### Including files 
```
include directory/name_file.php
```

### Basic commands

```
echo "Hello world!<br>";  //print a value
print "Hello world!<br>"; //print and return a value
var_dump($x);             //show type of a variable 
empty($x);                //determines if a variable is empty
unset($x);                //destroys a given variable
```

### Variables and Constants

* **Basic Variables**:

```
$txt = "Hello world!";
$x = 5;
$y = 10.5;
$x = true;
```

* ** Test types of variables**: 
```
is_​bool($x);    //returns true if x is bool, false otherwise.
is_float ($x);  //returns true if x is float, false otherwise.
is_int ($x);    //returns true if x is integer, false otherwise.
is_​string($x);  //returns true if x is string, false otherwise.
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
#### Functions

```
isset($var);  //determines if a variable is considered set
unset($var);  //destroys the specified variables.
```

## Classes and Objects

### Basic model
```
<?php
class Fruit {
  // properties
  private $name;
  private $color;

  public function __construct($name, $color) {
        $this->name = $name;
        $this->color = $color;
    }
  // methods
  function set_name($name) {
    $this->name = $name;
  }
  function get_name() {
    return $this->name;
  }
}

$apple = new Fruit();
$banana = new Fruit();
$apple->set_name('Apple');
$banana->set_name('Banana');

echo $apple->get_name();
echo $banana->get_name();
?>
```

## Basic Functions 

* **Basic model**: 

```
function functionName($argument1 = value, 
		      $argument2 = value) {
  //code;
  return $output;
}

functionName();
```

## Datetime Functions

```
<?php
echo "Current year is " . date("Y") . "<br>";
echo "Today is " . date("Y/m/d") . "<br>";
echo "Today is " . date("Y.m.d") . "<br>";
echo "Today is " . date("Y-m-d") . "<br>";
echo "Today is " . date("l");
echo "The time is " . date("h:i:sa");
?>
```
## Encoding 

```
mb_detect_encoding($string);  // detects character encoding
mb_convert_encoding($string); //converts the character encoding of string to to_encoding 
utf8_decode ($string);        //converts the string string from the UTF-8 encoding to ISO-8859-1
utf8_encode ($string);        //converts the string string from the ISO-8859-1 encoding to UTF-8.
```

## Exceptions

* **Basic model**:
```
function inverse($x) {
    if (!$x) {
        throw new Exception('Division by zero.');
    }
    return 1/$x;
}

try {
    echo inverse(5);
} catch (Exception $e) {
    echo 'Error message: ',  $e->getMessage(), "\n";
} finally {
    //A finally block may also be specified after or instead of catch blocks. 
}
```

## Errors messages 

```
error_reporting(0);									// turn off all error reporting
error_reporting(E_ERROR | E_WARNING | E_PARSE);		// report simple running errors
error_reporting(E_ALL ^ E_NOTICE);					// report all errors except E_NOTICE
error_reporting(E_ALL);								// report all PHP errors
```

## Network functions

* **header location**: move the visitor to another page in PHP.
```
header("location:index.php");
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

## PHP Data Objects (PDO)

### Connection
```
<?php
$servername = "localhost";
$username = "username";
$password = "password";

$pdo = null; 

try {
  $pdo = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);
  // set the PDO error mode to exception
  $pso->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(Exception $e) {
  echo "Connection failed: " . $e->getMessage();
  die();
}
?>
```

### Select 
```
<?php


$pdo   = require 'connection.php'; 
$sql   = $pdo->query("SELECT name, user FROM login;");


foreach ($pdo->query($sql) as $key => $value){
    echo "Name: {$value['name']} - User: {$value['user']}<br />";
}
?>
```

```
<?php
/* Execute a prepared statement by passing an array of values */
$sql = 'SELECT name, colour, calories
    FROM fruit
    WHERE calories < :calories AND colour = :colour';
$sth = $dbh->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
$sth->execute(array(':calories' => 150, ':colour' => 'red'));
$red = $sth->fetchAll();
$sth->execute(array(':calories' => 175, ':colour' => 'yellow'));
$yellow = $sth->fetchAll();
?>
```

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

## Super Globals

* **Get**: super global variable which is used to collect form data after submitting an HTML form with method="get".
** html page ** 
```
<html>
<body>

<form action="get.php" method="get">
Name: <input type="text" name="name"><br>
E-mail: <input type="text" name="email"><br>
<input type="submit">
</form>

</body>
</html>

```

** get.php** 

```
<html>
<body>

Welcome <?php echo $_GET["name"]; ?><br>
Your email address is: <?php echo $_GET["email"]; ?>

</body>
</html>
```


* **Post**: super global variable which is used to collect form data after submitting an HTML form with method="post".

** html page ** 
```
<html>
<body>

<form action="post.php" method="post">
Name: <input type="text" name="name"><br>
E-mail: <input type="text" name="email"><br>
<input type="submit">
</form>

</body>
</html>

```

** post.php** 

```
<html>
<body>

Welcome <?php echo $_POST["name"]; ?><br>
Your email address is: <?php echo $_POST["email"]; ?>

</body>
</html>
```

* **Session**: superglobal which stores information (in variables) to be used across multiple pages.

```
<?php
// Start the session
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
$_SESSION["color"] = "green";
?>

</body>
</html>
```

Another page: 

```
<?php
// Start the session
session_start();
?>
<?php
$_message = isset($_SESSION["color"])? $_SESSION["color"]:'';
if (!empty($message))
{
 echo $message; 
}
?>
```
