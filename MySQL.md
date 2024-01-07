# Database 
A database is an organized collection of data, so that it can be easily accessed and managed.

    We need a database - 
    To keep records of clients, staff, etc.
    To keep sales records 
    To keep develop records 
    To keep redords of activites and interventions 


# SQL 
SQL stands for structured query language
It is a standard language used to communicate with database.
It can access, retrive and manipulate data in database.
It stores data in tabular form.


# DBMS 
Database Management System
In order to manage, retrive, store and maintain the datavse, a system is required, that is called the database management ststem.

# RDBMS
Relational Database Management System
It is an advanced version of a database ststem that allows you to arrange, maintain, retrive and manage database in a tabular format. It is one of the most used tool by data analysts or database administrators for handling large amounts of data.
Tables in a relational database can be linked togther.


# MySQL 
It is a database management system.
It provides a UI for us to access and interact with the database.
MySQL is a software and not a programming language, hance it does not have any commands or particular format.
It uses SQL to query the data from the databases.


## database in MySQL

1. To see all the databases list 
```
show databases;
```

2. To create a new database
```
create database <database_name>;
```

3. To drop or delete a database 
```
drop database <database_name>;
```

4. To use a database 
```
use <database_name>
```


## Datatypes in SQL 

1. Numeric Data Type
```
INT : We can store whole number in it.
 ```
```
FLOAT (M, D) : We can store decimal number in it. (approximate)
```
```
DECIMAL (M, D) : decimal number (precise)
```

2. Non Numeric Data Type 
```
CHAR (N) : fixed length character
```
```
VARCHAR (N) : varying length character 
```
```
BOOLEAN : true or false value
```
```
ENUM ('MALE', 'FEMALE') : value from defined list
```

3. Date and Time Types 
```
DATE : Date(YYYY-MM-DD)
```
```
TIME : Time(HH-MM-SS)
```
```
DATETIME : Date and the Time (YYYY-MM-DD HH-MM-SS)
```
```
YEAR : Year(YYYY)
```

## Table 
1. To see all the tables in used database
```
show tables;
```

2. To create a new table in database
```
create table <table_name> (
    <column2> <datatype> constraints;
    <column3> <datatype> constraints;
    <column1> <datatype> constraints;
);

create table students(
	name varchar(256),
    roll_number int(6),
    age int(3)
);
```
constraints is optional but column name and datatype are required.

3. To see the table's details, with datatypres and constraints
```
describe <table_name>;
```

4. To delete or drop a table 
```
drop table <table_name>;
```

5. To insert data in a table 
```
insert into <table_name> <col1, col2, ...>
value(val1, val2, ...);

insert into students (name, roll, age)
values ('pink', null, 20);
```



## Constraints
constraints is optional but column name and datatype are required.

SQL constraints are used to specify rules for a data in a table.
It is like validation or to specifying the data types in SQL table for a particular column.

```
not null :
We can't leave that field empty. If we will leave that field empty, it will through error.

create table students(
name varchar(256) not null,
roll int unique,
age int
);
```
```
unique : 
All values in a particular must be unique.

create table students(
name varchar(256) not null,
roll int unique,
age int
);
```
```
primary key : 
Primary key is a field which can uniquely identify each row in a table.
And this constraints is used to specify a field in a table as primary key.
One table can only contain one column of primary key.
This will be the combination of 'notnull' and 'unique'.

create table students (
name varchar(256),
roll int,
primary key (roll)
);
```
```
foreign key : 
It is used to link two tables together.
It is a column whose value match the value of another table's primary key column.
A table can have multiple column of foreign key.
Foreign key also prevents actions that will destroy relations between two tables.

create table car_brands (
	id int auto_increment,
	name varchar(25),
    primary key(id),
    country varchar(25)
);

create table car_model ( 
	id int auto_increment,
    name varchar(25),
    brand_id int,
    primary key (id),
    foreign key(brand_id) references car_brands(id)
);
```
```
check : 
This constraint helps to validate of a column to meet a particular condition. That is, it helps to ensure that the value stored in a column meets a specific condition.
Ex - Age column has check(age > 18) constraint

create table students (
	name varchar (25),
    age int,
    check (age > 18)
);
```
```
default :
To provide a default value.
If we leave this field empty, then this will be filled by the default value.

create table students (
	name varchar (25),
    age int default 15
);

insert into students (name)
values ('billi');
```


## Modifying SQL table 

Whenever we want to modify schema in a table then need to run such commands 
```
alter table <table_name>
<optional_command_for_modifictation>
```

1. To add a new column 
```
alter table <table_name>
add <col_name> <datatype> <constraint>;
```

2. To delete a column from a table 
```
alter table <table_name>
drop <col_name>;
```

3. To modify a column 
```
alter table <table_name>
modify <col_name> <datatype> <constraint>;
```