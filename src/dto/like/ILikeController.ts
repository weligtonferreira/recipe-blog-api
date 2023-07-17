import { Request, Response } from 'express';

interface ILikeController {
  create: (req: Request, res: Response) => void;
  findAll: (req: Request, res: Response) => void;
  findById: (req: Request, res: Response) => void;
  updateById: (req: Request, res: Response) => void;
  deleteById: (req: Request, res: Response) => void;
}

export default ILikeController;
