/* Reyaji/tès
 *
 * /src/components/progressive-image.js - React Component for fast loading, progressive images
 *
 * coded by leny@flatLand!
 * started at 12/02/2016
 */

import React from "react";

export default class ProgressiveImage extends React.Component {
    constructor( oProps ) {
        super( oProps );

        this.sd = oProps.sd;
        this.hd = oProps.hd;

        this._oInitialState = {
            "src": this.sd
        };

        this.state = this._oInitialState;

        this.loadHDVersion();
    }

    loadHDVersion() {
        let _oImage = new Image();

        _oImage.addEventListener( "load", () => {
            this.setState( {
                "src": this.hd
            } );
        } );

        _oImage.addEventListener( "error", () => {} ); // silent fail.

        _oImage.src = this.hd;
    }

    render() {
        return (
            <img {...this.props} src={ this.state.src } />
        );
    }
}
