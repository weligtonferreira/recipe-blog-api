import { Like } from '@prisma/client';

interface ILikeService {
  create: (createLikeInputData: Like) => Promise<Like>;
  findAll: () => Promise<Like[] | null>;
  findById: (id: string) => Promise<Like | null>;
  updateById: (id: string, updateLikeInputData: Like) => Promise<Like>;
  deleteById: (id: string) => Promise<void>;
}

export default ILikeService;
