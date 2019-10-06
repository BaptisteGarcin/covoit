import React from "react";

import Passengers from "../components/Passengers";

export default class PageNextDriver extends React.Component {
    render() {
        return (
            <div className="flexColumn">
                <Passengers onChange={(selectedPassengers) => this.props.setPassengers(selectedPassengers)}/>
            </div>
        );
    }
}


