import { object, string, ValidationError } from 'yup';
import { User } from '@prisma/client';

export async function createUserValidation(userObject: User): Promise<void> {
  const schema = object().shape({
    name: string()
      .min(3, 'Enter at least 3 digits')
      .required('Name is required'),
    email: string()
      .email('Enter a valid E-mail address')
      .required('E-mail is required'),
    password: string()
      .min(8, 'Enter at least 8 digits')
      .required('Password is required'),
    profileDescription: string(),
    profileImageUrl: string(),
  });

  try {
    await schema.validate(userObject, { abortEarly: false });
  } catch (error) {
    throw new ValidationError(error as ValidationError);
  }
}
