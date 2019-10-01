import React from "react";
import './FloatingButton.scss';

export default class FloatingButton extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="float">
                    <span>+</span>
                </div>
            </div>
        );
    }
}
