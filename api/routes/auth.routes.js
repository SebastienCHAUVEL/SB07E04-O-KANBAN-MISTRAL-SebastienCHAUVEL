import express from "express";
// import { validateTagCreation, validateTagUpdate } from '../middlewares/tag.middleware.js';
import { registerUser, login, userProfile } from "../controllers/auth.controller.js";
import { validateRegisterFields } from "../middlewares/user.middleware.js";
import { checkAuthorization, checkJWTToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post('/register', validateRegisterFields, registerUser);
router.post('/login', login);
router.get('/me', checkJWTToken, checkAuthorization(['admin', 'user']), userProfile)
export default router;