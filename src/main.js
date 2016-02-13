/* Reyaji/tès
 *
 * /src/main.js - Main React entry point
 *
 * coded by leny@flatLand!
 * started at 12/02/2016
 */

import React from "react";
import ReactDOM from "react-dom";

import ProgressiveImage from "./components/progressive-image";

ReactDOM.render(
    <ProgressiveImage sd="http://api.adorable.io/avatars/50/skitty" hd="http://api.adorable.io/avatars/285/skitty" width="285" height="285" alt="An avatar" title="It's me, leny!" className="test" />,
    document.querySelector( ".container" )
);
