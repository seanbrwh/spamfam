import React from "react";
import { Switch, Route } from "react-router";
import Home from "./views/Home";
import LoginForm from "./LoginForm";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={LoginForm} />
  </Switch>
);
