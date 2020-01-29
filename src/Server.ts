import * as bodyParser from "body-parser";
import * as express from "express";
import { errHandler } from "../libs/routes/errorHandler";
import { routes } from "../libs/routes/notFoundRoute";
import Database from "./../libs/Database"
import { config_env } from "./config/configuration";
import { IConfig } from './config/IConfig';
import { ps } from "./controllers/trainee/controller";
import { functionRouter } from "./router";
export default class Server {
  public app;
  private port = 3000;
  constructor(config_env) {
    this.app = express();
    this.port = config_env.PORT;
    console.log(config_env);
  }
  public bootstrap(): any {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }
  public setupRoutes() {
    this.app.use("/api", functionRouter);
    this.app.get("/health-check", function (req, res) { res.send(" I am Ok!"); });
    this.app.get("/health-error", (req, res) => {
      throw new Error(" Error !");
    });
    this.app.use(errHandler);
    this.app.use(routes);
    this.run();
  }
  public run() {
    try {
      Database.open(config_env.MONGO_URL).then(() => {
        this.app.listen(this.port, () =>
          console.log(`Example app listening on port ${this.port}!`));
      });
    } catch (err) {
      console.log("=========errror in port===== ");
      throw err;
    }
  }
  public initBodyParser() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  }
}
