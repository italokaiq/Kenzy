UPDATE "products" SET price = 2500; // atualiza todos os recurso que contém price para o valor de 2500. 

//Pegando apenas o recurso/individual
UPDATE "products" SET price = 6500 WHERE id = 3;

//Atualizando vários recurso de uma vez (individual);
UPDATE "products" SET price = 9500, description = 'Helios Predator 300' WHERE id = 3;

//Colando o returning no final da atualização para trazer o valor obtido. 
UPDATE "products" SET description = 'Helios 300', price = 7000 WHERE id = 3 RETURNING *;

//Sintaxe Alternativa
UPDATE "products" SET (
    "description",
    "price"
) = ROW (
    'Helios 300',
    7000
) WHERE id = 3 RETURNING *;