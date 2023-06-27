import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { User } from '@prisma/client';

import IUserService from '../dto/user/IUserService';
import IUserFindPropertiesList from '../dto/user/IUserFindPropertiesList';
import UserRepository from '../repositories/UserRepository';
import ApplicationErrors from '../errors/ApplicationErrors';

class UserService implements IUserService {
  async authenticate(email: string, password: string) {
    const userEmailExists = await UserRepository.findByEmail(email);

    if (!userEmailExists)
      throw new ApplicationErrors('E-mail or password incorrect!', 400);

    const passwordCompared = await compare(password, userEmailExists.password);

    if (!passwordCompared)
      throw new ApplicationErrors('E-mail or password incorrect!', 400);

    const tokenKey = process.env.TOKEN_KEY || '';

    const token = sign({ userId: userEmailExists.id }, tokenKey, {
      expiresIn: '5d',
      subject: userEmailExists.id,
    });

    return token;
  }

  async create(createUserDataInput: User): Promise<User> {
    const userEmailExists = await UserRepository.findByEmail(
      createUserDataInput.email
    );

    if (userEmailExists)
      throw new ApplicationErrors('This email already exists!', 400);

    const user = await UserRepository.create(createUserDataInput);

    return user;
  }

  async changePassword(
    id: string,
    currentPassword: string,
    newPassword: string
  ): Promise<void> {
    const user = await UserRepository.findById(id);

    if (!user) throw new ApplicationErrors('User not found!', 404);

    const thePasswordsMatch = await compare(currentPassword, user.password);

    if (!thePasswordsMatch)
      throw new ApplicationErrors('Incorrect password!', 400);

    await UserRepository.changePassword(id, newPassword);
  }

  async findAll(): Promise<IUserFindPropertiesList[] | null> {
    const users = await UserRepository.findAll();

    if (!users) throw new ApplicationErrors('Users not found!', 404);

    return users;
  }

  async findById(id: string): Promise<IUserFindPropertiesList | null> {
    const user = await UserRepository.findOne(id);

    if (!user) throw new ApplicationErrors('User not found!', 404);

    return user;
  }

  async updateById(
    id: string,
    updateUserDataInput: User
  ): Promise<IUserFindPropertiesList> {
    await this.findById(id);

    return await UserRepository.updateById(id, updateUserDataInput);
  }

  async deleteById(id: string): Promise<void> {
    await this.findById(id);

    await UserRepository.deleteById(id);
  }
}

export default new UserService();
