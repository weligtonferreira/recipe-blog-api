import { Comment } from '@prisma/client';

import ICommentService from '../dto/comment/ICommentService';
import CommentRepository from '../repositories/CommentRepository';
import ApplicationErrors from '../errors/ApplicationErrors';

class CommentService implements ICommentService {
  async create(createCommentInputData: Comment): Promise<Comment> {
    const comment = await CommentRepository.create(createCommentInputData);

    return comment;
  }

  async findAll(): Promise<Comment[] | null> {
    const comments = await CommentRepository.findAll();

    if (!comments) throw new ApplicationErrors('Comments not found!', 404);

    return comments;
  }

  async findById(id: string): Promise<Comment | null> {
    const comment = await CommentRepository.findById(id);

    if (!comment) throw new ApplicationErrors('Comment not found!', 404);

    return comment;
  }

  async updateById(
    id: string,
    updateCommentInputData: Comment
  ): Promise<Comment> {
    await this.findById(id);

    const comment = await CommentRepository.updateById(
      id,
      updateCommentInputData
    );

    return comment;
  }

  async deleteById(id: string): Promise<void> {
    await this.findById(id);

    await CommentRepository.deleteById(id);
  }
}

export default new CommentService();
