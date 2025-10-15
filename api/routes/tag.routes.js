import express from "express";
import { getAll, getById, create, update, deleteById, getCardsByTagId } from '../controllers/tag.controller.js';
import { validateTagCreation, validateTagUpdate } from '../middlewares/tag.middleware.js';
import { validateId } from '../middlewares/common.middleware.js';
import { checkAuthorization } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get('/', checkAuthorization(['admin', 'user']), getAll);
router.get('/:id', checkAuthorization(['admin', 'user']), validateId, getById);
router.post('/', checkAuthorization(['admin']), validateTagCreation, create);
router.patch('/:id', checkAuthorization(['admin']), validateId, validateTagUpdate, update);
router.delete('/:id', checkAuthorization(['admin']), validateId, deleteById);
router.get('/:id/cards', checkAuthorization(['admin', 'user']), validateId, getCardsByTagId);

export default router;