createuser -U postgres -P -d meu_usuario;

-U postgres: Isso especifica que você está conectando como o usuário "postgres", que é o superusuário padrão no PostgreSQL.
-P: Isso solicitará que você insira uma senha para o novo usuário.
-d: Isso concede ao novo usuário permissão para criar bancos de dados. Você pode remover essa opção se não desejar conceder essa permissão.

CREATE USER "nome_do_usuario" CREATEROLE CREATEDB SUPERUSER PASSWORD 'senha';

CREATE DATABASE "banco_de_dados";

\l lista todos os bancos de dados
\c seleciona um banco de dados ex: \c nome_do_bancoDeDados 

DROP DATABASE nome_do_bancoDeDados //exclui um banco