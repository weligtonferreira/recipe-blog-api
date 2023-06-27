import { Recipe } from '@prisma/client';

interface IRecipeService {
  create: (createRecipeInputData: Recipe) => Promise<Recipe>;
  findAll: () => Promise<Recipe[] | null>;
  findById: (id: string) => Promise<Recipe | null>;
  updateById: (id: string, updateRecipeInputData: Recipe) => Promise<Recipe>;
  deleteById: (id: string) => Promise<void>;
}

export default IRecipeService;
