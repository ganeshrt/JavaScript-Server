import * as express from "express";
import { validationResult } from "express-validator/check";
import * as jwt from "jsonwebtoken";
import { config_env } from "./../../config/configuration";
import { userModel } from "../../repository/user/UserModel";
class Postcontroller {
  public get = (req, res) => {
    //console.log(userModel.find().where());
    res.send("hello");

  }
  public create = (req, res) => {
    let { email, name } = req.body;
    const token = jwt.sign({ email, name }, process.env.KEY);
    res.send(token);
  }
  public update(req, res) {
    res.send("Updated !");
  }

  public delete(req, res) {
    res.send("Deleted !");
  }
}
export const ps = new Postcontroller();
