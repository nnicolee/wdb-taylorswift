import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import Merch from "../pages/merch";


export default () => (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/merch" component={Merch} />
    </Switch>
);
