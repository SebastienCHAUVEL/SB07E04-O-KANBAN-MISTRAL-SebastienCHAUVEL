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

export function translaterSchema(req, res, next) {
  const translaterSchema = Joi.object({
    text: Joi.string().required(),
    lang: Joi.string()
      .pattern(/^[a-zA-Z]{2}$/)
      .required(),
  });

  checkBody(translaterSchema, req.body, res, next);
}
