import express from 'express';
import { getAll, getById, create, update, deleteById } from '../controllers/list.controller.js';
import { validateListCreation, validateListUpdate } from '../middlewares/list.middleware.js';
import { validateId } from '../middlewares/common.middleware.js';
import { checkAuthorization } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', checkAuthorization(['admin', 'user']), getAll);
router.get('/:id', checkAuthorization(['admin', 'user']), validateId, getById);
router.post('/', checkAuthorization(['admin']), validateListCreation, create);
router.patch('/:id', checkAuthorization(['admin']), validateId, validateListUpdate, update);
router.delete('/:id', checkAuthorization(['admin']), validateId, deleteById);

export default router;