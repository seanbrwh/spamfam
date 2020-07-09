import React from "react";
import { Switch, Route } from "react-router";
import Home from "./views/Home";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);
