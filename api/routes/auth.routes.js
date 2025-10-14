import express from "express";
// import { validateTagCreation, validateTagUpdate } from '../middlewares/tag.middleware.js';
import { registerUser } from "../controllers/auth.controller.js";
import { validateRegisterFields } from "../middlewares/user.middleware.js";

const router = express.Router();

router.post('/register', validateRegisterFields, registerUser);

export default router;