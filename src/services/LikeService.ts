import { Like } from '@prisma/client';

import ILikeService from '../dto/like/ILikeService';
import LikeRepository from '../repositories/LikeRepository';
import ApplicationErrors from '../errors/ApplicationErrors';

class LikeService implements ILikeService {
  async create(createLikeInputData: Like): Promise<Like> {
    const like = await LikeRepository.create(createLikeInputData);

    return like;
  }

  async findAll(): Promise<Like[] | null> {
    const likes = await LikeRepository.findAll();

    if (!likes) throw new ApplicationErrors('Likes not found!', 404);

    return likes;
  }

  async findById(id: string): Promise<Like | null> {
    const like = await LikeRepository.findById(id);

    if (!like) throw new ApplicationErrors('Like not found!', 404);

    return like;
  }

  async updateById(id: string, updateLikeInputData: Like): Promise<Like> {
    await this.findById(id);

    const like = await LikeRepository.updateById(id, updateLikeInputData);

    return like;
  }

  async deleteById(id: string): Promise<void> {
    await this.findById(id);

    await LikeRepository.deleteById(id);
  }
}

export default new LikeService();
