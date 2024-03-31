CREATE TABLE "products" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP NOT NULL,
    "updatedAt" TIMESTAMP
    
);

INSERT INTO "products" ("name", "description", "price", "createdAt")
VALUES('Notebook', 'Alienware M16', 12000, '2024-03-19'),
('Notebook', 'DELL G15 i7', 8000, '2024-03-19'),
('Notebook', 'DELL G15 i5', 6000, '2024-03-19') RETURNING *;

//returning - retorna os valores no final da lógica

