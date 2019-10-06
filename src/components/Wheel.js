import React from "react";

export default class Wheel extends React.Component {
    render() {
        return (
            <div id="container" className="centered">
                <canvas id="drawing_canvas"></canvas>
                <div id="status_label">loading...</div>
            </div>
        );
    }
}
