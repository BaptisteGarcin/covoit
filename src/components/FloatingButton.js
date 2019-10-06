import React from "react";
import './FloatingButton.scss';

export default class FloatingButton extends React.Component {
    render() {
        return (
            <div
                style={{backgroundColor: `${this.props.color}`}}
                 className="float"
                 onClick={this.props.onClick}
                 >
                {this.props.text}
            </div>
        );
    }
}
