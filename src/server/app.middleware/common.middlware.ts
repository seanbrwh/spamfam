import express, { Application, urlencoded, json } from "express";
import { join } from "path";
import morgan from "morgan";
import compress from "compression";

const encodeUrl = (app: Application) => {
  app.use(urlencoded({ extended: true, limit: "50mb" }));
};

const parseBody = (app: Application) => {
  app.use(json({ limit: "50mb" }));
};

const setStaticPath = (app: Application) => {
  app.use("/static", express.static(join(__dirname, "../static/")));
};

const setDevLogs = (app: Application) => {
  app.use(morgan("dev"));
};

const compressApp = (app: Application) => {
  app.use(compress());
};

const serveApp = (app: express.Application) => {
  app.use(
    "*",
    (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      if (req.url.includes("/api") || req.originalUrl.includes("/api")) {
        //need auth implementd
        return next();
      } else {
        res.removeHeader("X-Powered-By");
        res.setHeader("Cache-control", "no-store");
        res.render("index", {
          JS_APP_BUNDLE: require("../static/manifest.json")["react-app.js"],
        });
      }
    }
  );
};

export default [
  encodeUrl,
  parseBody,
  setStaticPath,
  setDevLogs,
  compressApp,
  serveApp,
];
