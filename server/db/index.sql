CREATE DATABASE company;


CREATE TABLE IF NOT EXISTS employees (
	id serial,
	name varchar(50) NOT NULL,
	gender varchar(7) NOT NULL,
	department varchar(50) NOT NULL,
	about text,
	PRIMARY KEY(id)
)