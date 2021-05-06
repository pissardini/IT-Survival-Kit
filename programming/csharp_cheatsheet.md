# C# Cheatsheet

## Contents 
- [Basic model](#basic-model)
- [Classes](#classes)
  * [Inheritance](#inheritance)
  * [Interface](#interface)
- [Conditional and Loop Commands](#conditional-and-loop-commands)
- [Enums](#enums)
- [Exceptions](#exceptions)
- [Methods](#methods)
- [Variables](#variables)
  * [Declaring variables](#declaring-variables)
  * [Types](#types)
    + [Type casting](#type-casting)
    + [Arrays](#arrays)
## Basic model 

```
using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");    
    }
  }
}
```

* **User input and WriteLine**:

```
Console.WriteLine("Enter username:");
string userName = Console.ReadLine();
```

 Get a integer number:
```
Console.WriteLine("Enter a number:");
string number = Convert.ToInt32(Console.ReadLine());
```
## Classes 

```
class Name {
	[public|private|protected|internal] type name_variable;
	
	public Name(){
	
	} //constructor
}
```

### Inheritance

```
class NameChild : NameParent
{
  ...
}
```

### Interface

```
public interface INameInterface
{
  string Method {get; set;}
}
```

Implementation:

```
public class MyClass : INameInterface
{
	public string Method(){
	}
}
```

## Conditional and Loop Commands

* **if**:

```
if (condition) 
{
  // block of code
}
else if (condition)
{
  // block of code
}else{
  // block of code
}
```

* **switch**:

```
switch(expression) 
{
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
    break;
}
```

* **while**:

```
while (condition) 
{
  // code block to be executed
}
```

* **for**:

```
for (statement 1; statement 2; statement 3) 
{
  // code block to be executed
}
```

## Enums 

```
enum Season
{
    Spring,
    Summer,
    Autumn,
    Winter
}
```

## Exceptions

* **Basic model**:

```
try 
{
  //  Block of code
}
catch (Exception e)
{
  //  Block of code to handle errors
  Console.WriteLine(e.Message);
}
finally
{
  //Execute code (after try...catch) regardless of the result.
}
```

* **throw**:

```
throw new NameofTypeException("Error text");
```

## Methods 

```
[static|public] [void|int|string|float] MyMethod(name_type parameter1 = value,name_type parameter2 = value) 
{
  return parameter;
}
```

* **Overloading**:

```
int MyMethod(int x) { } 
float MyMethod(float x) { } 
```

## Variables

### Declaring variables 

```
type variableName = value;
```

### Types

* **int** - stores integers numbers.
* **double** - stores floating point numbers.
* **char** - stores single characters.
* **string** - stores text.
* **bool** - stores values with two states: true or false

#### Type casting 

```
Convert.ToString(myInt);    // convert int to string
Convert.ToDouble(myInt);    // convert int to double
Convert.ToInt32(myDouble);  // convert double to int
Convert.ToString(myBool);   // convert bool to string
```

#### Arrays

```
name_type[] variable;
```

* Create a array with values:

```
string[] cars = {"BMW", "Ford", "VW"};
int[] numbers = {10, 20, 30, 40};
```

* Access element of array:

```
Console.WriteLine(cars[2]);
```

* Change values of element:

```
cars[2] = "Toyota";
```
