import { Request, Response } from 'express';
import { User } from '@prisma/client';

import IUserController from '../dto/user/IUserController';
import UserService from '../services/UserService';
import ILoginRequest from '../dto/user/ILoginRequest';
import IChangePasswordResquest from '../dto/user/IChangePasswordResquest';

class UserController implements IUserController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body as ILoginRequest;

    const token = await UserService.authenticate(email, password);

    return res.status(201).json(token);
  }

  async create(req: Request, res: Response) {
    const createUserDataInput = req.body as User;

    const user = await UserService.create(createUserDataInput);

    return res.status(201).json(user);
  }

  async changePassword(req: Request, res: Response) {
    const { id } = req.params;
    const { currentPassword, newPassword } =
      req.body as IChangePasswordResquest;

    await UserService.changePassword(id, currentPassword, newPassword);

    return res.status(200).json({ message: 'Password changed successfully!' });
  }

  async findAll(req: Request, res: Response) {
    const users = await UserService.findAll();

    return res.status(200).json(users);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    const user = await UserService.findById(id);

    return res.status(200).json(user);
  }

  async updateById(req: Request, res: Response) {
    const { id } = req.params;
    const updateUserDataInput = req.body;

    const user = await UserService.updateById(id, updateUserDataInput);

    return res
      .status(200)
      .json({ message: 'User data successfully updated!', data: user });
  }

  async deleteById(req: Request, res: Response) {
    const { id } = req.params;

    await UserService.deleteById(id);

    return res.status(200).json({ message: 'User deleted successfully!' });
  }
}

export default new UserController();
