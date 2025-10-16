import Joi from "joi";
import { checkBody } from "../utils/common.util.js";

export function promptSchema(req, res, next) {
  const promptSchema = Joi.object({
    prompt: Joi.string().required(),
  });
  checkBody(promptSchema, req.body, res, next);
}

export function spellCheckSchema(req, res, next) {
  const spellCheckSchema = Joi.object({
    text: Joi.string().required(),
  });
  checkBody(spellCheckSchema, req.body, res, next);
}
