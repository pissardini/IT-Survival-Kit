# Basic commands in PHP

## Database
* **connection**: using PDO.
```
$pdo = null;

try{
    $pdo = new PDO('mysql:host=mysql;dbname=exemplo','root','1234')
} catch (Exception $e){
    echo $e-> getMessage();
    die();
}
```
* **list**:
```
$sql = "select * from table;"

foreach ($pdo->query($sql) as $key=>$value){
    echo $value['id'].' '.$value['descricao'];
}
```
* **insert**:
```
$sql = "insert into table values (?)";
$prepare = $pdo ->prepare($sql);
$prepare->bindParam(1,$variable);
$prepare->execute();
```
* **update**:
```
$sql = 'update table set field = ? where id=?';
$prepare = $pdo ->prepare($sql);
$prepare->bindParam(1,$variable1);
$prepare->bindParam(2,$variable2);
$prepare->execute();
```

* **delete**:
```
$sql = 'delete from table where id=?';
$prepare = $pdo->prepare($sql);
$prepare->bindParam(1,$variable);
$prepare->execute();
```

## Datetime
* **basic datetime**: using DateTime class. 
```
    $data = new DateTime();
    $data -> format('d-m-y');
    $data -> format('d-m-y H:i:s');
```
* **add datetime**: using DateTime class. 
```
    $interval = new DateInterval('PT5M');
    $data -> add($interval);
```
* **subtract datetime**: using DateTime class. 
```
$interval = new DateInterval('P5Y');
$data -> sub($intervalo);
```

## Exceptions
* **basic exception**: 
```
throw new Exception("Essa é uma exceção");
```

* **handling exceptions**: 
```
try {
        //tests for catching a potential exception
} catch (Exception $e){
        echo  $e -> getMessage();
        //defines how to respond to a thrown exception
} finally {
    //will always be executed after the try and catch blocks
}
```

## Functions
* **standard model**: 
``` 
function Name(type $param1,type $param2): type_return{
    //commands
}
```

## Import files 
* **include**: includes and evaluates the specified file.
```
include "directory/file.php";
```

* **require**:identical to include except upon failure it will also produce a fatal E_COMPILE_ERROR level error.
```
require "directory/file.php";
```

## Outputs
* **echo**: output one or more strings. Return: void.
``` 
echo "Hello World";
```
* **print**: output a string. Return: int.
``` 
print "Hello World";
```
* **print_r**: prints human-readable information about a variable. Return:string|bool.
``` 
print_r ($variable);
```

* **var_dump**: shows information about a variable. Return:void.
``` 
var_dump($variable);
```


## Sessions
* **session_start**: starts new or resume existing session.
``` 
session_start();
```

### Get
* **$_GET['name']**: gets a "get type" data.
``` 
$variable = $_POST['aome'];
```

### Post
* **$_POST['name']**: gets a post data.
``` 
$variable = $_POST['aome'];
```
