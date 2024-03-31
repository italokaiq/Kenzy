import { Request, Response } from "express";
import { RecipeServices } from "../services/recipe.service";

export class RecipeControllers {
  getMany(req: Request, res: Response): Response {
    const recipeService = new RecipeServices();
    const search = req.query.search;
    const response = recipeService.getMany(search as string);

    return res.status(200).json(response);
  }

  // getOne(req: Request, res: Response): Response {
  //   const recipeService = new RecipeServices();
  //   const { id } = req.params;
  //   const response = recipeService.getOne(Number(id));

  //   return res.status(200).json(response);
  // }

  // Repassando com o res.locals
  getOne(req: Request, res: Response): Response {
    const recipeService = new RecipeServices();
    const { recipe } = res.locals;
    const response = recipeService.getOne(recipe);

    return res.status(200).json(response);
  }

  create(req: Request, res: Response): Response {
    const recipeService = new RecipeServices();
    const response = recipeService.create(req.body);

    return res.status(201).json(response);
  }

  // update(req: Request, res: Response): Response {
  //   const recipeService = new RecipeServices();
  //   const { id } = req.params;
  //   const response = recipeService.update(Number(id), req.body);

  //   return res.status(200).json(response);
  // }

  // Repassando com res.locals
  update(req: Request, res: Response): Response {
    const recipeService = new RecipeServices();
    const { recipe } = res.locals;
    const response = recipeService.update(recipe, req.body);

    return res.status(200).json(response);
  }

  delete(req: Request, res: Response) {
    const recipeService = new RecipeServices();
    const { id } = req.params;

    recipeService.delete(Number(id));

    return res.status(204).json();
  }
}