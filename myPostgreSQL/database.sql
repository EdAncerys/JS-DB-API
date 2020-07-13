CREATE DATABASE user_database;

--\l list all databases 
--\c into user_database

CREATE TABLE users
(
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(60),
  password VARCHAR(60)
);