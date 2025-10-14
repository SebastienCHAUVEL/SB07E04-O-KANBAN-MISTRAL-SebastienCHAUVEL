import Joi from "joi";
import { checkBody } from "../utils/common.util.js";

export function validateRegisterFields(req, res, next) {
    const createUserSchema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
        validation: Joi.string().required(),
    });
    checkBody(createUserSchema, req.body, res, next);
}

export function validateCardUpdate(req, res, next) {
    const updateCardSchema = Joi.object({
        content: Joi.string(),
        position: Joi.number(),
        color: Joi.string(),
        list_id: Joi.number()
    });
    checkBody(updateCardSchema, req.body, res, next);
}