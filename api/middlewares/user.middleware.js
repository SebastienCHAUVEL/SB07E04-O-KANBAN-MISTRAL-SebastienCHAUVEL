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
