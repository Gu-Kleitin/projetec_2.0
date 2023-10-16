
create database if not exists biblioteca;
use biblioteca;
GRANT ALL PRIVILEGES ON biblioteca.* TO'Micro'@'localhost';

create table if not exists usuario (
	id int auto_increment,
  nome varchar(50) not null,

  email varchar(50) not null,
  senha varchar(50) not null,
  ra varchar(50) not null,
  
  primary key (id)
);

create table if not exists livro (
	id int auto_increment,
  titulo varchar(50) not null,
  genero varchar(50) not null,
  sinopse varchar(50) not null,
  autor varchar(50) not null,
  primary key (id)
);

create table if not exists anuncio(
	id int auto_increment,
  descricao text,
  estadolivro varchar(50),
  datacriacao datetime,
  disponibilidade boolean,
  livroid int,
  primary key (id),
  foreign key (livroid) references livro (id)
);