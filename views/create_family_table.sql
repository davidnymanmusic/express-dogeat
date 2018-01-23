\c knexshuns
CREATE TABLE family(
   id     SERIAL  NOT NULL PRIMARY KEY
  ,name   VARCHAR(50) NOT NULL
  ,species VARCHAR(50) NOT NULL
);
INSERT INTO family(id,name,species) VALUES (1,'Susanne','human');
INSERT INTO family(id,name,species) VALUES (2,'David','human');
INSERT INTO family(id,name,species) VALUES (3,'Olive','cat');
INSERT INTO family(id,name,species) VALUES (4,'Arthur','dog');
