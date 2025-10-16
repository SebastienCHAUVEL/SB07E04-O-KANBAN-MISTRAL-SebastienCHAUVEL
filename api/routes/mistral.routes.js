import { Router } from "express";
import { askMistral } from "../controllers/mistral.controller.js";
import { promptSchema } from "../middlewares/mistral.middleware.js";

const router = Router();

router.post("/prompt", promptSchema, askMistral);

export default router;
