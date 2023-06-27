import { Recipe } from '@prisma/client';

import IRecipeRepository from '../dto/recipe/IRecipeRepository';

class RecipeRepository implements IRecipeRepository {
  async create(createRecipeDataInput: Recipe): Promise<Recipe> {}

  async findAll(): Promise<Recipe[] | null> {}

  async findById(id: string): Promise<Recipe | null> {}

  async updateById(
    id: string,
    updateRecipeDataInput: Recipe
  ): Promise<Recipe> {}

  async deleteById(id: string): Promise<void> {}
}

export default new RecipeRepository();
