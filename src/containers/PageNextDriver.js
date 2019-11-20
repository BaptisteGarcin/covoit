import React from "react";

import Passengers from "../components/Passengers";
import Wheel from "../components/Wheel";

export default class PageNextDriver extends React.Component {
    render() {
        return (
            <div className="flexColumn">
                <p style={{textAlign: 'center'}}>Select all the people that will share the car (including you)</p>
                <Passengers onChange={(selectedPassengers) => this.props.setPassengers(selectedPassengers)}/>
            </div>
        );
    }
}


