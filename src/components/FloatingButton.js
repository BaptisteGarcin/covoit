import React from "react";
import './FloatingButton.scss';

export default class FloatingButton extends React.Component {
    render() {
        return (
            <div
                 className="float"
                 onClick={this.props.onClick}
                 >
                {this.props.text}
            </div>
        );
    }
}
