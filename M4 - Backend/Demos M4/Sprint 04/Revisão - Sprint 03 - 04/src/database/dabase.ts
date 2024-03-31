import { IRecipe } from "../interfaces/recipe.interface";

export const recipeList: IRecipe[] = [];

let id = 0;

export const generateId = () => {
  id++;
  return id;
};