import React from "react";
import './FloatingButton.scss';

export default class FloatingButton extends React.Component {
    render() {
        return (
            <div className="row">
                <div
                    className="float"
                    onClick={this.props.onClick}>
                    <span>{this.props.text}</span>
                </div>
            </div>
        );
    }
}
