import { Request, Response } from 'express';

import ILikeController from '../dto/like/ILikeController';
import LikeService from '../services/LikeService';

class LikeController implements ILikeController {
  async create(req: Request, res: Response) {
    const { createLikeDataInput } = req.body;

    const like = await LikeService.create(createLikeDataInput);

    return res.status(201).json(like);
  }

  async findAll(req: Request, res: Response) {
    const likes = await LikeService.findAll();

    return res.status(200).json(likes);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    const like = await LikeService.findById(id);

    return res.status(200).json(like);
  }

  async updateById(req: Request, res: Response) {
    const { id } = req.params;
    const { updateLikeDataInput } = req.body;

    const like = await LikeService.updateById(id, updateLikeDataInput);

    return res.status(200).json(like);
  }

  async deleteById(req: Request, res: Response) {
    const { id } = req.params;

    await LikeService.deleteById(id);

    return res.status(200).json({ message: 'Like deleted successfully!' });
  }
}

export default new LikeController();
