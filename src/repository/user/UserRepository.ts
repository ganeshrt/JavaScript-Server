import * as express from "express";
import * as mongoose from "mongoose";
import { userModel } from "./UserModel";

class UserRepository {
    public create(data: any = {}) {
        let id = mongoose.Types.ObjectId();
        const user = new userModel({
            _id: id,
            ...data,
        }).save();
    }
    public update() {
    }
    public delete() {
    }
    public count(data: any = {}) {
        return userModel.countDocuments(data);
    }
}
export const userRepo = new UserRepository();