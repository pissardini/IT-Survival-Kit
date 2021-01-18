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