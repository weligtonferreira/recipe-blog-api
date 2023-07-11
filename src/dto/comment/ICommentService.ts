import { Comment } from '@prisma/client';

interface ICommentService {
  create: (createCommentInputData: Comment) => Promise<Comment>;
  findAll: () => Promise<Comment[] | null>;
  findById: (id: string) => Promise<Comment | null>;
  updateById: (id: string, updateCommentInputData: Comment) => Promise<Comment>;
  deleteById: (id: string) => Promise<void>;
}

export default ICommentService;
