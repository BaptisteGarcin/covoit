import React from "react";

import Passengers from "./Passengers";
import DatePicker from "./DatePicker";


export default class PageHistory extends React.Component {
    render() {
        return (
            <div>
                <Passengers name={"test"}/>
                <DatePicker />
                <br /> <br />
                <button onClick = {() => this.save()}>
                    Valider
                </button>
                <br/><br />
            </div>
        );
    }
}


