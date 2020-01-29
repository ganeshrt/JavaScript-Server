
import * as dotenv from "dotenv";
import { IConfig } from "./IConfig";
dotenv.config();

const config: IConfig = {
    PORT: Number(process.env.PORT),
    ENV: String(process.env.NODE_ENV),
    KEY: String(process.env.KEY),
    MONGO_URL:String(process.env.MONGO_URL),
};
export let config_env = Object.freeze(config);
