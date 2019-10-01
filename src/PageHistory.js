import React from "react";
import DrivingHistory from "./DrivingHistory";

export default class PageHistory extends React.Component {
    render() {
        console.log(this.props.covoits)
        return (
            <div>
                <DrivingHistory covoits={this.props.covoits}/>
            </div>
        );
    }
}
