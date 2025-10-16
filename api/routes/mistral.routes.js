import { Router } from "express";
import {
  askIa,
  spellChecker,
  translater,
} from "../controllers/mistral.controller.js";
import {
  promptSchema,
  spellCheckSchema,
  translaterSchema,
} from "../middlewares/mistral.middleware.js";
import { checkAuthorization } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/prompt", promptSchema, askIa);
router.post(
  "/spellcheck",
  checkAuthorization(["admin"]),
  spellCheckSchema,
  spellChecker
);
console.log("test");
router.post(
  "/translate",
  checkAuthorization(["admin"]),
  translaterSchema,
  translater
);

export default router;
