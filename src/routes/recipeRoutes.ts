import { Router } from 'express';

import RecipeController from '../controllers/RecipeController';

const router = Router();

router.post('/register', RecipeController.create);
router.get('/', RecipeController.findAll);
router.get('/:id', RecipeController.findById);
router.put('/:id', RecipeController.updateById);
router.delete('/:id', RecipeController.deleteById);

export default router;
