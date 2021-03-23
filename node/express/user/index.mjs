import { Router } from 'express';
import controller from './controller.mjs';

const router = Router();

// /user/
router.get('/', controller.getAll);
// /user/2
router.get('/:id', controller.getOne);
router.post('/', controller.add);
router.put('/:id', controller.edit);
router.delete('/:id', controller.delete);

export default router;
