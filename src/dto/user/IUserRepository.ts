import { User } from '@prisma/client';
import IUserFindPropertiesList from './IUserFindPropertiesList';

interface IUserRepository {
  create(createUserDataInput: User): Promise<User>;
  changePassword(id: string, newPassword: string): Promise<void>;
  findAll(): Promise<IUserFindPropertiesList[] | null>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findOne(id: string): Promise<IUserFindPropertiesList | null>;
  updateById(
    id: string,
    updateUserDataInput: User
  ): Promise<IUserFindPropertiesList>;
  deleteById(id: string): void;
}

export default IUserRepository;
