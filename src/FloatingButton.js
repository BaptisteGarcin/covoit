import React from "react";
import './FloatingButton.scss';

export default class FloatingButton extends React.Component {
    render() {
        return (
            <div>
                <button className="float" onClick={() => this.props.click()}>
                    +
                </button>
            </div>
        );
    }
}
