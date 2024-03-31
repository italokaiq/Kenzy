CREATE USER "SEU_USUARIO_WINDOWS" CREATEROLE CREATEDB SUPERUSER PASSWORD '1234';

CREATE DATABASE T20_postgres;

//dividido em tabelas
//string, number, boolean

//texto
// CHAR(25) - define exatamente a quantidade de caracteres
// VARCHAR(150) - define o limite de caracteres
// TEXT - string

//numeros
// INT - Números inteiros

//data 
// TIMESTAMP - para criação de DATABASE

// NOT NULL - Torna a coluna obrigatória

// Todo comando de SQL precisa de ";"

CREATE TABLE "recipes" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(150) NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP NOT NULL,
    "updatedAt" TIMESTAMP
);

CREATE TABLE "products" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP NOT NULL,
    "updatedAt" TIMESTAMP
);

// \dt ou \dt+ listar tabelas no postgresSQL
// \du - verifica usuários existentes