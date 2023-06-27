import { Recipe } from '@prisma/client';

interface IRecipeRepository {
  create(createRecipeDataInput: Recipe): Promise<Recipe>;
  findAll(): Promise<Recipe[] | null>;
  findById(id: string): Promise<Recipe | null>;
  updateById(id: string, updateRecipeDataInput: Recipe): Promise<Recipe>;
  deleteById(id: string): Promise<void>;
}

export default IRecipeRepository;
