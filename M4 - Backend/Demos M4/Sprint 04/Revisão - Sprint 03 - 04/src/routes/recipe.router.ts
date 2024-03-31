import { Router } from "express";
import { RecipeControllers } from "../controllers/recipe.controllers";
import { IsRecipeIdValid } from "../middlewares/isRecipeIdValid.middleware";

export const recipeRouter = Router();

const recipeController = new RecipeControllers()

recipeRouter.get("/", recipeController.getMany);
recipeRouter.get("/:id", IsRecipeIdValid.execute, recipeController.getOne);
recipeRouter.post("/", recipeController.create);
recipeRouter.patch("/:id", IsRecipeIdValid.execute, recipeController.update);
recipeRouter.delete("/:id", IsRecipeIdValid.execute, recipeController.delete);