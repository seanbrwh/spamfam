import { Application } from "express";

type Wrapper = (app: Application) => void;

export const applySettings = (settingsWrapper: Wrapper[], app: Application) => {
  for (const wrapper of settingsWrapper) {
    wrapper(app);
  }
};
