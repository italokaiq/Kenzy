import { z } from "zod";

// Esquemas derivados com o Zod.

export const todoSchema = z.object({
  id: z.number().positive(),
  title: z.string().min(1),
  content: z.string().min(1),
  // adicionando mais 2 chaves:
  createdAt: z.date(),
  updatedAt: z.date().optional(), // poderia ser "nullish(), pois aceita as duas respostas(opcinal e nulo)"
});

// Ao invés de Omit, vamos usar o Pick:
export const todoCreateBodySchema = todoSchema.pick({
  title: true,
  content: true,
});


// Ao invés de Partial, vamos utilizar o Pick:
export const todoUpdateBodySchema = todoSchema
  .pick({
    title: true,
    content: true,
  })
  .partial();



// export const todoCreateBodySchema = todoSchema.omit({
//   id: true,
// });


// export const todoUpdateBodySchema = todoCreateBodySchema.partial();




// -------------------------------------------------------------------------------------------------------------
// export const todoCreateBodySchema = z.object({
//   title: z.string().min(1),
//   content: z.string().min(1),
// });

// export const todoUpdateBodySchema = z.object({
//     title: z.string().optional(),
//     content: z.string().optional()
// })