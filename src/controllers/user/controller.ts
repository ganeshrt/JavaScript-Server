import * as jwt from "jsonwebtoken";
import { initialSeedData } from "./../../../libs/seedData";
import { userModel } from "./../../../src/repository/user/UserModel";
import { config_env } from "./../../config/configuration";
import { userRepo } from "./../../repository/user/UserRepository";
class UserController {

    public get = (req, res) => {
        res.send(" hello world..!");
    }
    public create = (req, res) => {
        let { email, name, password } = req.body;
        userModel.count({ email }).then((result) => {
            if (result == 0) {
                userRepo.create({ email, name, password });
                return res.send(" Accout Created..!");
            }
            return res.send("Email Id already exist..!");
        });
    }
    public update(req, res) {
        res.send("Updated !")
    }

    public getUser(req, res) {
        let { email, password } = req.body;

        userModel.count({ email }).then((result) => {
            if (result > 0) {
                console.log("Login Success..!");
                const token = jwt.sign({ email, password }, config_env.KEY, {
                    expiresIn: 86400,
                });
                res.send(token);
            }
        });
    }

    public delete(req, res) {
        res.send("Deleted !");
    }
}
export const userCon = new UserController();