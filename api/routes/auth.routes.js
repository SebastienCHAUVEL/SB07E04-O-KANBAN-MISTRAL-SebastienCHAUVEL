import express from "express";
// import { validateTagCreation, validateTagUpdate } from '../middlewares/tag.middleware.js';
import { registerUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/register', registerUser);

export default router;