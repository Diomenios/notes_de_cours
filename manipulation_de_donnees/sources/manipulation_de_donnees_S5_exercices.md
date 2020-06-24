<center> <h1> Manipulation de données S5 Exercices DDL</h1> </center>

## Exercices Create Table

#### Exercice 1.1

create table CLIENT(
  NCLI char(4) not null primary key,
  NOM varchar(12) not null,
  ADRESSE varchar(20) not null,  
  LOCALITE varchar(12) not null,
  CAT char(2),
  COMPTE decimal(9,2) not null
);

#### Exercice 1.2

create table PRODUIT(
  NPRO char(5) not null primary key,
  LIBELLE varchar(20) not null,
  PRIX decimal(5,0) not null,  
  QSTOCK decimal(6, 0) not null
);

#### Exercice 1.3

create table COMMANDE(
  NCOM char(5) not null primary key,
  NCLI char(4) not null references CLIENT,
  DATECOM datetime not null
);

#### Exercice 1.4

create table DETAIL(
  NCOM char(5) not null,
  NPRO char(5) not null,
  QCOM decimal(4,0) not null,
  primary key (NCOM, NPRO),
  foreign key (NCOM) references COMMANDE (NCOM)
);

## Exercices Alter/Drop table

#### Exercice 1.5

alter table CLIENT add RED char(3);

#### Exercice 1.6

alter table CLIENT drop column RED;

#### Exercice 1.7

create table VILLE(
  NOM varchar(20) not null,
  NVIL char(4) not null primary key,
  DET varchar(30)
);

#### Exercice 1.8
