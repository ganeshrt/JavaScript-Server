
import * as express from "express";
import { checkSchema, validationResult } from "express-validator/check";

export const middleWare = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send({ errors: errors.array() });
    }
    next();
};
