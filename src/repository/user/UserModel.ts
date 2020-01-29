import * as mongoose from "mongoose";
import {userschema} from "./UserSchema";
export const userModel = mongoose.model("UserInfo", userschema);
