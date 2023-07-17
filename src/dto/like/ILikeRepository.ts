import { Like } from '@prisma/client';

interface ILikeRepository {
  create(createLikeDataInput: Like): Promise<Like>;
  findAll(): Promise<Like[] | null>;
  findById(id: string): Promise<Like | null>;
  updateById(id: string, updateLikeDataInput: Like): Promise<Like>;
  deleteById(id: string): Promise<void>;
}

export default ILikeRepository;
