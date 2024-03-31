import { generateId, recipeList } from "../database/dabase";
import {
  IRecipe,
  TUpdateRecipeBody,
  TcreateRecipeBody,
} from "../interfaces/recipe.interface";

export class RecipeServices {
  getMany(search?: string): IRecipe[] {
    if (search) {
      const searchResults = recipeList.filter((recipe) =>
        recipe.title.toLowerCase().includes(search.toLowerCase())
      );

      return searchResults;
    } else {
      return recipeList;
    }
  }

  // getOne(id: number): IRecipe {
  //   const index = recipeList.find((recipe) => recipe.id === id) as IRecipe;
  //   return index;
  // }

  // Repassando o res.locals
  getOne(recipe: IRecipe): IRecipe {
    return recipe;
  }

  create(data: TcreateRecipeBody): IRecipe {
    const newRecipe: IRecipe = {
      id: generateId(),
      title: data.title,
      content: data.content,
      steps: data.steps,
    };

    recipeList.push(newRecipe);

    return newRecipe;
  }

  // update(id: number, data: TUpdateRecipeBody): IRecipe {
  //   const currentRecipe = recipeList.find(
  //     (recipe) => recipe.id === id
  //   ) as IRecipe;

  //   const updateRecipe = { ...currentRecipe, ...data };

  //   const index = recipeList.findIndex((recipe) => recipe.id === id);

  //   recipeList.splice(index, 1, updateRecipe);

  //   return updateRecipe;
  // }

  // Repassando com o res.locals
  update(currentRecipe: IRecipe, data: TUpdateRecipeBody): IRecipe {

    const updateRecipe = { ...currentRecipe, ...data };
    const index = recipeList.findIndex((recipe) => recipe.id === currentRecipe.id);

    recipeList.splice(index, 1, updateRecipe);

    return updateRecipe;
  }

  delete(id: number): void {
    const index = recipeList.findIndex((recipe) => recipe.id === id);

    recipeList.splice(index, 1);
  }
}