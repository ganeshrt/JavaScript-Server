import * as express from "express";
import { config_env } from "./config/configuration";
import Server from "./Server";

const server = new Server(config_env);
server.bootstrap();
