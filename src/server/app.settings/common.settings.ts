import { Application } from "express";
import { join } from "path";

const setViewDir = (app: Application) => {
  app.set("views", join(__dirname, "../views"));
};

const setViewEngine = (app: Application) => {
  app.set("view engine", "ejs");
};

export default [setViewDir, setViewEngine];
