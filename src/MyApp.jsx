import React from "react";
import {
    Avatar,
    ShellBar,
    ShellBarItem,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/icons/add.js";

export function MyApp() {
    return (
        <div>
            <ShellBar
                logo={<img src="logo192.png" />}
                profile={<Avatar image="" />}
                primaryTitle="My App"
            >
                <ShellBarItem icon="add" text="Add" />
            </ShellBar>
            
        </div>
  );
}