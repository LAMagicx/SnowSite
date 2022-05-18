CREATE DATABASE IF NOT EXISTS SNOW_DB;
USE SNOW_DB

DROP TABLE IF EXISTS CATS;
CREATE TABLE IF NOT EXISTS CATS(
   name        VARCHAR(28) NOT NULL 
  ,description VARCHAR(30)
  ,image       VARCHAR(24) NOT NULL PRIMARY KEY
  ,price       NUMERIC(3,0) NOT NULL
  ,category   VARCHAR(9) NOT NULL
  ,stock       INTEGER  NOT NULL
);
INSERT INTO CATS(name,description,image,price,category,stock) VALUES ('Burton All Mountain Beginner',NULL,'burton-all.jpg',200,'snowboard',5);
INSERT INTO CATS(name,description,image,price,category,stock) VALUES ('Burton All Mountain Expert',NULL,'burton-custom.jpg',500,'snowboard',7);
INSERT INTO CATS(name,description,image,price,category,stock) VALUES ('Libtech All Mountain',NULL,'libtech-all.jpg',350,'pack',4);
INSERT INTO CATS(name,description,image,price,category,stock) VALUES ('LotusSpell Woman',NULL,'lotusspell-femme.jpg',250,'pack',3);
INSERT INTO CATS(name,description,image,price,category,stock) VALUES ('Salomon Child',NULL,'salomon-enfant.jpg',150,'snowboard',4);
INSERT INTO CATS(name,description,image,price,category,stock) VALUES ('Salomon Child',NULL,'salomon-enfant-pack.jpg',175,'pack',5);
INSERT INTO CATS(name,description,image,price,category,stock) VALUES ('Salomon Freestyle',NULL,'salomon-freestyle.jpg',300,'snowboard',10);
INSERT INTO CATS(name,description,image,price,category,stock) VALUES ('Wedze All Mountain',NULL,'wedze-all.jpg',200,'snowboard',8);
INSERT INTO CATS(name,description,image,price,category,stock) VALUES ('Foraker 300',NULL,'foraker.jpg',80,'boots',15);
INSERT INTO CATS(name,description,image,price,category,stock) VALUES ('Maoke 300',NULL,'moake.jpg',80,'boots',8);
INSERT INTO CATS(name,description,image,price,category,stock) VALUES ('Burton Freeride/Polyvalent',NULL,'burton-freeride_poly.jpg',300,'pack',7);
INSERT INTO CATS(name,description,image,price,category,stock) VALUES ('Vans Encore OG',NULL,'vans.jpg',120,'boots',10);
INSERT INTO CATS(name,description,image,price,category,stock) VALUES ('Burton Ruler Boa',NULL,'burton.jpg',130,'boots',6);
INSERT INTO CATS(name,description,image,price,category,stock) VALUES ('Jones All/Freestyle',NULL,'jones-all_freestyle.jpg',370,'pack',9);
INSERT INTO CATS(name,description,image,price,category,stock) VALUES ('Firefly',NULL,'firefly.jpg',90,'boots',7);

DROP TABLE IF EXISTS USERS;
CREATE TABLE IF NOT EXISTS USERS(
   username VARCHAR(30) NOT NULL PRIMARY KEY
  ,password VARCHAR(60) NOT NULL
);
INSERT INTO USERS(username,password) VALUES ('samson','$2y$10$Nz.98iWo/ABZA3fuYXkyleZ1fdNZhp8LnkPrvgLD5ky2wFGPuDbiC');
INSERT INTO USERS(username,password) VALUES ('magic','$2y$10$HD0rCnh7uzS6ZUZ04P4HcuohMDd61hHWtjA83GRdkO6cpjR2AnTdS');

