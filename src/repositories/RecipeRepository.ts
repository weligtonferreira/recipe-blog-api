import { Recipe } from '@prisma/client';

import IRecipeRepository from '../dto/recipe/IRecipeRepository';
import { prismaClient } from '../../prisma/prismaClient';

class RecipeRepository implements IRecipeRepository {
  async create(createRecipeDataInput: Recipe): Promise<Recipe> {
    return await prismaClient.recipe.create({ data: createRecipeDataInput });
  }

  async findAll(): Promise<Recipe[] | null> {
    return await prismaClient.recipe.findMany();
  }

  async findById(id: string): Promise<Recipe | null> {
    return await prismaClient.recipe.findUnique({ where: { id } });
  }

  async updateById(id: string, updateRecipeDataInput: Recipe): Promise<Recipe> {
    return await prismaClient.recipe.update({
      where: { id },
      data: updateRecipeDataInput,
    });
  }

  async deleteById(id: string): Promise<void> {
    await prismaClient.recipe.delete({ where: { id } });
  }
}

export default new RecipeRepository();
