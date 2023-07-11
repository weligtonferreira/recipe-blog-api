import { Router } from 'express';

import CommentController from '../controllers/CommentController';

const router = Router();

router.post('/register', CommentController.create);
router.get('/', CommentController.findAll);
router.get('/:id', CommentController.findById);
router.put('/:id', CommentController.updateById);
router.delete('/:id', CommentController.deleteById);

export default router;
