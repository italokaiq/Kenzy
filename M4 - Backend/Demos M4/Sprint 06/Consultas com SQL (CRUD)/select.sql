SELECT * FROM "products"; // Todos os recurso da tabela

SELECT "name", "price" FROM "products"; // Trazendo apenas nomes e preços da tabela

//Selecionado um arquivo em expecífico
SELECT * FROM "products" WHERE id = 2;
SELECT * FROM "products" WHERE price > 8000;

//LIKE - case sensitive
// O like busca coisas que:
// - começam com o texto, ex: SELECT * FROM "nome-da-tabela" WHERE name Like '%produto';
// - termina com o texto, ex: SELECT * FROM "nome-da-tabela" WHERE name Like 'produto%';
// - contém o texto, ex: SELECT * FROM "nome-da-tabela" WHERE name Like '%produto%';

SELECT * FROM products WHERE name LIKE '%Notebook%';
SELECT * FROM products WHERE description LIKE '%M16%';

//ILIKE - não é case sensitive
SELECT * FROM products WHERE name ILIKE '%notebook';