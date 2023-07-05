import { Comment } from '@prisma/client';

import ICommentRepository from '../dto/comment/ICommentRepository';
import { prismaClient } from '../../prisma/prismaClient';

class CommentRepository implements ICommentRepository {
  async create(createCommentDataInput: Comment): Promise<Comment> {
    const { recipeId, userId, ...rest } = createCommentDataInput;

    return await prismaClient.comment.create({
      data: {
        ...rest,
        recipeId,
        userId,
      },
    });
  }

  async findAll(): Promise<Comment[] | null> {
    return await prismaClient.comment.findMany();
  }

  async findById(id: string): Promise<Comment | null> {
    return await prismaClient.comment.findUnique({ where: { id } });
  }

  async updateById(
    id: string,
    updateCommentDataInput: Comment
  ): Promise<Comment> {
    return await prismaClient.comment.update({
      where: { id },
      data: updateCommentDataInput,
    });
  }

  async deleteById(id: string): Promise<void> {
    await prismaClient.comment.delete({ where: { id } });
  }
}

export default new CommentRepository();
