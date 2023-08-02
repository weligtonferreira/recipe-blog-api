import { Recipe } from '@prisma/client';

import IRecipeService from '../dto/recipe/IRecipeService';
import RecipeRepository from '../repositories/RecipeRepository';
import ApplicationErrors from '../errors/ApplicationErrors';
import { createRecipeValidation, updateRecipeValidation } from '../utils/recipeValidation';

class RecipeService implements IRecipeService {
  async create(createRecipeDataInput: Recipe): Promise<Recipe> {
    await createRecipeValidation(createRecipeDataInput);

    const recipe = await RecipeRepository.create(createRecipeDataInput);

    return recipe;
  }

  async findAll(): Promise<Recipe[] | null> {
    const recipes = await RecipeRepository.findAll();

    if (!recipes) throw new ApplicationErrors('Recipes not found!', 404);

    return recipes;
  }

  async findById(id: string): Promise<Recipe | null> {
    const recipe = await RecipeRepository.findById(id);

    if (recipe) throw new ApplicationErrors('Recipe not found!', 404);

    return recipe;
  }

  async updateById(id: string, updateRecipeDataInput: Recipe): Promise<Recipe> {
    await updateRecipeValidation(updateRecipeDataInput);

    await this.findById(id);

    return await RecipeRepository.updateById(id, updateRecipeDataInput);
  }

  async deleteById(id: string): Promise<void> {
    await this.findById(id);

    await RecipeRepository.deleteById(id);
  }
}

export default new RecipeService();
