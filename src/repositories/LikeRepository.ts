import { Like } from '@prisma/client';

import ILikeRepository from '../dto/like/ILikeRepository';
import { prismaClient } from '../../prisma/prismaClient';

class LikeRepository implements ILikeRepository {
  async create(createLikeDataInpute: Like): Promise<Like> {
    return await prismaClient.like.create({ data: createLikeDataInpute });
  }

  async findAll(): Promise<Like[] | null> {
    return await prismaClient.like.findMany();
  }

  async findById(id: string): Promise<Like | null> {
    return await prismaClient.like.findUnique({ where: { id } });
  }

  async updateById(id: string, updateLikeDataInput: Like): Promise<Like> {
    return await prismaClient.like.update({
      data: updateLikeDataInput,
      where: { id },
    });
  }

  async deleteById(id: string): Promise<void> {
    await prismaClient.like.delete({ where: { id } });
  }
}

export default new LikeRepository();
