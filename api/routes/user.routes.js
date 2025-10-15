import express from "express";
import { getAll } from '../controllers/user.controller.js';
import { checkAuthorization } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get('/', checkAuthorization(['admin']), getAll);

export default router;
