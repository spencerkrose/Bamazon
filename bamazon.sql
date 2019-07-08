CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL(5,2) NOT NULL,
stock_quantity INTEGER NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products
VALUES (1,"Kibble", "Pets", 10, 15);

INSERT INTO products
VALUES (2,"Umbrella", "Home", 50, 10);

INSERT INTO products
VALUES (3,"Pepsi","Food", 3, 25);

INSERT INTO products
VALUES (4,"League of Legends", "Electronics", 60, 10);

INSERT INTO products
VALUES (5,"Surfboard", "Sports", 100, 5);

INSERT INTO products
VALUES (6,"Dog Treats", "Pets", 15, 10);

INSERT INTO products
VALUES (7,"Juno 2: The Rise of Cera", "Electronics", 25, 3);

INSERT INTO products
VALUES (8,"Life-sized Shrek", "Home", 200, 5);

INSERT INTO products
VALUES (9,"Bean Bag", "Home", 50, 20);

INSERT INTO products
VALUES (10,"Cheese", "Food", 5, 20);

SELECT*FROM products;