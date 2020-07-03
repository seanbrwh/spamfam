import { Application } from "express";

type Wrapper = (app: Application) => void;

export const applyMiddleware = (
  middlewareWrapper: Wrapper[],
  app: Application
) => {
  for (const wrapper of middlewareWrapper) {
    wrapper(app);
  }
};
