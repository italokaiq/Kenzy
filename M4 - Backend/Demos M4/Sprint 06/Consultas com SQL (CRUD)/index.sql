CREATE USER "nome-do-usuário" CREATEROLE CREATEDB SUPERUSER PASSWORD 'senha-do-usuário';

CREATE DATEBASE 'nome-do-banco-de-dados';

//Comandos de SQL
// \l = Lista de bancos de dados
// \c = seleciona um banco em expecífico ex: \c 'nome-do-banco-de-dados';
// \du = exibi a lista de usuários
// \dt = exibi uma tabela SQL de forma simplificada
// \dt+ = exibi uma tabela  SQL completa

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