import { Recipe } from '@prisma/client';
import { object, string, ValidationError } from 'yup';

export async function createRecipeValidation(
  recipeObject: Recipe
): Promise<void> {
  const schema = object().shape({
    title: string().min(3).required(),
    description: string().min(3).required(),
    imagePath: string(),
  });

  try {
    await schema.validate(recipeObject, { abortEarly: false });
  } catch (error) {
    throw new ValidationError(error as ValidationError);
  }
}

export async function updateRecipeValidation(
  recipeObject: Recipe
): Promise<void> {
  const schema = object().shape({
    title: string().min(3),
    description: string().min(3),
    imagePath: string(),
  });

  try {
    await schema.validate(recipeObject, { abortEarly: false });
  } catch (error) {
    throw new ValidationError(error as ValidationError);
  }
}
