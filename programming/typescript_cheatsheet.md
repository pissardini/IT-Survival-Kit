# TypeScript Cheatsheet 

## Basic usage 

* Installing TypeScript npm: 

```
npm install -g typescript
```

*  Compiling TypeScript

```
tsc somefile
```

## Basic git ignore 
```
.cache
dist 
```

## Basic types

* String: 
```
let Name: string= "John Doe";
```

* Number:
```
let price: number = 20.35;
```

* Boolean: 

```
let marked: boolean = false;
```

* Date: 

```
let orderDate: Date = new Date(2017, 2, 9);
```

* Any: 

```
let something: any = "Anything";
```

* Enum: 

```
enum Color {Red, Green, Blue};
```

* Array: 

```
let cards: string[] = ['Visa', 'Mastercard'];
```

* Null: 

```
let orderId: number = null;
```

* Tuple:

```
let rates: [string, number];
```

* Void: 

```
function log(msg: string): void {
  console.log(msg);
}
```

Const:

```
const pi: number = 3.141592653;
```

## Functions 

```
function sum (a: number, b: number){
	return a + b ; 
}
```

## Interfaces

* Basic usage: 
```
interface IAnimal {
	name: string;
	type: 'terrestrial' | 'aquatic';
}

const animal: IAnimal { 
	name: 'elephant',
	type: 'terrestrial'
}
```

* Extending:

```
interface IAnimal {
	name: string;
	type: 'terrestrial' | 'aquatic';
	executeSound(soundDecibels: number):void;
}

interface IFeline extends IAnimal { 
	nightVision: boolean;

}

const feline: IFeline { 
	name: 'cat',
	type: 'terrestrial',
	nightVision: ,
	executeSound(soundDecibels) => (`$(soundDecibels) dB`)
}
```

## Types 

```
interface IAnimal {
	name: string;
	type: 'terrestrial' | 'aquatic';
	executeSound(soundDecibels: number):void;
}

interface IFeline extends IAnimal { 
	nightVision: boolean;

}

interface ICanine extends IAnimal { 
	size: 'small'|'medium'|'big';

}

type IDomestic = IFeline | ICanine;

const animal: IDomestic {
	name: 'dog',
	size: 'big',
	type: 'terrestrial'
	nightVision: true
}
```