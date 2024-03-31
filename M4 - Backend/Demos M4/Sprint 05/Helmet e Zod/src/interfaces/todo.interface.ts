import { z } from "zod";
import { todoSchema, todoCreateBodySchema } from "../shemas/todo.schemas";

export type TTodo = z.infer<typeof todoSchema>;

export type TTodoCreateBody = z.infer<typeof todoCreateBodySchema>;

export type TTodoUpdateBody = z.infer<typeof todoCreateBodySchema>;

// export interface TTodoUpdateBody {
//   title?: string;
//   content?: string;
// }