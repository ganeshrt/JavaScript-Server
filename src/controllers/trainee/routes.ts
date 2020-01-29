import * as express from "express";
import { check, checkSchema } from "express-validator/check";
import { authMiddleWare } from "./../../../libs/routes/authMiddleWare";
import { UserSchema } from "./../../UserValues";
import { middleWare } from "./../../validation";
import { ps } from "./controller";

export const traineeRouter = express.Router();

traineeRouter.get("/get", checkSchema(UserSchema.get as any), ps.get);
traineeRouter.post("/post",
    [check("name").isLength({ min: 3 }),
    check("email").isEmail(),
    ],
    ps.create);

traineeRouter.post("/sing-in", authMiddleWare("getUsers", "write"));
traineeRouter.post("/sing-up", checkSchema(UserSchema.create as any), middleWare, ps.create);
traineeRouter.delete("/delete", checkSchema(UserSchema.delete as any), middleWare, ps.delete);
traineeRouter.put("/update", checkSchema(UserSchema.update as any), middleWare, ps.update);
