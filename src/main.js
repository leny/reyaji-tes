/* Reyaji/tès
 *
 * /src/main.js - Main React entry point
 *
 * coded by leny@flatLand!
 * started at 12/02/2016
 */

import React from "react";
import ReactDOM from "react-dom";

import HelloWorld from "./components/hello-world";

ReactDOM.render(
    <HelloWorld />,
    document.querySelector( ".container" )
);
