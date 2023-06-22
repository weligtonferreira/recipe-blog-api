import bcrypt, { compare } from 'bcryptjs';
import { User } from '@prisma/client';

import { prismaClient } from './../../prisma/prismaClient';
import IUserRepository from '../dto/user/IUserRepository';
import IUserFindPropertiesList from '../dto/user/IUserFindPropertiesList';

class UserRepository implements IUserRepository {
  async create(createUserDataInput: User): Promise<User> {
    const { password } = createUserDataInput;

    return await prismaClient.user.create({
      data: {
        ...createUserDataInput,
        password: await bcrypt.hash(password, 8),
      },
    });
  }

  async changePassword(id: string, newPassword: string): Promise<void> {
    await prismaClient.user.update({
      where: { id },
      data: { password: await bcrypt.hash(newPassword, 8) },
    });
  }

  async findAll(): Promise<IUserFindPropertiesList[] | null> {
    return await prismaClient.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        profileDescription: true,
        profileImageUrl: true,
      },
    });
  }

  async findById(id: string): Promise<User | null> {
    return await prismaClient.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await prismaClient.user.findUnique({
      where: { email },
    });
  }

  async findOne(id: string): Promise<IUserFindPropertiesList | null> {
    return await prismaClient.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        profileDescription: true,
        profileImageUrl: true,
      },
    });
  }

  async updateById(
    id: string,
    updateUserDataInput: User
  ): Promise<IUserFindPropertiesList> {
    const user = await prismaClient.user.update({
      where: { id },
      data: updateUserDataInput,
      select: {
        id: true,
        name: true,
        email: true,
        profileDescription: true,
        profileImageUrl: true,
      },
    });

    return user;
  }

  async deleteById(id: string): Promise<void> {
    await prismaClient.user.delete({ where: { id } });
  }
}

export default new UserRepository();
