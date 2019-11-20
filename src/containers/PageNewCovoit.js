import React from "react";

import Passengers from "../components/Passengers";
import DatePicker from "../components/DatePicker";

import './PageNewCovoit.scss'

export default class PageNewCovoit extends React.Component {
    render() {
        return (
            <div className="flexColumn">
                <p style={{textAlign: 'center'}}>Select only the people that you drove</p>
                <Passengers onChange={(selectedPassengers) => this.props.setPassengers(selectedPassengers)}/>
                <DatePicker onChange={(date) => this.props.setDate(date)}/>
            </div>
        );
    }
}


