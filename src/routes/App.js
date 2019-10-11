import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "../pages/Home";
import Login from "../pages/Auth";
import NotFound from "../pages/NotFound";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default App
