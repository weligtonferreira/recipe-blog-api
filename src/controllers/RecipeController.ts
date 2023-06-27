import { Request, Response } from 'express';

import IRecipeController from '../dto/recipe/IRecipeController';
import RecipeService from '../services/RecipeService';

class RecipeController implements IRecipeController {
  async create(req: Request, res: Response) {
    const createRecipeDataInput = req.body;

    const user = await RecipeService.create(createRecipeDataInput);

    return res.status(201).json(user);
  }

  async findAll(req: Request, res: Response) {
    const users = await RecipeService.findAll();

    return res.status(200).json(users);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    const user = await RecipeService.findById(id);

    return res.status(200).json(user);
  }

  async updateById(req: Request, res: Response) {
    const { id } = req.params;
    const updateRecipeDataInput = req.body;

    const user = await RecipeService.updateById(id, updateRecipeDataInput);

    return res.status(200).json(user);
  }

  async deleteById(req: Request, res: Response) {
    const { id } = req.params;

    await RecipeService.deleteById(id);

    return res.status(200).json({ message: 'Recipe deleted successfully!' });
  }
}

export default new RecipeController();
