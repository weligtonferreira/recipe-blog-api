import { Comment } from '@prisma/client';

interface ICommentRepository {
  create(createCommentDataInput: Comment): Promise<Comment>;
  findAll(): Promise<Comment[] | null>;
  findById(id: string): Promise<Comment | null>;
  updateById(id: string, updateCommentDataInput: Comment): Promise<Comment>;
  deleteById(id: string): Promise<void>;
}

export default ICommentRepository;
