import { Router } from "express";
import { askIa, spellChecker } from "../controllers/mistral.controller.js";
import {
  promptSchema,
  spellCheckSchema,
} from "../middlewares/mistral.middleware.js";

const router = Router();

router.post("/prompt", promptSchema, askIa);
router.post("/spellcheck", spellCheckSchema, spellChecker);

export default router;
