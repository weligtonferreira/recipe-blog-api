import { User } from '@prisma/client';
import IUserFindPropertiesList from './IUserFindPropertiesList';

interface IUserService {
  authenticate: (email: string, password: string) => Promise<string>;
  create: (createUserDataInput: User) => Promise<User>;
  changePassword: (
    id: string,
    currentPassword: string,
    newPassword: string
  ) => Promise<void>;
  findAll: () => Promise<IUserFindPropertiesList[] | null>;
  findById: (id: string) => Promise<IUserFindPropertiesList | null>;
  updateById: (
    id: string,
    updateUserDataInput: User
  ) => Promise<IUserFindPropertiesList>;
  deleteById: (id: string) => Promise<void>;
}

export default IUserService;
