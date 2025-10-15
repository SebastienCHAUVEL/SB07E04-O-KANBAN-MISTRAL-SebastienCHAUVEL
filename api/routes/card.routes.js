import express from "express";
import { getAll, getById, create, update, deleteById } from '../controllers/card.controller.js';
import { validateCardCreation, validateCardUpdate } from '../middlewares/card.middleware.js';
import { validateId } from '../middlewares/common.middleware.js';
import { checkAuthorization } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get('/', checkAuthorization(['admin', 'user']), getAll);
router.get('/:id', checkAuthorization(['admin', 'user']), validateId, getById);
router.post('/', checkAuthorization(['admin']), validateCardCreation, create);
router.patch('/:id', checkAuthorization(['admin']), validateId, validateCardUpdate, update);
router.delete('/:id', checkAuthorization(['admin']), validateId, deleteById);

export default router;
