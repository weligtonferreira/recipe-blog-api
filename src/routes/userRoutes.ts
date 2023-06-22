import { Router } from 'express';

import UserController from '../controllers/UserController';

const router = Router();

router.post('/login', UserController.authenticate);
router.post('/register', UserController.create);
router.patch('/:id', UserController.changePassword);
router.get('/', UserController.findAll);
router.get('/:id', UserController.findById);
router.put('/:id', UserController.updateById);
router.delete('/:id', UserController.deleteById);

export default router;
