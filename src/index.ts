import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { IConfig } from "./utils/Interfaces";
import fs from "fs";
import path from "path";

let app = express();
let config: IConfig = JSON.parse(
  fs.readFileSync(path.resolve("./config.json")).toString()
);

app.get("/", (req, res) => {
  res.send("/");
});

app.listen(config.port, () => {
  createConnection()
    .then(async (connection) => {
      console.log(`RUNNING ON PORT ${config.port}`)
    })
    .catch((error) => console.log(error));
});
