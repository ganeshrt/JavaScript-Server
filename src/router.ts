import * as express from "express";
import {authMiddleWare} from "../libs/routes/authMiddleWare";
import {traineeRouter} from "./controllers/trainee/routes";
import { userRouter } from "./controllers/user/router";

export const functionRouter = express.Router();
functionRouter.use("/trainee", traineeRouter);
functionRouter.use("/user", userRouter);
