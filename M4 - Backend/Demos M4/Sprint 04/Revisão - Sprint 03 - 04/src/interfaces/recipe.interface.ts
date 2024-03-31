export interface IRecipe {
  id: number;
  title: string;
  content: string;
  steps: string[];
}

export type TcreateRecipeBody = Omit<IRecipe, "id">;
export type TUpdateRecipeBody = Partial<TcreateRecipeBody>;