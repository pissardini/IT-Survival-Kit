# SQL Server Cheat Sheet

## Data Types

### String Data Types

* **char(n)** :	fixed width character string (8,000 characters)
* **varchar(n)**: variable width character string (8,000 characters)
* **varchar(max)**: variable width character string (1,073,741,824 characters)
* **text** variable width character string (2GB of text data)

### Numeric Data Types 

* **bit**: integer (0, 1, or NULL	)
* **tinyint**: whole numbers (0 to 255)
* **smallint**: whole numbers (-32,768 and 32,767)
* **int** : whole numbers (-2,147,483,648 and 2,147,483,647)
* **bigint**: whole numbers (-9,223,372,036,854,775,808 and 9,223,372,036,854,775,807)
* **decimal(p,s)**: fixed precision and scale numbers (-10^38 +1 to 10^38 –1). The p parameter indicates the maximum total number of digits (p must be a value from 1 to 38. Default = 18). The s parameter indicates the maximum number of digits stored to the right of the decimal point (s must be a value from 0 to p. Default=0).
* **money**: monetary data (-922,337,203,685,477.5808 to 922,337,203,685,477.5807)
* **float(n)**:	floating precision number (-1.79E + 308 to 1.79E + 308).
* **real**: floating precision number data (-3.40E + 38 to 3.40E + 38)

### Datetime Data Types

* **datetime**: date with time(from January 1, 1753 to December 31, 9999)
* **date**    : store a date only (from January 1, 0001 to December 31, 9999)
* **time**    : store a time only.
* **timestamp**: stores a unique number that gets updated every time a row gets created or modified. The timestamp value is based upon an internal clock and does not correspond to real time. Each table may have only one timestamp variable.	


## Create and Drop Database

* **Create database**: `CREATE DATABASE databasename;`
* **Drop database**: `DROP DATABASE databasename;`

## Create table 

```
CREATE TABLE table_name (
    column1 INT PRIMARY KEY [IDENTITY(1,1)],
    column2 datatype [NOT NULL][UNIQUE] [DEFAULT value],
    column3 datatype [NOT NULL][UNIQUE] [DEFAULT value],
    [CONSTRAINT PK_name PRIMARY KEY (column_a,column_b)],
    [CONSTRAINT FK_name FOREIGN KEY (columnx) REFERENCES another_table(column_id)]
    [CONSTRAINT CHK_name CHECK (column_x>=x AND column_y='y')]
);
```

* **Create Table Using Another Table**:

```
CREATE TABLE table_name AS 
  [SELECT ...];
```

## Drop Table 

```
DROP TABLE table_name;
```

## Alter table 

* **Add Column**:

```
ALTER TABLE table_name
ADD column_name datatype;
```

* **Drop Column**:
```
ALTER TABLE table_name
DROP COLUMN column_name;
```

* **Change type of column**:
```
ALTER TABLE table_name
ALTER COLUMN column_name datatype;
```

* **Add Primary Key**:

```
ALTER TABLE table_name
ADD PRIMARY KEY (column);
```

Or:

```
ALTER TABLE table_name
ADD CONSTRAINT PK_name PRIMARY KEY (column_a,column_b);
```

* **Drop Primary Key**:

```
ALTER TABLE table_name
DROP CONSTRAINT PK_name;
```

* **Add Foreign Key**:
```
ALTER TABLE table_name
ADD CONSTRAINT FK_name
FOREIGN KEY (column_x) REFERENCES another_table(column_y);
```

* **Drop Foreign Key**:
```
ALTER TABLE table_name
DROP CONSTRAINT FK_name;
```

* **Add Check**:
```
ALTER TABLE table_name
[ADD CHECK (column>=value)]
[ADD CONSTRAINT CHK_name CHECK (column_a>=value AND column_b='value');
;
```

* **Remove Check**:
```
ALTER TABLE table_name
DROP CONSTRAINT CHK_name;
```

## Inserting data

```
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

Or:
```
INSERT INTO table_name
VALUES (value1, value2, value3, ...);
```

## Deleting data

```
DELETE FROM table_name WHERE condition;
```

## Updating data

```
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

## Selecting data

### General model

```
SELECT column1 [AS alias_name], column2 [AS alias_name],...
FROM table_name
WHERE conditions;
```

* Finds any values that start with "a": 
```
WHERE column LIKE 'a%'
```

* Finds any values that end with "a": 
```
WHERE column LIKE '%a'
```

*Finds any values that have "rodrigo" in any position:
```
WHERE column LIKE '%rodrigo%'
```

* **In**:

```
column_name IN (value1, value2, ...);
```

* **Between**:

```
column_name BETWEEN (value1, value2, ...);
```

* **Distinct**: returns only distinct (different) values.
```
SELECT DISTINCT column1, column2,...
FROM table_name
[WHERE conditions]
[ORDER BY column_x ASC |DESC];
```

* **Top**:
```
SELECT TOP number column_name(s)
FROM table_name
WHERE condition;
```

* **Aggregation Functions**:
```
SELECT [MAX|MIN|AVG|COUNT|SUM] (column_name)
FROM table_name
WHERE condition;
```

## Views 

* **Creating a view**:

```
CREATE [OR REPLACE] VIEW view_name AS
SELECT column1, column2, ...
[WHERE conditions]
[ORDER BY column_x ASC |DESC];
```

* **Querying the view**:
```
SELECT * FROM [view_name];
```

* **Dropping view**:
```
DROP VIEW view_name;
```

## Maintenance
* **Show databases**: `SHOW DATABASES;`
* **Backup databases**: `BACKUP DATABASE databasename TO DISK = 'filepath' [WITH DIFFERENTIAL];`
