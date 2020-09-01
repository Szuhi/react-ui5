import React from "react";
import {
    Avatar,
    ShellBar,
    ShellBarItem,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/icons/add.js";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";

export function MyApp() {
    return (
        <>
            <ShellBar
                logo={<img src="logo192.png" />}
                profile={<Avatar image="" />}
                primaryTitle="My App"
            >
                <ShellBarItem icon="add" text="Add" />
            </ShellBar>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/detail" component={Detail} />
                <Redirect from="/" to="/home" />
            </Switch>
        </>
    );
}