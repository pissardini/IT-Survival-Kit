# Object-Oriented Programming in PHP

## Main models

* **Class**:

``` 
    class Name
    {
        private $attribute1;
        private $attribute2;

        public function __construct($variable1,$variable2) 
        {

            $this->$attribute1 = $variable1;
            $this->$attribute2 = $variable2;
        }

        public function nameOfFunction():type_return //camel case
        {
        }
    }
```

* **Object**:
``` 
$variable = new Name();
```

* **Access methods**:
``` 
$variable->nameOfFunction();
```

##Useful classes
###Database class
```
    class Name
    {
        private $conection;

        public function __construct()
        {

            try{
                $this->conection = new PDO('mysql:host=mysql;dbname=example','root','1234')
            } catch (Exception $e){
                echo $e-> getMessage();
                die();
            }
        }

        public function list():array {
            $sql      = "select * from table;"
            $elements = [];

            foreach ($this->connection->query($sql) as $key=>$value){
                array_push($elements,$value);
            }
            return $elements;
        }

        public function insert (string $variable):int{ 

            $sql = "insert into table values (?)";
            $prepare = $this->conexao->prepare($sql);
            $prepare->bindParam(1, $variable);
            $prepare->execute();
            return $prepare->rowCount();

        }

        public function update(string $variable1, int $variable2):int{
            $sql = 'update table set field = ? where id=?';
            $prepare = $this->connection->prepare($sql);
            $prepare->bindParam(1,$variable1);
            $prepare->bindParam(2,$variable2);
            $prepare->execute();
            return $prepare->rowCount();
        }

        public function delete(int $id):int{
            $sql = 'delete from table where id=?';
            $prepare = $this->connection->prepare($sql);
            $prepare->bindParam(1,$id);
            $prepare->execute();
            return $prepare->rowCount();
        }
    }
```