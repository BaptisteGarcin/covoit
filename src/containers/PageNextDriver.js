import React from "react";

import Passengers from "../components/Passengers";
import Wheel from "../components/Wheel";

export default class PageNextDriver extends React.Component {
    render() {
        return (
            <div className="flexColumn">
                <Passengers onChange={(selectedPassengers) => this.props.setPassengers(selectedPassengers)}/>
            </div>
        );
    }
}


