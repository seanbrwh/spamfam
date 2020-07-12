import "dotenv/config";
import express, { Request, Response } from "express";

import { applyMiddleware } from "./app.middleware/apply.middleware";
import middleware from "./app.middleware";

import { applySettings } from "./app.settings/apply.settings";
import settings from "./app.settings";

import { connectDB } from "./app.services/database";

const app = express();

const { SERVER_PORT, TEST_SEED } = process.env;

applyMiddleware(middleware, app);
applySettings(settings, app);

process.on("uncaughtException", function (err: Error) {
  console.error("Backend error in node server code");
  console.error(err);
});

connectDB();

app.listen(SERVER_PORT, () => {
  console.info(`==> App running at http://localhost:${SERVER_PORT}`);
});
