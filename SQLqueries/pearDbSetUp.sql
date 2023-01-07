CREATE DATABASE pearDB;

USE pearDB;

/*UNIQUEIDENTIFIER is also refferd to as GUIDs (Globally Unique Identifier)*/
CREATE TABLE Users (
    id UNIQUEIDENTIFIER PRIMARY KEY default NEWID(),
    userName varchar(255) NOT NULL,
    password varchar(30),
);
GO

INSERT INTO Users ( userName, password) values ('Admin', 'P@ssw0rd');
GO

SELECT * FROM users; 

