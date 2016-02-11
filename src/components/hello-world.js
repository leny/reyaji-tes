/* Reyaji/tès
 *
 * /src/components/hello-world.js - Simple Hello world React Component
 *
 * coded by leny@flatLand!
 * started at 12/02/2016
 */

import React from "react";

export default class HelloWorld extends React.Component {
    constructor( oProps ) {
        super( oProps );
    }

    render() {
        return (
            <p>Hello, World!</p>
        );
    }
}
