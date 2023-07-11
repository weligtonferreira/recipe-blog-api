import { Request, Response } from 'express';

import ICommentController from '../dto/comment/ICommentController';
import CommentService from '../services/CommentService';

class CommentController implements ICommentController {
  async create(req: Request, res: Response) {
    const { createCommentDataInput } = req.body;

    const comment = await CommentService.create(createCommentDataInput);

    return res.status(201).json(comment);
  }

  async findAll(req: Request, res: Response) {
    const comments = await CommentService.findAll();

    return res.status(200).json(comments);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    const comment = await CommentService.findById(id);

    return res.status(200).json(comment);
  }

  async updateById(req: Request, res: Response) {
    const { id } = req.params;
    const { updateCommentDataInput } = req.body;

    const comment = await CommentService.updateById(id, updateCommentDataInput);

    return res.status(200).json(comment);
  }

  async deleteById(req: Request, res: Response) {
    const { id } = req.params;

    await CommentService.deleteById(id);

    return res.status(200).json({ message: 'Comment deleted successfully!' });
  }
}

export default new CommentController();
