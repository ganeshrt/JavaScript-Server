import * as express from "express";
import { checkSchema } from "express-validator/check";
import { authMiddleWareForUser } from "../../../libs/routes/authMiddleWare";
import { UserSchema } from "./../../UserValues";
import { middleWare } from "./../../validation";
import { userCon } from "./controller";

export const userRouter = express.Router();
userRouter.post("/sing-up", checkSchema(UserSchema.create as any), middleWare, userCon.create);
userRouter.post("/sing-in", checkSchema(UserSchema.create as any), middleWare, userCon.getUser);
userRouter.post("/auth", authMiddleWareForUser);
