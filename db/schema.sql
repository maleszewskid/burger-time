DROP DATABASE IF EXISTS burger_sql;

CREATE DATABASE burger_sql;
USE burger_sql;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);