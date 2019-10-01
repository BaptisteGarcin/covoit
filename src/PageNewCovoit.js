import React from "react";

import Passengers from "./Passengers";
import DatePicker from "./DatePicker";

import './PageNewCovoit.scss'

export default class PageNewCovoit extends React.Component {
    render() {
        return (
            <div className="flexColumn">
                <Passengers onChange={(selectedPassengers) => this.props.onChange(selectedPassengers)}/>
                <DatePicker />
            </div>
        );
    }
}


