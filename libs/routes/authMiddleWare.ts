
import * as dotenv from "dotenv";
import * as jwt from "jsonwebtoken";
import hasPermission from "../../extraTS/utils/permissions";
import { userModel } from "../../src/repository/user/UserModel";
import { config_env } from "./../../src/config/configuration";
dotenv.config();

export const authMiddleWare = (model, permissionType) => (req, res, next) => {
    let { id } = req.body;
    const decry = jwt.verify(id, config_env.KEY, (err, decoded) => {
        if (err) {
            res.send(err);
        } else {
            if (hasPermission(model, decoded.role, permissionType)) {
                next();
            } else {
                res.status(403).send("Unauthorized Access.");
            }
        }
    });
}
export const authMiddleWareForUser = (req, res) => {
    let id = req.headers["authorization"];
    if (typeof id !== "undefined") {
        const bearer = id.split(" ");
        const token = bearer[1];
        console.log(token);
        const decry = jwt.verify(id, config_env.KEY, (err, decoded) => {
            if (err) {
                res.send(" Login Failed ..! (Invalid Id)");
            }else{
            let { email, password } = decoded;
            console.log(decoded);
            userModel.find().where({ email, password }).then((result) => {
                console.log(result);
                if (result) {
                    console.log("Login Success..!");
                    res.send("Login Success..!");
                }
            
            });}
        });
    }
};
