-- create database 
-- create a user and password
-- grants permission on examio

SET GLOBAL validate_password.policy=LOW;
CREATE DATABASE IF NOT EXISTS examio_db;
CREATE USER IF NOT EXISTS 'examio'@'localhost' IDENTIFIED BY 'examio_v1.0';
GRANT ALL PRIVILEGES ON examio_db.* TO 'examio'@'localhost';
GRANT SELECT ON performance_schema.* TO 'examio'@'localhost';
FLUSH PRIVILEGES;
