import { Request, Response } from 'express';

import IRecipeController from '../dto/recipe/IRecipeController';

class RecipeController implements IRecipeController {
  async create(req: Request, res: Response) {}

  async findAll(req: Request, res: Response) {}

  async findById(req: Request, res: Response) {}

  async updateById(req: Request, res: Response) {}

  async deleteById(req: Request, res: Response) {}
}

export default new RecipeController();
