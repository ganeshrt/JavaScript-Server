import * as mongoose from "mongoose";
export const userschema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    email: {type : String , index: { unique: true, dropDups: false }},
    password: String,
    createAt: { type: Date, Default: Date.now },
});
