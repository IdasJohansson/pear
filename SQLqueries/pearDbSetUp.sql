CREATE DATABASE pearDB;

USE pearDB;

/*UNIQUEIDENTIFIER is also refferd to as GUIDs (Globally Unique Identifier)*/
CREATE TABLE Users (
    id UNIQUEIDENTIFIER PRIMARY KEY default NEWID(),
    userName VARCHAR(255) NOT NULL,
    password VARCHAR(30),
);
GO

CREATE TABLE Warehouse(
      id int IDENTITY PRIMARY KEY,
      city VARCHAR(255)
); 

CREATE TABLE Products(
    id VARCHAR(30) Unique,
    name VARCHAR(255), 
    price int 
    PRIMARY KEY(id)
); 

CREATE TABLE Delivery(
    id UNIQUEIDENTIFIER PRIMARY KEY default NEWID(),
    date DATETIME NOT NULL DEFAULT (GETDATE()), 
    productId VARCHAR(30), 
    quantity INT, 
    warehouseId INT, 
    userId UNIQUEIDENTIFIER, 
    FOREIGN KEY (userId) REFERENCES Users(id), 
    FOREIGN KEY (warehouseId) REFERENCES Warehouse(id), 
    FOREIGN KEY (productId) REFERENCES Products(id), 
); 

CREATE TABLE Logger(
    id UNIQUEIDENTIFIER PRIMARY KEY default NEWID(), 
    date DATETIME NOT NULL DEFAULT (GETDATE()), 
    userId UNIQUEIDENTIFIER, 
    deliveryId UNIQUEIDENTIFIER, 
    FOREIGN KEY (userId) REFERENCES Users(id), 
    FOREIGN KEY (deliveryId) REFERENCES Delivery(id), 
); 
GO

CREATE TRIGGER LogTrigger
ON Delivery
AFTER INSERT
AS
    BEGIN 
    DECLARE
    @userId UNIQUEIDENTIFIER,
    @deliveryId UNIQUEIDENTIFIER
    SELECT @userId = INSERTED.userId, 
    @deliveryId = INSERTED.id
    FROM INSERTED
    INSERT INTO Logger(userId,deliveryId) VALUES(@userId, @deliveryId)
END
GO

INSERT INTO Delivery ( productId, quantity, warehouseId, userId) values ('P003', 10000,1,'0460476b-60c9-48e3-9026-561302e7fa59' );
INSERT INTO Delivery ( productId, quantity, warehouseId, userId) values ('P003', 80000,2,'0460476b-60c9-48e3-9026-561302e7fa59' );
INSERT INTO Delivery ( productId, quantity, warehouseId, userId) values ('P002', 10000,3,'0460476b-60c9-48e3-9026-561302e7fa59' );
GO

INSERT INTO Users ( userName, password) values ('Admin', 'P@ssw0rd');
GO

INSERT INTO Warehouse (city) values ('Cupertino');
INSERT INTO Warehouse (city) values ('Norrköping');
INSERT INTO Warehouse (city) values ('Frankurt');
GO

INSERT INTO Products ( id, name, price) values ('P001', 'jTelefon', 8900);
INSERT INTO Products ( id, name, price) values ('P002', 'jPlatta', 5700);
INSERT INTO Products ( id, name, price) values ('P003', 'Päronklocka', 11000);
GO

SELECT * FROM users; 
SELECT * FROM warehouse; 
SELECT * FROM products; 
SELECT * FROM delivery; 
SELECT * FROM logger; 


